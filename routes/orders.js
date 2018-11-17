"use strict";

const express = require('express');
const router = express.Router();
const moment = require('moment');

//Twilio setup
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE;
const client = require('twilio')(accountSid, authToken);

function sendTwilio(phone, pickup_time) {
  let message = '';
  if (!pickup_time) {
    message = 'An order has been placed to your restaurant';
  } else {
    message = `Your order will be ready for pickup at ${moment(pickup_time).format("h:mm a")}`;
  }
  return client.messages.create({
    to: phone,
    from: twilioPhone,
    body: message
  });
}

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

  router.get("/:id/review", (req, res) => {
    knex
      .select("orders.pickup_time", "orders.accepted", "orders.ready", "omi.comment", "items.name", 'items.price')
      .from("orders")
      .join('order_menu_items as omi', 'orders.id', 'omi.order_id')
      .join('menu_items as items', 'omi.menu_item_id', 'items.id')
      .where({ 'orders.id': req.params.id })
      .then((results) => {
        const templateVars = {
          orderInfo: results
        };
        res.render('./order_review', templateVars);
      });
  });

  router.put('/:id/review', (req, res) => {
    knex('orders')
      .where({ id: req.params.id })
      .update({ confirmed: true })
      .then(() => {
        knex
          .from('orders')
          .join('locations as loc', 'loc.id', 'orders.location_id')
          .join('restaurants as rests', 'loc.restaurant_id', 'rests.id')
          .join('users', 'users.id', 'rests.owner_id')
          .select('users.phone')
          .where({ 'orders.id': req.params.id })
          .then((result) => {
            sendTwilio(result[0].phone)
              .then((message) => {
                console.log(message.sid);
                res.json({'message': 'success'});
              });
          });
      })
  })  

  router.put('/:id', (req, res) => {
    knex('orders')
      .where({ id: req.params.id })
      .update({
        pickup_time: req.body.pickup_time,
        accepted: true
      })
      .then(() => {
        knex('orders')
          .join('users', 'orders.user_id', 'users.id')
          .select('users.phone')
          .where({ 'orders.id': req.params.id })
          .then(result => {
            sendTwilio(result[0].phone, req.body.pickup_time)
              .then(message => console.log(message.sid));
            res.json(result);
          })
      });
  });

  router.post("/", (req, res) => {
    let order_id;
    knex
      .insert({
        user_id: req.body.user_id,
        location_id: req.body.location_id,
      })
      .into('orders')
      .returning('id')
      .then((id) => {
        order_id = parseInt(id);
        const menu_items = req.body.menu_items.map((elem) => {
          elem.order_id = order_id;
          return elem;
        });
        knex
          .insert(menu_items)
          .into('order_menu_items')
          .then((result) => {
            console.log("order placed result:", result);
            res.json(order_id);
          })
      });
  });

  return router;
}
