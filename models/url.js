const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  shortUrl: { type: String, required: true, unique: true },
  redirectUrl: { type: String, required: true },
  visitHistory: [
    {
      timestamp: { type: Date, default: Date.now },
    }
  ],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' }
},
{ timestamps: true }
);

const URL = mongoose.model('URL', urlSchema);

module.exports = URL;