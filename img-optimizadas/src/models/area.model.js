const mongoose = require("mongoose")
const Schema = mongoose.Schema

const AreaSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  area: String
})

module.exports = mongoose.model("areas", AreaSchema)
