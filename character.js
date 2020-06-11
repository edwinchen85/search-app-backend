const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  mass: {
    type: String,
    required: true,
  },
  hair_color: {
    type: String,
    required: true,
  },
  skin_color: {
    type: String,
    required: true,
  },
  eye_color: {
    type: String,
    required: true,
  },
  birth_year: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  homeworld: {
    type: String,
    required: true,
  },
  films: {
    type: [String],
    required: true,
  },
  species: {
    type: [String],
    required: true,
  },
  vehicles: {
    type: [String],
    required: true,
  },
  starships: {
    type: [String],
    required: true,
  },
  created: {
    type: String,
    required: true,
  },
  edited: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
})

characterSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Character', characterSchema)
