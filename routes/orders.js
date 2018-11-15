"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/:id/menu_items", (req, res) => {
    knex
      .from("order_menu_items")
      .join("menu_items", "menu_items.id", "order_menu_items.menu_item_id")
      .select("menu_items.name", "menu_items.price", "menu_items.description", "menu_items.image_url", "order_menu_items.comment")
      .where({ "order_menu_items.order_id": req.params.id })
      .then((results) => {
        res.json(results);
      });
  });
  
  router.get("/:id", (req, res) => {
    knex
      .select("pickup_time", "accepted", "ready")
      .from("orders")
      .where({ id: req.params.id })
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}
