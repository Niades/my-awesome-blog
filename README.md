Описание
--------
Данный проект представляет собой простой блог, использующий Django и AngularJS.


Запуск
------
Для начала необходимо установить зависимости из `npm` и `PyPI` (рекомендуется использовать `virtualenv`
для Python):

```
npm i
pip install -r requirements.txt
```
Теперь запускаем миграции для БД:
```
python app/manage.py migrate
```
Создаем суперпользователя:
```
python app/manage.py createsuperuser
```
После этого можно запускать проект. Для запуска сборщика статики:

```
npm run dev
```

Сервер запускается командой:

```
npm run serve
```

В браузере можно открывать [http://localhost:8000](http://localhost:8000).