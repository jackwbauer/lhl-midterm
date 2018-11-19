"use strict";

const express = require('express');
const router  = express.Router();

function getCurrentDay() {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const day = new Date().getDay();
  return days[day];
}

module.exports = (knex) => {

  router.get('/:id/locations', (req, res) => {
    const day = getCurrentDay();
    knex
      .select('res.name', 'loc.address', 'loc.phone', `loc.${day}_opening as opening`, `loc.${day}_closing as closing`, 'loc.id')
      .from('locations as loc')
      .join('restaurants as res', 'loc.restaurant_id', 'res.id')
      .where('loc.active', true)
      .andWhere('res.id', req.params.id)
      .then((results) => {
        const templateVars = {
          locations: results
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

  router.get('/', (req, res) => {
    knex
      .select('res.id', 'res.name', 'res.image_url', 'res.description')
      .from('restaurants as res')
      .then((results) => {
        const templateVars = {
          restaurants: results
        };
        res.render('restaurants', templateVars);
      });
  });

  return router;
}
