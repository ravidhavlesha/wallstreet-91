const mongoose = require('mongoose');

mongoose, (Promise = global.Promise);
const dbConfig = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true };
const dbConnection = mongoose.connect(process.env.MONGO_URI || '', dbConfig);

module.exports = dbConnection;
