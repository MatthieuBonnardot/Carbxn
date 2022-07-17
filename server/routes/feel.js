const express = require("express");
const router = express.Router();
const { Feel } = require("../models/Feel");

const { auth } = require("../middleware/auth");
const logger = require("../config/logger");

//=================================
//             Feel
//=================================
router.get("/:id", auth, (req, res) => {
  Feel.find()
    .then((feel) => {
      res.status(200).json(feel);
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
});

router.get("/report", auth, (req, res) => {
  console.log('hello')
  try {
    const report = buildUserFeelReport(req.user._id);
    res.status(200).json(report);
  } catch (error) {
    res.status(400).send(err);
  }
});

router.get("/list", auth, (req, res) => {
  Feel.find({ user: req.user._id })
    .sort({ date: -1 })
    .exec((err, feels) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({
        feels,
      });
    });
});

router.post("/create", auth, (req, res) => {
  const feel = new Feel(req.body);
  feel.save((err, feel) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

router.delete("/delete/:id", auth, (req, res) => {
  Feel.findOneAndDelete(
    { _id: req.params.id, user: req.user._id },
    (err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({
        success: true,
      });
    }
  );
});

module.exports = router;
