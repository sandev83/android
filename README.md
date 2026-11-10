# Andrei Siutchin - Personal Website

Личный сайт-визитка Senior Android Developer.

## 🎨 Дизайн

Сайт выполнен в стиле IDE/терминала с цветовой схемой Dracula:
- Тёмная тема
- Моноширинный шрифт
- Цветовая палитра Dracula
- Минималистичный дизайн без лишних анимаций

## 📁 Структура проекта

```
.
├── index.html          # Русская версия
├── en/
│   └── index.html      # Английская версия
├── style.css           # Общие стили
├── script.js           # JavaScript функциональность
└── README.md           # Документация
```

## 🚀 Развёртывание на GitHub Pages

### Вариант 1: Через настройки репозитория

1. Создайте новый репозиторий на GitHub (например, `andrei-siutchin-website`)
2. Загрузите все файлы в репозиторий
3. Перейдите в Settings → Pages
4. В разделе "Source" выберите ветку `main` (или `master`) и папку `/ (root)`
5. Нажмите "Save"
6. Через несколько минут сайт будет доступен по адресу: `https://yourusername.github.io/repository-name/`

### Вариант 2: Через GitHub Actions (автоматический деплой)

Создайте файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

## 🌐 Кастомный домен (опционально)

Если хотите использовать свой домен:

1. Купите домен (например, на Namecheap, GoDaddy)
2. В настройках GitHub Pages укажите ваш домен
3. Добавьте CNAME файл с вашим доменом:
   ```
   yourdomain.com
   ```
4. Настройте DNS-записи у регистратора домена

## 📝 Содержание

### Секции сайта:
- **Hero** - Приветствие и краткое описание
- **About** - Подробная информация о себе
- **Skills** - Технические навыки по категориям
- **Experience** - Опыт работы с достижениями
- **Projects** - Портфолио проектов со ссылками на Play Market
- **Contact** - Контактная информация

### Языки:
- 🇷🇺 Русская версия: `/index.html`
- 🇬🇧 Английская версия: `/en/index.html`

Переключение между языками через навигационное меню.

## 🎨 Цветовая схема Dracula

```css
--bg: #282a36
--current-line: #44475a
--fg: #f8f8f2
--comment: #6272a4
--cyan: #8be9fd
--green: #50fa7b
--orange: #ffb86c
--pink: #ff79c6
--purple: #bd93f9
--red: #ff5555
--yellow: #f1fa8c
```

## 🔧 Технологии

- HTML5
- CSS3 (CSS Variables, Grid, Flexbox)
- Vanilla JavaScript
- Адаптивный дизайн (mobile-first)

## 📱 Адаптивность

Сайт полностью адаптивен и корректно отображается на:
- Desktop (1920px+)
- Laptop (1366px - 1920px)
- Tablet (768px - 1366px)
- Mobile (320px - 768px)

## 📞 Контакты

- **Email:** SiutkinAN@gmail.com | andreisiutchin@gmail.com
- **Telegram:** @SiutkinAndrey
- **LinkedIn:** https://linkedin.com/in/andrey-siutkin-developer
- **Play Market:** https://play.google.com/store/apps/developer?id=sandev83

## 📄 Лицензия

© 2026 Andrei Siutchin. Все права защищены.

---

Создано с ❤️ и Kotlin
