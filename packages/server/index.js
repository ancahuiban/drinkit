const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

const bottlecapRouter = require("./routes/bottlecap");

dotenv.config({ path: "../../.env" });
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/bottlecap", bottlecapRouter);

mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) throw err;

    app.listen(process.env.PORT, () =>
      console.log(`App started on port ${process.env.PORT}.`)
    );
  }
);