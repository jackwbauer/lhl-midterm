"use strict";

const express = require('express');
const router = express.Router();
const moment = require('moment');

//Twilio setup
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE;
const client = require('twilio')(accountSid, authToken);

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

  router.post("/", (req, res) => {
    knex
      .insert({
        user_id: req.body.user_id,
        location_id: req.body.location_id,
      })
      .into('orders')
      .returning('id')
      .then((id) => {
        req.body.menu_items.forEach((elem) => {
          knex
            .insert({
              order_id: parseInt(id),
              menu_item_id: elem.menu_item_id,
              comment: elem.comment
            })
            .into('order_menu_items')
            .then((result) => {
              return;
            })
        });
        res.json('Order placed!');
        knex('locations')
          .select('phone')
          .where({ id: req.body.location_id })
          .then(result => {
            client.messages.create({
              to: result[0].phone,
              from: twilioPhone,
              body: 'An order has been placed to your restaurant'
            }).then(message => {
              console.log(message);
            })
          })
      });
  });

  router.put('/:id', (req, res) => {
    knex('orders')
      .where({ id: req.params.id })
      .update({
        pickup_time: req.body.pickup_time,
        accepted: true
      })
      .then(results => {
        knex('orders')
          .join('users', 'orders.user_id', 'users.id')
          .select('users.phone')
          .where({ 'orders.id': req.params.id })
          .then(result => {
            client.messages.create({
              to: result[0].phone,
              from: twilioPhone,
              body: `Your order will be ready for pickup at ${moment(req.body.pickup_time).format("h:mm a")}`
            }).then(message => {
              console.log(message.sid);
            })
            res.json(result);
          })
      });
  });

  return router;
}
