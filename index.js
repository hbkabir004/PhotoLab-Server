
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

const category = require('./data/category.json');
const courses = require('./data/courses.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Server is running')
})

app.get('/category', (req, res) => {
  res.send(category)
})

app.get('/courses', (req, res) => {
  res.send(courses)
})

app.get('/category/:id', (req, res) => {
  const id = req.params.id;
  const selectedCategory = category.find(c => c.id === id);
  res.send(selectedCategory);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
