const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const patrolSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

patrolSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Patrol', patrolSchema)
