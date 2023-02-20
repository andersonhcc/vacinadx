import {createServer, Model, Response} from 'miragejs';

createServer({
  urlPrefix: 'http://localhost:8080',
  namespace: 'api',
  models: {
    user: Model,
  },
  seeds(server) {
    server.create('user', {
      firsName: 'Anderson',
      lastName: 'Henrique',
      email: 'anderson@anderson.com',
      password: '12345678',
      token: 'salkslskaly293SLAKL',
    });
  },
  routes() {
    this.get('/user', schema => {
      return schema.users.All();
    });

    this.post('/auth', (schema, request) => {
      const body = JSON.parse(request.requestBody);
      const user = schema.users.findBy({
        email: body.email,
        password: body.password,
      });

      if (!user) {
        return new Response(404);
      }
      return user;
    });

    this.post('/user', (schema, request) => {
      const body = JSON.parse(request.requestBody);
      const user = schema.users.create({...body, token: 'salkaslksalksa'});
      return user;
    });
  },
});
