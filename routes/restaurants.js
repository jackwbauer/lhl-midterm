"use strict";

const express = require('express');
const router  = express.Router();

function getCurrentDayHours(knexResult) {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const day = new Date().getDay();
  const hours = knexResult[days[day]];
  return hours;
}

module.exports = (knex) => {

  router.get('/:id/locations', (req, res) => {
    knex
      .select('res.name', 'loc.address', 'loc.phone', 'loc.sunday', 'loc.monday', 'loc.tuesday', 'loc.wednesday', 'loc.thursday', 'loc.friday', 'loc.saturday', 'loc.id')
      .from('locations as loc')
      .join('restaurants as res', 'loc.restaurant_id', 'res.id')
      .where('loc.active', true)
      .andWhere('res.id', req.params.id)
      .then((results) => {
        const returnArray = results.map((elem) => {
          elem.hours = getCurrentDayHours(elem);
          return elem;
        });
        const templateVars = {
          locations: returnArray
        };
        res.render('location_list', templateVars);
      });
  });

  router.get("/:id", (req, res) => {
    knex
      .select("name")
      .from("restaurants")
      .where({ id: req.params.id })
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}
