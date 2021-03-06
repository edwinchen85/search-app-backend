const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Patrol = require('./patrol')
const patrols = require('./patrols.json')

mongoose.connect('mongodb://localhost/paginations', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.once('open', async () => {
  if ((await Patrol.countDocuments().exec()) > 0) return

  const arr = patrols.map(patrol => () => Patrol.create(patrol))

  Promise.all(arr.map(item => item())).then(() =>
    console.log('Added Patrol Data')
  )
})

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.get('/patrols', (req, res) => {
  const page = parseInt(req.query.page)
  const limit = parseInt(req.query.limit)
  const search = req.query.search

  const results = {}

  Patrol.paginate(
    {
      title: { $regex: search, $options: 'i' },
    },
    {
      page,
      limit,
    }
  ).then(result => {
    if (result.hasNextPage) {
      results.next = {
        page: page + 1,
      }
    }

    if (result.hasPrevPage) {
      results.previous = {
        page: page - 1,
      }
    }

    results.totalPages = result.totalPages
    results.results = result.docs

    setTimeout(() => {
      res.json(results)
    }, parseInt(Math.random() * 1000 * 5))
  })
})

app.listen(3000)
