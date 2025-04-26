const express = require('express');
const router = express.Router();

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Toy Store API');
}
);

app.use('/listToys', require('./routes/listToys'));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    }  
);