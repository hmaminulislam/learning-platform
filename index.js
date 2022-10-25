const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.port || 5000

app.use(cors());
const hotels = './data/hotel.json'

app.get('/', (req, res) => {
    res.send('Study bd server is running...')
})

app.get('/hotels', (req, res) => {
  res.send(hotels)
})

app.listen(port, () => {
  console.log(`Study bd server Port: ${port}`);
});
