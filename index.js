const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.port || 5000

app.use(cors());


app.get('/', (req, res) => {
    res.send('Study bd server is running...')
})

app.listen(port, () => {
  console.log(`Study bd server Port: ${port}`);
});
