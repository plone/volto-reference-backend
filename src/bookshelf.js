/**
 * Bookshelf configuration.
 * @module bookshelf
 */

import bookshelf from 'bookshelf';
import knex from 'knex';

import config from './config';

export default bookshelf(
  knex({
    client: 'pg',
    connection: config.connection,
  }),
);
