import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  res.json([
    'Marcos',
    'Augusto',
    'Mariano',
    'Amanda',
    'Lucas',
  ]);
});

app.listen(3333);
