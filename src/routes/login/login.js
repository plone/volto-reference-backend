/**
 * Login routes.
 * @module routes/login/login
 */

import bcrypt from 'bcrypt-promise';

import { UserRepository } from '../../repositories';

export default [
  {
    op: 'post',
    view: '/@login',
    handler: (context, req, res) => {
      if (!req.body.login || !req.body.password) {
        return res.status(400).send({
          error: {
            message: 'Login and password must be provided in body.',
            type: 'Missing credentials',
          },
        });
      }
      UserRepository.findOne({ id: req.body.login })
        .then(user =>
          bcrypt.compare(req.body.password, user.get('password')).then(
            same =>
              same
                ? res.send({
                    token:
                      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsbmFtZSI6IkpvaG4gRG9lIiwic3ViIjoiYWRtaW4iLCJleHAiOjE1NDExMTI3Njg5fQ.3KMYq1NbPz3fMWqApH574yHEuS8mhYRRjPaKhod5q80',
                  })
                : res.status(401).send({
                    error: {
                      message: 'Wrong login and/or password.',
                      type: 'Invalid credentials',
                    },
                  }),
          ),
        )
        .catch(UserRepository.Model.NotFoundError, () =>
          res.status(401).send({
            error: {
              message: 'Wrong login and/or password.',
              type: 'Invalid credentials',
            },
          }),
        );
    },
  },
  {
    op: 'post',
    view: '/@login-renew',
    handler: (context, req, res) =>
      res.send({
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsbmFtZSI6IkpvaG4gRG9lIiwic3ViIjoiYWRtaW4iLCJleHAiOjE1NDExMTI3Njg5fQ.3KMYq1NbPz3fMWqApH574yHEuS8mhYRRjPaKhod5q80',
      }),
  },
  {
    op: 'post',
    view: '/@logout',
    handler: (context, req, res) => res.status(204).send(),
  },
];
