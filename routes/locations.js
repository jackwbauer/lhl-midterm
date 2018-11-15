"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/:id", (req, res) => {
    knex
      .select("address", "phone", "hours")
      .from("locations")
      .where({ id: req.params.id })
      .then((results) => {
        res.json(results);
    });
  });

  router.get("/:id/menu_items", (req, res) => {
    knex
      .select("name", "price", "description", "image_url")
      .from("menu_items")
      .where({ location_id: req.params.id })
      .then((results) => {
        res.json(results);
      });
  });

  return router;
}
