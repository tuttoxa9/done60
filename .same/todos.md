# Задачи по модификации сайта Done60

## Основные изменения для мобильной версии

- [x] Изучить текущую структуру проекта и найти шар рядом с "Зарабатывай 2000-5000 BYN"
- [x] Убрать Iridescence (WebGL анимацию) на мобильных устройствах
- [x] Исправить фон на мобильных устройствах (вернуть градиент как в калькуляторе/правовых документах)
- [x] Убрать шар на сайте рядом с "Зарабатывай 2000-5000 BYN"
- [x] Исправить sticky элемент, который мешает нажимать на ссылки политики и условий внизу на мобильных
- [x] Настроить git remote для пуша изменений
- [x] Запушить изменения в GitHub

## Технические детали

- Проект использует React + Vite + TypeScript
- Стили: Tailwind CSS
- Компоненты: shadcn/ui
- Нужно найти и проанализировать:
  - Hero компонент (вероятно содержит шар)
  - StickyMobileCTA компонент (sticky элемент)
  - Стили для мобильной версии
