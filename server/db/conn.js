const mongoose = require('mongoose');

const db=process.env.MONGO_URL;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));