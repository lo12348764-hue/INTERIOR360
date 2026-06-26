# SEO-чек-лист: техническая оптимизация HTML (2026–2027)

> Руководство для автоматической генерации или проверки HTML-кода. Каждый пункт критичен для органического продвижения, индексации и пользовательского опыта.

---

## 1. Глобальная структура и безопасность (Critical)

Без этих элементов сайт может быть исключён из индекса или помечен как небезопасный.

- [ ] **Протокол HTTPS**: Все ресурсы загружаются по защищённому протоколу. Отсутствуют смешанные контент (Mixed Content).
- [ ] **Doctype**: В начале документа указан `<!DOCTYPE html>`.
- [ ] **Язык документа**: У тега `<html>` задан атрибут `lang` (например, `lang="ru"`).
- [ ] **Charset**: Указана кодировка `<meta charset="UTF-8">`.
- [ ] **Viewport**: `<meta name="viewport" content="width=device-width, initial-scale=1.0" />` (обязательно для Mobile-First Indexing).

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>...</title>
</head>
```

---

## 2. Мета-теги и управление индексацией

Фундамент взаимодействия с поисковыми роботами.

### Основные мета-теги

| Мета-тег | Длина | Правила |
|----------|-------|---------|
| `<title>` | 50–60 символов | Структура: `[Ключевое слово] \| [Бренд]`. Уникален для каждой страницы |
| `<meta description>` | 150–160 символов | Содержит призыв к действию (CTA) и ключевые слова |
| `<link rel="canonical">` | — | Указывает на основную версию страницы. Присутствует на каждой странице |

### Управление роботами

- [ ] **Robots Meta**: `<meta name="robots" content="index, follow" />` для основных страниц.
- [ ] Использование `noindex` только для служебных, дублей или приватных разделов.

```html
<title>3D-визуализация интерьеров | INTERIOR.360</title>
<meta name="description" content="Создаём фотореалистичные 3D-визуализации интерьеров. Рассчитайте стоимость онлайн." />
<link rel="canonical" href="https://interior360.example/services/" />
<meta name="robots" content="index,follow" />
```

---

## 3. Семантическая вёрстка и доступность (HTML5 & a11y)

Поисковики используют структуру для понимания контекста контента.

### Заголовки (Headings)

- Только один `<h1>` на страницу, содержащий главный ключ.
- Строгая иерархия: `<h1>` → `<h2>` → `<h3>`. Пропуск уровней запрещён.
- Текст заголовков не должен полностью дублировать `<title>`.

### Семантические контейнеры

| Тег | Назначение |
|-----|-----------|
| `<header>` | Шапка страницы (лого, навигация) |
| `<nav>` | Основное меню (обязательно для него) |
| `<main>` | Основной контент (только один раз на страницу) |
| `<article>` | Самостоятельная единица (статья, пост) |
| `<section>` | Тематическая группировка |
| `<aside>` | Дополнительная информация |
| `<footer>` | Подвал (контакты, копирайт) |

### Навигация

- Основное меню обёрнуто в `<nav>`.
- Ссылки имеют понятные тексты анкоров (не "кликните здесь").

```html
<header>
  <nav aria-label="Основная навигация">
    <a href="/">Главная</a>
    <a href="/services/">Услуги</a>
  </nav>
</header>
<main>
  <article>
    <h1>Заголовок</h1>
    <section><h2>Подзаголовок</h2></section>
  </article>
</main>
<footer>...</footer>
```

---

## 4. Оптимизация изображений и медиа (Core Web Vitals)

Критично для показателей LCP и CLS.

- [ ] **Атрибуты размеров**: У всех тегов `<img>` явно указаны `width` и `height`.
- [ ] **Alt-текст**: У каждого информативного изображения есть `alt` (50–125 символов). Декоративные — `alt=""`.
- [ ] **Lazy Loading**: Для изображений ниже первого экрана — `loading="lazy"`.
- [ ] **Современные форматы**: Предпочтение WebP или AVIF. Использование `<picture>` для `srcset`.
- [ ] **Подписи**: Изображения с важным контекстом обернуты в `<figure>` с `<figcaption>`.

```html
<picture>
  <source srcset="image.avif" type="image/avif" />
  <source srcset="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Светлая гостиная в скандинавском стиле" width="800" height="600" loading="lazy" />
</picture>

<figure>
  <img src="project.jpg" alt="Проект кухни" width="1200" height="800" />
  <figcaption>Кухня-гостиная в проекте «Ателье»</figcaption>
</figure>
```

---

## 5. Социальные сети и сниппеты (Open Graph & Twitter Cards)

Влияет на CTR при распространении ссылок в мессенджерах и соцсетях.

### Open Graph

- [ ] `og:title`, `og:description`, `og:url`, `og:type`.
- [ ] `og:image`: Размер 1200×630 px, формат JPG/PNG/WebP, без мелкого текста.

### Twitter Card

- [ ] `twitter:card` (summary_large_image), `twitter:title`, `twitter:image`.

```html
<meta property="og:title" content="3D-визуализация интерьеров" />
<meta property="og:description" content="Создаём фотореалистичные визуализации для вашего проекта." />
<meta property="og:image" content="https://interior360.example/og-image.jpg" />
<meta property="og:url" content="https://interior360.example/" />
<meta property="og:type" content="website" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="3D-визуализация интерьеров" />
<meta name="twitter:image" content="https://interior360.example/og-image.jpg" />
```

---

## 6. Структурная разметка (Schema.org / JSON-LD)

Помогает формировать расширенные сниппеты (Rich Snippets).

- [ ] **Формат**: JSON-LD внутри `<script type="application/ld+json">`.
- [ ] **Типы разметки**:

| Тип | Где использовать |
|-----|-----------------|
| `LocalBusiness` / `Organization` | Главная, контакты |
| `Article` / `BlogPosting` | Статьи блога |
| `BreadcrumbList` | Навигационная цепочка |
| `ImageObject` | Портфолио, галереи |
| `Product` | Карточки товаров (если есть) |

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "INTERIOR.360",
  "description": "Студия 3D-визуализации интерьеров",
  "url": "https://interior360.example",
  "telephone": "+7-916-680-23-66",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Москва",
    "addressCountry": "RU"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47"
  }
}
```

---

## 7. Производительность и ресурсы

- [ ] **Preload**: Критические шрифты или CSS предзагружаются через `<link rel="preload">`.
- [ ] **CSS/JS**: Стили не блокируют рендеринг. JS-скрипты имеют `defer` или `async`.
- [ ] **Favicon**: Присутствует фавиконка различных форматов (ico, png, svg) для разных устройств.
- [ ] **Preconnect**: К внешним CDN и доменам.

```html
<link rel="preload" href="/fonts/main.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="icon" type="image/png" href="/favicon.png" />
<script defer src="/script.js"></script>
```

---

## 8. Мультиязычность (если применимо)

- [ ] **Hreflang**: Для каждой языковой версии проставлены взаимные ссылки `<link rel="alternate" hreflang="...">`.
- [ ] Присутствует версия `x-default`.

```html
<link rel="alternate" hreflang="ru" href="https://site.ru/page/" />
<link rel="alternate" hreflang="en" href="https://site.ru/en/page/" />
<link rel="alternate" hreflang="x-default" href="https://site.ru/page/" />
```

---

## 9. Доступность (a11y)

- [ ] **ARIA-атрибуты**: На кнопках без текста — `aria-label`.
- [ ] **Контрастность**: Текст ≥ 4.5:1, крупный текст ≥ 3:1.
- [ ] **Фокус**: Видимый фокус при навигации клавиатурой.
- [ ] **Формы**: Связанные `<label>` с `<input>`.

```html
<button aria-label="Открыть меню">
  <svg>...</svg>
</button>

<label for="email">Email</label>
<input type="email" id="email" aria-required="true" />
```

---

## 10. Мобильная адаптация

- [ ] **Tap targets**: Размер кликабельных элементов ≥ 48×48 px.
- [ ] **Отступы**: Между кликабельными элементами ≥ 8 px.

```css
button, a, input[type="checkbox"] {
  min-width: 48px;
  min-height: 48px;
}
```

---

## 11. Чек-лист быстрой проверки

| Элемент | Статус | Комментарий |
|---------|--------|-------------|
| **HTTPS Valid** | ⬜ | Сертификат активен, нет Mixed Content |
| **Unique Title** | ⬜ | Нет дублей в рамках сайта |
| **H1 Present** | ⬜ | Один на страницу, с ключевым словом |
| **Images Alt** | ⬜ | Заполнены у всех контентных img |
| **CLS Safe** | ⬜ | Width/height заданы у изображений |
| **Schema Valid** | ⬜ | Ошибок в валидаторе Google нет |
| **Mobile Friendly** | ⬜ | Viewport настроен, элементы не мелкие |
| **OG Tags** | ⬜ | og:image заполнен (1200×630) |
| **Hreflang** | ⬜ | Взаимные ссылки между версиями |
| **robots.txt** | ⬜ | Не блокирует важные ресурсы |
| **sitemap.xml** | ⬜ | Актуален, добавлен в Search Console |

---

## 12. Типичные ошибки

| Ошибка | Последствие |
|--------|------------|
| Дубли `<title>` | Понижение в выдаче |
| Пустой `alt` у информативных изображений | Потеря трафика из Image Search |
| Отсутствие `canonical` | Индексация дублей |
| `og:image` не указан | Пустой превью в соцсетях |
| Блокировка CSS/JS в robots.txt | Google не может оценить мобильную версию |
| HTTP вместо HTTPS | Понижение + предупреждение в браузере |
| Пропуск уровней заголовков | Нарушение семантики |

---

*Примечание для агента: При генерации кода всегда отдавай приоритет семантической чистоте и скорости загрузки. Избегай inline-стилей для крупных блоков и избыточной вложенности div-ов.*
