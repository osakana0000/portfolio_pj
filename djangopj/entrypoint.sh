#!/bin/sh
python manage.py makemigrations --noinput
python manage.py migrate --noinput
python manage.py loaddata schedule/fixtures/fixture.json
python manage.py collectstatic --noinput
gunicorn config.wsgi --bind 0.0.0.0:8000
