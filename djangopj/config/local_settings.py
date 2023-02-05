from django.core.management.commands.runserver import Command as runserver
from .settings import *

DEBUG = True

ALLOWED_HOSTS = ['*']
runserver.default_addr = "0.0.0.0"
runserver.default_port= "8999"