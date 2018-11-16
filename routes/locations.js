"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/:id", (req, res) => {
    knex
      .select("locations.address", "locations.phone", "locations.hours", "restaurants.name")
      .from("locations")
      .join("restaurants", "locations.restaurant_id", "restaurants.id")
      .where({ "locations.id": req.params.id })
      .then((results) => {
        res.render('../views/locations', results[0]);
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
