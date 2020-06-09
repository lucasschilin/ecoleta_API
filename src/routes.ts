import express from 'express';

import PointController from './controllers/PointController';
import ItemController from './controllers/ItemController';

const routes = express.Router();
const pointController = new PointController();
const itemController = new ItemController();

routes.get('/items', itemController.index);

routes.post('/points', pointController.store);
// routes.post('/points', async (req, res) => {
//   console.log("Chegou aqui");
//   console.log(req.body);
// });

routes.get('/points/:id', pointController.show);
export default routes;
