const path = require('path');
const migrationDir = path.resolve(__dirname, '../migrations');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: process.env.POSTGRES_DEV_DB,
      user:     process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: migrationDir,
    }
  },

  production: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: process.env.POSTGRES_PROD_DB,
      user:     process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: migrationDir,
    }
  }

};