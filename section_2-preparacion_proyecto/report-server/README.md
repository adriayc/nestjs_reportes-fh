<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

## Ejecutar la App (Modo Desarrollo)

1. Clonar el respositorio
2. Instalar dependencias

   ```sh
   $ npm install
   ```

3. Crear el archivo `.env` y copiar el contenido de `.env.example` (Variables de Entorno)
4. Levantar la base de datos

   ```sh
   $ docker compose up
   ó
   $ docker compose up -d
   ```

5. Genera el Prisma Cliente

   ```sh
   $ npx prisma generate
   ```

6. Ejecutar la app

   ```sh
   # watch mode
   $ npm run start:dev
   ```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
