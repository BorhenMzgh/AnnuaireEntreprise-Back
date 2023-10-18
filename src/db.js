const mongoose = require('mongoose');

console.log(process.env.DB_PASSWORD, 'DB PASSWORD');

const databaseUrl = `mongodb+srv://borhen:${process.env.DB_PASSWORD}@cluster0.cyghtjj.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(databaseUrl).catch((err) => {
  console.log(err);
});