const mongoose = require("mongoose")

const DocumentSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model("Document", DocumentSchema)
