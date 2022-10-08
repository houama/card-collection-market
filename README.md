This is a take home coding test for moflip

`Project:` `Card collection market`

Tech stack:

- Node JS
- Next JS (fullstack framework for React JS)
- Express JS (custom server)
- MySQL (database)
- Sequelize (SQL ORM)

## Project structure (main)

```bash
.
├── api                      # Contains api configuration using MVC architecture
├── pages                    # Frontend folder that contains all pages in the app
├── seeders                  # Dummy data (seeder) for inserting to database
├── styles                   # Styling code for the frontend
├── app.env                  # Environment variable
├── global.config.js         # Configuration file that export the env variable
└── server.js                # File to starting the server
```

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

[`localhost`](http://localhost:3000)

## Endpoint

- Get all collection : `/api/v1/collection`
- Get all collection's card (2 random card) : `/api/v1/card`
