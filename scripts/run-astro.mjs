import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { execFileSync } from "node:child_process";

const [, , command = "dev", ...forwardedArgs] = process.argv;
const projectRoot = process.cwd();
const astroEntrypoint = path.join(projectRoot, "node_modules", "astro", "astro.js");

if (!existsSync(astroEntrypoint)) {
  console.error(`Astro entrypoint was not found at ${astroEntrypoint}`);
  process.exit(1);
}

const isWindows = process.platform === "win32";
const hasNonAsciiPath = /[^\x00-\x7F]/.test(projectRoot);

if (!isWindows || !hasNonAsciiPath) {
  runAstro(projectRoot, forwardedArgs);
} else {
  runFromAsciiWorkspace();
}

function runFromAsciiWorkspace() {
  const runDir = path.join("E:\\SITE_TEMP", "interior360-local-site");
  const sourceDir = projectRoot.replace(/[\\/]$/, "");

  console.warn(
    `Problematic Windows project path detected. Mirroring the project to ${runDir} to avoid filesystem and spawn EPERM issues.`
  );

  const robocopyArgs = [
    sourceDir,
    runDir,
    "/MIR",
    "/XD",
    ".git",
    ".astro",
    ".snapshots",
    "/NFL",
    "/NDL",
    "/NJH",
    "/NJS",
    "/NP",
  ];

  const robocopy = spawn("robocopy", robocopyArgs, {
    stdio: "inherit",
    windowsHide: true,
  });

  robocopy.on("exit", (code) => {
    if (code === null || code >= 8) {
      process.exit(code ?? 1);
    }

    const mirroredAstroEntrypoint = path.join(runDir, "node_modules", "astro", "astro.js");
    if (!existsSync(mirroredAstroEntrypoint)) {
      console.error(`Astro entrypoint was not mirrored to ${mirroredAstroEntrypoint}`);
      process.exit(1);
    }

    const astro = spawn(
      process.execPath,
      [mirroredAstroEntrypoint, command, ...forwardedArgs],
      {
        cwd: runDir,
        stdio: "inherit",
        windowsHide: false,
        env: {
          ...process.env,
          INTERIOR360_RUN_DIR: runDir,
          INTERIOR360_VITE_ALLOW: runDir,
          NODE_OPTIONS: appendNodeOptions(process.env.NODE_OPTIONS, buildNodeRequireOption(runDir)),
        },
      }
    );

    astro.on("exit", (astroCode) => {
      if (command === "build" && astroCode === 0) {
        syncBuildOutput(runDir, sourceDir, astroCode);
        return;
      }

      process.exit(astroCode ?? 1);
    });
  });
}

function syncBuildOutput(runDir, sourceDir, exitCode) {
  const mirroredDist = path.join(runDir, "dist");
  if (!existsSync(mirroredDist)) {
    process.exit(exitCode);
    return;
  }

  const copyDist = spawn(
    "robocopy",
    [
      mirroredDist,
      path.join(sourceDir, "dist"),
      "/MIR",
      "/NFL",
      "/NDL",
      "/NJH",
      "/NJS",
      "/NP",
    ],
    {
      stdio: "inherit",
      windowsHide: true,
    }
  );

  copyDist.on("exit", (copyCode) => {
    if (copyCode === null || copyCode >= 8) {
      process.exit(copyCode ?? 1);
      return;
    }

    process.exit(exitCode);
  });
}

function runAstro(cwd, args) {
  const sourceDir = resolveSubstSourceDir(cwd);
  const astro = spawn(process.execPath, [astroEntrypoint, command, ...args], {
    cwd,
    stdio: "inherit",
    windowsHide: false,
    env: {
      ...process.env,
      INTERIOR360_RUN_DIR: cwd,
      INTERIOR360_VITE_ALLOW: sourceDir ?? cwd,
      NODE_OPTIONS: appendNodeOptions(process.env.NODE_OPTIONS, buildNodeRequireOption(cwd)),
      ...(sourceDir ? { INTERIOR360_SOURCE_DIR: sourceDir } : {}),
    },
  });

  astro.on("exit", (code) => {
    process.exit(code ?? 1);
  });
}

function appendNodeOptions(existingOptions, requiredOption) {
  if (!requiredOption) return existingOptions ?? "";
  if (!existingOptions) return requiredOption;
  if (existingOptions.includes(requiredOption)) return existingOptions;
  return `${existingOptions} ${requiredOption}`;
}

function buildNodeRequireOption(baseDir) {
  const preloadPath = path.join(baseDir, "scripts", "vite-windows-safe-realpath.cjs").replace(/\\/g, "/");
  return `--require "${preloadPath}"`;
}

function resolveSubstSourceDir(cwd) {
  if (process.platform !== "win32") return null;

  const driveRoot = path.parse(path.resolve(cwd)).root.toUpperCase().replace(/[\\/]+$/, "");
  if (!/^[A-Z]:$/.test(driveRoot)) return null;

  try {
    const substOutput = execFileSync("cmd.exe", ["/c", "subst"], {
      encoding: "utf8",
      windowsHide: true,
    });
    const prefix = `${driveRoot} => `;

    const match = substOutput
      .split(/\r?\n/)
      .map((line) => line.trim())
      .find((line) => line.toUpperCase().startsWith(prefix));

    if (!match) return null;

    const parts = match.split("=>");
    if (parts.length < 2) return null;

    return parts[1].trim();
  } catch {
    return null;
  }
}
