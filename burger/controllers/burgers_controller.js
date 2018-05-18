const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", (req, res) => {
  burger.all( (err, data) => {
    if(err) {
      return res.status(500).end();
    }
    res.render("index", { burgers: data });
  });
});

router.post("/burgers", (req, res) => {
  burger.create(["burger_name, devoured"], [req.body.burger_name, req.body.devoured], (err, result) => {
    if(err) {
      return res.status(500).end();
    }
    res.json({ id: result.insertId });
  });
});

router.get("/burgers", (req, res) => {
  burger.all( (err, result) => {
   if(err) {
     return res.status(500).end();
   } 
    res.json(result);
  });
});

router.put("/burgers/:id", (req, res) => {
  var condition = "id= " + req.params.id;
  console.log("condition", condition);

  cat.update({devoured: req.body.devoured}, condition, (err, result) => {
    if(err) {
      return res.status(500).end();
    }
    if(result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

router.delete("/burgers/:id", (req, res) => {
  var condition = "id= " + req.params.id;

  burger.delete(condition, (err, result) => {
    if(err) {
      return res.status(500).end();
    }
    if(result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});


module.exports = router;



