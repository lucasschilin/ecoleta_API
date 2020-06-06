import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Hi Schilin, How are you?' });
});

export default routes;
