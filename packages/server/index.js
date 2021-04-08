const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const favicon = require("express-favicon");

const bottlecapRouter = require("./routes/bottlecap");

dotenv.config({ path: "../../.env" });
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/bottlecap", bottlecapRouter);

if (process.env.NODE_ENV === 'production') {
  console.log('Serving content.')
  app.use(favicon(__dirname + "../client/build/favicon.ico"));
  app.use(express.static(__dirname));
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

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