const express = require('express');

const router = express.Router();

const listToys = require('./listToys');


router.get('/', (req, res) => {
  res.send('Welcome to the Toy Store API');
}
);

router.use('/listToys', listToys);

module.exports = router;