require('dotenv').config();
const express = require('express');
const router = require('../routes');
const bodyParser = require('body-parser'); 

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.redirect('/api');
}
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
}
);