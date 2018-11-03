const bcrypt = require('bcrypt-promise');

exports.seed = knex =>
  bcrypt.hash('admin', 10).then(password =>
    knex('user').insert([
      {
        id: 'admin',
        password,
        fullname: 'Admin',
      },
      {
        id: 'anonymous',
        password,
        fullname: 'Anonymous',
      },
    ]),
  );
