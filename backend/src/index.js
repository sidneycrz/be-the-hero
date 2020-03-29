const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());


/** Rota / recurso */

/**
 * /metodos HTTP:
 * 
 * GET: Buscar uma informação do back-end;
 * POST: Criar uma informação no back-end;
 * PUT: Alterar uma informação no back-end;
 * DELETE: Deletar uma informação no back-end;
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query params: parametros nomeados enviados na rota após o "?", (filtros, paginação);
  * Route params: parametros utilizados para identificar recursos (https://localhost:3333/users/1)
  * Request Body: corpo da requisição, utilizado para criar ou alterar recursos (http://localhost:3333/users)
  */

  /**
   * SQL: MySQL, SQlite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc...
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users).select('*).where()
    */

    /**
     * Está sendo utilizado o SQLite, instala (npm install knex / npm install sqlite3 / npx knex init = para conectar com o BD, ele executa ao inves de instalar, cria o arq knexfile.js)
     */



app.listen(3333);

