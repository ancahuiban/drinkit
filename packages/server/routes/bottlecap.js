const router = require("express").Router();
const Bottlecap = require("../models/Bottlecap");

router.post("/", async (req, res) => {
  const [, image] = req.body.image.split(",");
  const buffer = Buffer.from(image, "base64");

  const newBottlecap = new Bottlecap();
  newBottlecap.image.data = buffer;

  await newBottlecap.save();

  res.sendStatus(200);
});

module.exports = router;