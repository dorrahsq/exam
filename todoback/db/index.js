const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.DB_URL, options)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });
  

  