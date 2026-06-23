"use strict";

const childProcess = require("node:child_process");
const fs = require("node:fs");
const fsPromises = require("node:fs/promises");

const originalExec = childProcess.exec;
const originalRename = fs.rename;
const originalRenamePromises = fsPromises.rename;

childProcess.exec = function patchedExec(command, options, callback) {
  if (typeof options === "function") {
    callback = options;
    options = undefined;
  }

  if (process.platform === "win32" && typeof command === "string" && command.trim().toLowerCase() === "net use") {
    const child = {
      pid: undefined,
      kill() {
        return false;
      },
    };

    queueMicrotask(() => {
      if (typeof callback === "function") {
        callback(new Error("Skipping blocked `net use` probe on this Windows environment."), "", "");
      }
    });

    return child;
  }

  return originalExec.call(this, command, options, callback);
};

function shouldFallbackRename(error) {
  return process.platform === "win32" && error && error.code === "EPERM";
}

async function fallbackRename(source, destination, originalError) {
  try {
    await fsPromises.copyFile(source, destination);
    await fsPromises.unlink(source);
  } catch {
    throw originalError;
  }
}

fsPromises.rename = async function patchedRename(source, destination) {
  try {
    return await originalRenamePromises.call(this, source, destination);
  } catch (error) {
    if (!shouldFallbackRename(error)) {
      throw error;
    }

    return fallbackRename(source, destination, error);
  }
};

fs.rename = function patchedRename(source, destination, callback) {
  if (typeof callback !== "function") {
    return originalRename.call(this, source, destination, callback);
  }

  return originalRename.call(this, source, destination, async (error) => {
    if (!shouldFallbackRename(error)) {
      callback(error);
      return;
    }

    try {
      await fallbackRename(source, destination, error);
      callback(null);
    } catch (fallbackError) {
      callback(fallbackError);
    }
  });
};
