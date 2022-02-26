# Volto Reference Backend

## Documentation

A training on how to create your own website using Volto is available as part of the Plone training at [https://training.plone.org/5/volto/index.html](https://training.plone.org/5/volto/index.html).

## Installation

### Prerequisites

- [Node.js==16.x.x](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

### Create Database

    $ CREATE DATABASE volto;
    $ CREATE USER volto WITH ENCRYPTED PASSWORD 'volto';
    $ GRANT ALL PRIVILEGES ON DATABASE volto TO volto;
    $ CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

Make sure the volto user has the privileges to run the last command.

### Install Dependencies

    $ yarn

## Development

### Create DB structure

    $ yarn migrate

### Import dummy content

    $ yarn seed

### Run backend

    $ yarn start

### Testing

    $ yarn test

## License

MIT License. Copyrights hold the Plone Foundation.
See [LICENSE.md](LICENSE.md) for details.
