web: cd back/photo && python manage.py runserver 127.0.0.1:$PORT &&  python manage.py collectstatic --noinput && gunicorn --chdir back/photo photo.wsgi
