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

* pgAdmin4
    - Abrir Query Tool (Ejectua script SQL): Servers > {{SERVER_NAME}} > Databases > {{DATABASE_NAME}} y Click en 'Query Tool' o (ALT + SHIFT + Q)
        + Copiar la 'Query Scripts' y Click en 'Execute script' o F5 para importa la data

* Dependencias NestJS
    - Prisma CLI
        $ npx prisma
        ó
        $ npx prisma init
            Ok to proceed? (y) y
    - Prisma Client
        $ npm install @prisma/client

    - Genera un archivo de esquema Prisma (Refleja el estado actual de la DB)
        $ npx prisma db pull
    - Genera el cliente de Prisma
        $ npx prisma generate

    - pdfmake
        $ npm install pdfmake
        $ npm i --save-dev @types/pdfmake // Tipado estricto

* Nest CLI
    -  Crear un nuevo recurso (sin archivo de pruebas)
        $ nest g resource {{RESOURCE-NAME}} --no-spec
        $ nest g resource basic-reports --no-spec
            > What transport layer do you use? REST API
            > Would you like to generate CRUD entry points? (Y/n) n

CONSTANCIA DE EMPLEADOS
