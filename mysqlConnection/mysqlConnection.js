import { createPool } from 'mysql';
import { promisify } from 'util';

import { databaseProduction, databaseTest } from './keys.js';

const { NODE_ENV } = process.env

const database =  NODE_ENV === 'test'
? databaseTest
: databaseProduction


// Connect to the mysqlDB.
const pool = createPool(database);

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has to many connections');
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused');
    }
  }

  if (connection) connection.release();
  console.log('DB is Connected');

  return;
});

// Promisify Pool Querys
pool.query = promisify(pool.query);

export default pool;