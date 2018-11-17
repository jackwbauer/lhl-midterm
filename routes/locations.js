"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  function parseOrders(orders) {
    const returnObj = {};
    orders.forEach((orderItem) => {
      if (!returnObj[orderItem.id]) {
        returnObj[orderItem.id] = [orderItem];
      } else {
        returnObj[orderItem.id].push(orderItem);
      }
    });
    return returnObj;
  }

  function getCurrentDayHours(knexResult) {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const day = new Date().getDay();
    const hours = knexResult[days[day]];
    return hours;
  }

  router.get('/:id/orders', (req, res) => {
    knex
      .from('locations')
      .join('orders', 'orders.location_id', 'locations.id')
      .join('order_menu_items as omi', 'orders.id', 'omi.order_id')
      .join('menu_items as items', 'omi.menu_item_id', 'items.id')
      .join('users', 'orders.user_id', 'users.id')
      .where('locations.id', req.params.id)
      .andWhere('orders.accepted', false)
      .select('orders.id', 'items.name', 'omi.comment', 'users.first_name', 'users.last_name', 'users.phone')
      .orderBy('orders.created_at', 'orders.id')
      .then((orders) => {
        const templateVars = {
          orders: parseOrders(orders)
        };
        res.render("../views/order_list", templateVars);
      });
  });

  router.get("/:id/menu_items", (req, res) => {
    knex
      .select("menu_items.name", "menu_items.price", "menu_items.description", "menu_items.image_url", "restaurants.name as restaurant", "menu_items.id")
      .from("menu_items")
      .join("locations", "locations.id", "menu_items.location_id")
      .join("restaurants", "restaurants.id", "locations.restaurant_id")
      .where({ location_id: req.params.id })
      .orderBy("menu_items.id")
      .then((results) => {
        const templateVars = { menu_items: results };
        res.render("../views/menu_items", templateVars);
      });
  });

  router.get("/:id", (req, res) => {
    knex
      .select("locations.address", "locations.phone", "restaurants.name", "locations.sunday", "locations.monday", "locations.tuesday", "locations.wednesday", "locations.thursday", "locations.friday", "locations.saturday")
      .from("locations")
      .join("restaurants", "locations.restaurant_id", "restaurants.id")
      .where({ "locations.id": req.params.id })
      .then((results) => {
        console.log('results:', results);
        results[0]['hours'] = getCurrentDayHours(results[0])
        res.render('../views/locations', results[0]);
      });
  });

  return router;
}
