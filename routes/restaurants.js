"use strict";

const express = require('express');
const router  = express.Router();

function getCurrentDay() {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const day = new Date().getDay();
  console.log(day);
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
        console.log(results);
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

  return router;
}
