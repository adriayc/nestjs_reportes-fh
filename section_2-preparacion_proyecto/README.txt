PREPARACIÓN DE PROYECTO Y BASE DE DATOS

* Crear la app con NestJS
    $ nest new report-server
        ? Which package manager would you ❤️  to use? npm
    $ cd report-server
    $ npm run start
    ó
    $ npm run start:dev
    > URL: http://localhost:3000

* Isommia (REST cliente application)
    - Create a new project (Name: Ax2CDev)
    - Create new request collection (Name: Resport (PDFs) - NestJS)
    - Create new HTTP Request (GET: http://localhost:3000)

* Docker
    - Instalar 'Docker Desktop'
        ...
        $ docker compose version
        $ docker --version
        $ docker version
    - Crear el archivo de Docker Compose (docker-compose.yml) y configurar los servicios de PostgreSQl y pgAdmin
    - Comandos Docker:
        $ docker compose up  # Crear e inicial todos los servicios (Muestra los logs)
        $ docker compose up -d  # Crear e inicial todos los servicios (En 2do plano)
    - Abrir Docker Desktop
    - Abrir pgAdmin4 (URL: http://localhost:8080)
        + Login
            > Email Address: {{EMAIL_ADDRESS}}
            > Password: {{PASSWORD}}
        + Registar nuevo Server
            > Click derecho 'Servers' > Register > Server... o Click 'Add New Server'
                > General
                    > Name: Resports NestJS
                > Connection
                    > Host name/address: {{POSTGRES_CONTAINER_NAME}}
                    > Maintenance database: postgres
                    > Username: postgres
                    > Password: {{POSTGRES_PASSWORD}}
                    > Save password?: true
                Click 'Save'