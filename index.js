
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

app.get('/courses/:id', (req, res) => {
  const id = req.params.id;
  const selected_course = courses.find(c => c.id == id);
  res.send(selected_course);
  // console.log(selected_course);
});

app.get('/courses/category/:id', (req, res) => {
  const id = req.params.id;
      const category_course = courses.filter(course => course.categoryID === id);
      // const category_course = courses.filter(course => console.log(course.categoryID));
      // console.log(id);
      res.send(category_course);

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
