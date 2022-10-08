This is a take home coding test for moflip

Tech stack:

- Node JS
- Next JS (fullstack framework)
- Express JS (custom server)
- MySQL (database)

## How to start

First, make sure you are running MySQL server database in localhost and please change this `app.env` file according to your database configuration (this is the example):

```bash
NODE_ENV=development
PORT=3000
PREFIX=/api/v1/
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=admin
DB_NAME=bolafy_db
```

Second, please migrate the seeder to the database so this project can working well:

```bash
npx sequelize db:seed:all
```

Third, please running development server:

```bash
npm run dev
```

and access the web application through localhost:

[localhost](http://localhost:3000)
