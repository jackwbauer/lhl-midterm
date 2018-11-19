"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  function parseOrders(orders) {
    const returnObj = [{}, {}, {}];
    orders.forEach((orderItem) => {
      if (orderItem.ready) {
        if (!returnObj[2]) {
          returnObj[2] = {};
        }
        if (!returnObj[2][orderItem.id]) {
          returnObj[2][orderItem.id] = [orderItem];
        } else {
          returnObj[2][orderItem.id].push(orderItem);
        }
      } else if (orderItem.accepted && !orderItem.ready) {
        if (!returnObj[1]) {
          returnObj[1] = {};
        }
        if (!returnObj[1][orderItem.id]) {
          returnObj[1][orderItem.id] = [orderItem];
        } else {
          returnObj[1][orderItem.id].push(orderItem);
        }
      } else {
        if (!returnObj[0]) {
          returnObj[0] = {};
        }
        if (!returnObj[0][orderItem.id]) {
          returnObj[0][orderItem.id] = [orderItem];
        } else {
          returnObj[0][orderItem.id].push(orderItem);
        }
      }
    });
    console.log('new', returnObj['new']);
    return returnObj;
  }

  function getCurrentDay() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const day = new Date().getDay();
    return days[day];
  }

  router.get('/:id/orders', (req, res) => {
    knex
      .from('locations')
      .join('orders', 'orders.location_id', 'locations.id')
      .join('order_menu_items as omi', 'orders.id', 'omi.order_id')
      .join('menu_items as items', 'omi.menu_item_id', 'items.id')
      .join('users', 'orders.user_id', 'users.id')
      .where('locations.id', req.params.id)
      .select('orders.id', 'items.name', 'omi.comment', 'users.first_name', 'users.last_name', 'users.phone', 'orders.accepted', 'orders.ready')
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
    const day = getCurrentDay();
    knex
      .select("locations.address", "locations.phone", "restaurants.name", `locations.${day}_opening as opening`, `locations.${day}_closing as closing`)
      .from("locations")
      .join("restaurants", "locations.restaurant_id", "restaurants.id")
      .where({ "locations.id": req.params.id })
      .then((results) => {
        res.render('../views/locations', results[0]);
      });
  });

  return router;
}
