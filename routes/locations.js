"use strict";

const express = require('express');
const router = express.Router();

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
      .select("menu_items.name", "menu_items.price", "menu_items.description", "menu_items.image_url", "restaurants.name as restaurant")
      .from("menu_items")
      .join("locations", "locations.id", "menu_items.location_id")
      .join("restaurants", "restaurants.id", "locations.restaurant_id")
      .where({ location_id: req.params.id })
      .then((results) => {
        const templateVars = { menu_items: results };
        res.render("../views/menu_items", templateVars);
      });
  });

  return router;
}
