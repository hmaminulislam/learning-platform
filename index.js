const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.port || 5000

app.use(cors());
const courses = require('./data/courses')

app.get('/', (req, res) => {
    res.send('Study bd server is running...')
})

app.get('/courses', (req, res) => {
  res.send(courses)
})

app.get('/course/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find(c => c.id === id);
  res.send(course)
})

app.listen(port, () => {
  console.log(`Study bd server Port: ${port}`);
});
