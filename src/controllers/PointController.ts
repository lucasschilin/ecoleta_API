import {Request, Response} from 'express';
import knex from '../database/connection';

class PointController{
  async store(request:Request, response: Response) {
    const { name, email, whatsapp, latitude, longitude, city, uf, items } = await request.body;

    const trx = await knex.transaction();

    const point = {
      image: 'image-fake',
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf
    }

    const insertIds = await trx('points').insert(point);

    const point_id = insertIds[0];

    const pointItems = items.map((item_id: number) => {
      return {
        item_id,
        point_id
      }
    });
    await trx('point_items').insert( pointItems );

    return response.json({
      id: point_id,
      ...point,

    });
    }
}

export default PointController;
