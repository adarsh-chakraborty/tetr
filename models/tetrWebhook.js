const mongoose = require('mongoose');

const tetrWebhookSchema = new mongoose.Schema({}, { strict: false, versionKey: false });

// Create the model
module.exports  = mongoose.model('Tetr', tetrWebhookSchema, "TetrWebhook");