class Config:
    SECRET_KEY = '!6vt@%k+^UX{eC-hCRXc'


class DevelopmentConfig():
    DEBUG = True
    MYSQL_HOST = 'https://sit-info.com'
    MYSQL_USER = 'adm7882'
    MYSQL_PASSWORD = 'd@qaKUyvT8'
    MYSQL_DB = 'portal_db'

config ={
    'development':DevelopmentConfig
}

        