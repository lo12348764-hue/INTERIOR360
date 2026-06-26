# SEO-чек-лист: полное руководство (2026–2027)

> Практическое руководство по SEO-оптимизации HTML-документа с точки зрения специалиста с 20-летним стажем. Обновлено с учётом трендов 2026–2027 гг.

---

## 1. Критически важное

Без этих элементов корректная индексация невозможна.

### `<title>` — заголовок страницы

- **Длина:** 50-60 символов (для всех поисковиков, включая Яндекс)
- **Правило:** Ключевое слово в начале, бренд в конце
- **Уникальность:** Каждая страница — свой заголовок

```html
<title>3D-визуализация интерьера | INTERIOR.360</title>
```

### `<meta name="description">` — описание

- **Длина:** 150-160 символов
- **Назначение:** Влияет на CTR в выдаче (не на позиции напрямую)
- **Правило:** Призыв к действию + ключевые слова

```html
<meta name="description" content="Создаём фотореалистичные 3D-визуализации интерьеров. Рассчитайте стоимость проекта онлайн." />
```

### `<link rel="canonical">` — канонический URL

Решает проблему дублей страниц.

```html
<link rel="canonical" href="https://interior360.example/services/" />
```

**Правила:**
- Обязательно на каждой странице
- Указывает на саму себя (если нет дублей)
- Указывает на основную версию (при дублях)

---

## 2. Безопасность и протоколы (Критично)

### HTTPS — обязательное требование

В 2026 году отсутствие HTTPS является:
- Фактором ранжирования (Google, Яндекс)
- Причиной блокировки в браузерах (предупреждение "Небезопасно")
- Препятствием для сбора данных аналитики

```html
<!-- Все ссылки должны использовать HTTPS -->
<link rel="canonical" href="https://interior360.example/page/" />
<meta property="og:url" content="https://interior360.example/page/" />
```

**Чек-лист:**
- [ ] Сайт работает по HTTPS (валидный сертификат)
- [ ] Все внутренние ссылки используют HTTPS
- [ ] Настроен редирект HTTP → HTTPS (301)
- [ ] Нет смешанного контента (Mixed Content)

---

## 3. Техническая SEO-основа

### `<meta name="viewport">` — мобильная адаптивность

С 2019 года Google индексирует мобильную версию первой (Mobile-First Indexing).

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### `<meta name="robots">` — управление индексацией

| Значение | Поведение |
|----------|-----------|
| `index, follow` | Индексировать, переходить по ссылкам (по умолчанию) |
| `noindex, follow` | Не индексировать, но переходить |
| `noindex, nofollow` | Полная изоляция страницы |
| `noarchive` | Не кешировать |
| `nosnippet` | Не показывать сниппет |

```html
<meta name="robots" content="index,follow" />
```

### `<html lang="ru">` — язык документа

Обязательно для мультиязычных сайтов. Помогает поисковикам определить целевую аудиторию.

```html
<html lang="ru">
<html lang="en">
```

### robots.txt и sitemap.xml

**robots.txt** — файл, указывающий поисковикам, какие страницы индексировать:

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

Sitemap: https://interior360.example/sitemap.xml
```

**sitemap.xml** — карта сайта для быстрой индексации:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://interior360.example/</loc>
    <lastmod>2026-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

**Чек-лист:**
- [ ] robots.txt не блокирует важные ресурсы (CSS, JS, изображения)
- [ ] sitemap.xml сгенерирован и актуален
- [ ] sitemap.xml добавлен в Яндекс.Вебмастер / Google Search Console

---

## 4. Семантическая вёрстка

Влияет на понимание контента поисковиками.

### Заголовки `<h1>`-`<h6>`

| Правило | Описание |
|---------|----------|
| Один `<h1>` | Один заголовок первого уровня на страницу |
| Ключевое слово | `<h1>` содержит основное ключевое слово |
| Иерархия | Нельзя пропускать уровни (из `<h1>` сразу в `<h4>`) |
| Уникальность | Заголовки не дублируют `<title>` |

```html
<h1>3D-визуализация интерьеров</h1>
  <h2>Наши услуги</h2>
    <h3>Концептуальный стиль</h3>
    <h3>3D-визуализация</h3>
  <h2>Портфолио</h2>
```

### Семантические теги HTML5

| Тег | Назначение | Пример использования |
|-----|-----------|---------------------|
| `<header>` | Шапка страницы | Логотип, навигация |
| `<nav>` | Навигация | Меню сайта |
| `<main>` | Основной контент | Единственный на страницу |
| `<article>` | Самостоятельная единица | Статья блога, пост |
| `<section>` | Тематическая группировка | Секция "Услуги", "О нас" |
| `<aside>` | Дополнительная информация | Боковая панель, виджеты |
| `<footer>` | Подвал | Контакты, копирайт |
| `<figure>` + `<figcaption>` | Изображения с подписями | Фото проекта |

```html
<main>
  <article>
    <h1>Заголовок статьи</h1>
    <section>
      <h2>Введение</h2>
      <p>Текст...</p>
    </section>
    <figure>
      <img src="photo.jpg" alt="Описание" />
      <figcaption>Подпись к изображению</figcaption>
    </figure>
  </article>
</main>
```

---

## 5. Производительность и современные форматы

### Конвертация изображений в WebP/AVIF

Современные форматы уменьшают вес файлов на 25-50% без потери качества.

```html
<picture>
  <source srcset="image.avif" type="image/avif" />
  <source srcset="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Описание" width="800" height="600" />
</picture>
```

**Чек-лист:**
- [ ] Изображения конвертированы в WebP/AVIF
- [ ] Fallback на JPG/PNG для старых браузеров
- [ ] Сжатие изображений (lossy/lossless)

### Preload критических ресурсов

Улучшает LCP (Largest Contentful Paint).

```html
<!-- Шрифты -->
<link rel="preload" href="/fonts/main.woff2" as="font" type="font/woff2" crossorigin />

<!-- Критические изображения (первый экран) -->
<link rel="preload" href="/images/hero.jpg" as="image" />

<!-- Критический CSS -->
<link rel="preload" href="/styles/critical.css" as="style" />
```

### Preconnect к внешним доменам

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://cdn.example.com" crossorigin />
```

**Чек-лист:**
- [ ] Preload для шрифтов и критических изображений
- [ ] Preconnect к внешним CDN
- [ ] Нет render-blocking ресурсов

---

## 6. Доступность (Accessibility / a11y)

Поисковые системы все учитывают доступность сайта. Доступные сайты получают преимущество в ранжировании.

### ARIA-атрибуты для интерактивных элементов

```html
<!-- Кнопки без текста -->
<button aria-label="Открыть меню">
  <svg>...</svg>
</button>

<!-- Навигация -->
<nav aria-label="Основная навигация">...</nav>

<!-- Модальные окна -->
<div role="dialog" aria-modal="true" aria-labelledby="title">...</div>

<!-- Формы -->
<label for="email">Email</label>
<input type="email" id="email" aria-required="true" />
```

### Контрастность цветов

Соотношение контрастности текста:
- **Обычный текст:** минимум 4.5:1
- **Крупный текст (18px+):** минимум 3:1
- **Интерактивные элементы:** минимум 3:1

### Клавиатурная навигация

```css
/* Видимый фокус для клавиатурных пользователей */
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
```

**Чек-лист:**
- [ ] `aria-label` на кнопках без текста
- [ ] `aria-label` на иконках и SVG
- [ ] Контрастность текста ≥ 4.5:1
- [ ] Фокус виден при навигации клавиатурой
- [ ] Формы имеют связанные `<label>`

---

## 7. Мобильная адаптация (углубление)

### Tap targets — размер кликабельных элементов

Google требует размер кликабельных элементов не менее **48×48 px** с отступом **8 px**.

```css
/* Минимальный размер кнопок */
button, a, input[type="checkbox"] {
  min-width: 48px;
  min-height: 48px;
}

/* Отступы между кликабельными элементами */
.nav a {
  padding: 12px 8px;
}
```

**Чек-лист:**
- [ ] Размер кликабельных элементов ≥ 48×48 px
- [ ] Отступы между кликабельными элементами ≥ 8 px
- [ ] Нет перекрывающихся ссылок/кнопок

---

## 8. E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)

Для коммерческих сайтов и YMYL (Your Money Your Life) ниш важно подтверждение экспертности.

### Разметка авторства

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Заголовок статьи",
  "author": {
    "@type": "Person",
    "name": "Марина Иванова",
    "jobTitle": "Архитектор-дизайнер",
    "url": "https://interior360.example/about/#marina",
    "sameAs": [
      "https://instagram.com/marina_design",
      "https://t.me/marina_design"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "INTERIOR.360",
    "logo": {
      "@type": "ImageObject",
      "url": "https://interior360.example/logo.png"
    }
  }
}
```

### Отзывы и рейтинги

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "INTERIOR.360",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47"
  },
  "review": [
    {
      "@type": "Review",
      "author": {"@type": "Person", "name": "Андрей К."},
      "reviewBody": "Отличная работа, все сроки соблюдены.",
      "reviewRating": {"@type": "Rating", "ratingValue": "5"}
    }
  ]
}
```

**Чек-лист:**
- [ ] Разметка автора статей (Article → author)
- [ ] Ссылки на профили экспертов (sameAs)
- [ ] Разметка отзывов (Review)
- [ ] Разметка рейтинга (aggregateRating)

---

## 9. Изображения

Важны для Image Search и Core Web Vitals.

### `alt` — текстовое описание (обязательно!)

```html
<img src="interior.jpg" alt="Светлая гостиная с мебелью в скандинавском стиле" />
```

**Правила:**
- Описывает содержание изображения
- Содержит ключевые слова естественно
- Длина: 50-125 символов
- Для декоративных: `alt=""`

### `loading="lazy"` — ленивая загрузка

```html
<img src="photo.jpg" alt="..." loading="lazy" />
```

**Правило:** Применяйте к изображениям ниже первого экрана.

### `width` и `height` — предотвращают CLS

```html
<img src="photo.jpg" width="800" height="600" alt="..." />
```

**Почему важно:** Без этих атрибутов браузер не знает размер изображения до загрузки, что вызывает «прыжки» контента (CLS).

---

## 10. Для социальных сетей и поисковых выдач

### Open Graph (влияют на кликабельность в соцсетях)

```html
<meta property="og:title" content="Заголовок страницы" />
<meta property="og:description" content="Краткое описание" />
<meta property="og:image" content="https://site.ru/og-image.jpg" />
<meta property="og:url" content="https://site.ru/page/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Название сайта" />
```

**Рекомендации по `og:image`:**
- Размер: 1200×630 пикселей
- Формат: JPG, PNG, WebP
- Без текста на изображении (или минимальный)
- Уникальное для каждой страницы

### Twitter Card (для Twitter/X)

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Заголовок" />
<meta name="twitter:description" content="Описание" />
<meta name="twitter:image" content="https://site.ru/twitter-image.jpg" />
```

---

## 11. Структурная разметка (Schema.org)

Влияет на появление расширенных сниппетов в выдаче.

### Для бизнеса (LocalBusiness)

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
  "openingHours": "Mo-Fr 10:00-19:00",
  "image": "https://interior360.example/images/logo.jpg",
  "priceRange": "$$"
}
```

### Для статей (Article)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Заголовок статьи",
  "datePublished": "2026-01-15",
  "dateModified": "2026-01-15",
  "author": {
    "@type": "Person",
    "name": "Автор"
  },
  "publisher": {
    "@type": "Organization",
    "name": "INTERIOR.360"
  }
}
```

### Для хлебных крошек (BreadcrumbList)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://site.ru/" },
    { "@type": "ListItem", "position": 2, "name": "Услуги", "item": "https://site.ru/services/" }
  ]
}
```

### Для изображений (ImageObject — важно для визуальных ниш)

```json
{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": "https://interior360.example/images/project.jpg",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "acquireLicensePage": "https://interior360.example/license",
  "copyrightYear": 2026,
  "creator": {
    "@type": "Organization",
    "name": "INTERIOR.360"
  }
}
```

---

## 12. Для мультиязычных сайтов

### `hreflang` — связь между версиями

```html
<link rel="alternate" hreflang="ru" href="https://site.ru/page/" />
<link rel="alternate" hreflang="en" href="https://site.ru/en/page/" />
<link rel="alternate" hreflang="x-default" href="https://site.ru/page/" />
```

**Правила:**
- Каждая страница ссылается на все языковые версии (включая саму себя)
- `x-default` — версия по умолчанию для неопределённых языков
- Обратные ссылки обязательны (если A ссылается на B, B должен ссылаться на A)

---

## 13. Чек-лист для проверки

### Безопасность

- [ ] Сайт работает по HTTPS (валидный сертификат)
- [ ] Настроен редирект HTTP → HTTPS
- [ ] Нет смешанного контента (Mixed Content)

### В `<head>`

- [ ] `<title>` (50-60 символов, уникальный)
- [ ] `<meta name="description">` (150-160 символов)
- [ ] `<meta name="robots" content="index,follow">`
- [ ] `<link rel="canonical">`
- [ ] `<meta name="viewport">`
- [ ] `<html lang="ru">`
- [ ] `<meta property="og:title">`
- [ ] `<meta property="og:description">`
- [ ] `<meta property="og:image">`
- [ ] `<meta property="og:url">`
- [ ] Schema.org разметка

### На странице

- [ ] Один `<h1>` с ключевым словом
- [ ] Иерархия заголовков `<h2>`-`<h6>`
- [ ] Семантические теги (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`)
- [ ] `alt` на всех изображениях
- [ ] `width`/`height` на ключевых изображениях
- [ ] `loading="lazy"` на изображениях ниже первого экрана
- [ ] Изображения в WebP/AVIF с fallback

### Производительность

- [ ] Preload для шрифтов и критических изображений
- [ ] Preconnect к внешним CDN
- [ ] Нет render-blocking ресурсов

### Доступность

- [ ] `aria-label` на кнопках без текста
- [ ] Контрастность текста ≥ 4.5:1
- [ ] Фокус виден при навигации клавиатурой
- [ ] Формы имеют связанные `<label>`

### Мобильная адаптация

- [ ] Размер кликабельных элементов ≥ 48×48 px
- [ ] Отступы между кликабельными элементами ≥ 8 px

### E-E-A-T

- [ ] Разметка автора статей
- [ ] Ссылки на профили экспертов
- [ ] Разметка отзывов и рейтинга

### Файлы

- [ ] robots.txt не блокирует важные ресурсы
- [ ] sitemap.xml сгенерирован и актуален
- [ ] sitemap.xml добавлен в Яндекс.Вебмастер / Google Search Console

### Для мультиязычности

- [ ] `<link rel="alternate" hreflang="ru">`
- [ ] `<link rel="alternate" hreflang="en">`
- [ ] `<link rel="alternate" hreflang="x-default">`

---

## 14. Типичные ошибки

| Ошибка | Последствие |
|--------|------------|
| Дубли `<title>` на разных страницах | Понижение в выдаче |
| Пустой `alt` у информативных изображений | Потеря трафика из Image Search |
| Отсутствие `canonical` | Индексация дублей |
| `og:image` не указан | Пустой превью в соцсетях |
| Пропуск уровней заголовков | Нарушение семантики |
| `<h1>` повторяет `<title>` | Дублирование сигнала |
| Нет `viewport` | Исключение из мобильной индексации |
| Блокировка CSS/JS в robots.txt | Google не может оценить мобильную версию |
| HTTP вместо HTTPS | Понижение + предупреждение в браузере |

---

## 15. Приоритеты для проекта INTERIOR360

| Приоритет | Задача | Влияние |
|-----------|--------|---------|
| 0 (Срочно) | Проверить HTTPS и robots.txt | Безопасность, индексация |
| 1 | Добавить Schema.org (LocalBusiness + ImageObject) | Расширенные сниппеты, E-E-A-T |
| 2 | Оптимизировать изображения (WebP, width/height, alt) | CLS, Core Web Vitals, Image Search |
| 3 | Настроить Open Graph для портфолио | Соцсети (Instagram, Telegram, VK) |
| 4 | Добавить Twitter Card | Twitter/X |
| 5 | Проверить уникальность `<title>` и `<description>` | Позиции в выдаче |
| 6 | Добавить ARIA-атрибуты | Доступность, SEO |
| 7 | Настроить preload/preconnect | Производительность |
