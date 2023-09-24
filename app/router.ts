// app/router.ts

import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.post('/api/login', controller.user.login); // Login route，登录时才需要

  router.post('/api/reservations', controller.reservation.create);
  router.put('/api/reservations/:id', controller.reservation.update);
  router.put('/api/reservations/:id/cancel', controller.reservation.cancel);
  router.get('/api/reservations', controller.reservation.index);
  router.get('/api/reservations/:id', controller.reservation.show);

  // router.resources('reservation', '/api/reservations', controller.reservation);

  router.all('/graphql', controller.graphqlHttp);

};