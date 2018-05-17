const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.all( (err, data) => {
    if(err) {
      return res.status(500).end();
    }
    res.render("index", { burgers: data });
  });
});

router.post("/burgers", (req, res) => {
  burger.create(req.body.burger, (err, data) => {
    if(err) {
      return res.status(500).end();
    }
    res.json({ id: data.insertId });
  });
});

router.get("/burgers", (req, res) => {
  burger.all( (err, data) => {
   if(err) {
     return res.status(500).end();
   } 
    res.json(result);
  });
});

router.put("/burgers/:id", (req, res) => {
  burger.update(req.body.burger, req.params.id, (err, data) => {
    if(err) {
      return res.status(500).end();
    }
    if(data.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

router.delete("/burgers/:id", (req, res) => {
  burger.delete(req.params.id, (err, data) => {
    if(err) {
      return res.status(500).end();
    }
    if(data.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;

