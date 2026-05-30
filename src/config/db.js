const mongoose = require('mongoose');

const connection = async () => {
  mongoose.connect(process.env.DB_URL)
    .then(() => { console.log("database connected") })
    .catch((err) => { console.log(err) })
}

module.exports = { connection }