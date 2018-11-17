require('dotenv').config();
const phone1 = process.env.PHONE1;

exports.seed = function (knex, Promise) {
    return knex('locations').del()
        .then(function () {
            return Promise.all([
                knex('locations').insert({
                    id: 1,
                    restaurant_id: 1,
                    address: '123 Airship Way',
                    phone: phone1,
                    sunday_opneing: 600,
                    sunday_closing: 1200,
                    monday_opening: 540,
                    monday_closing: 1260,
                    tuesday_opening: 540,
                    tuesday_closing: 1260,
                    wednesday_opening: 540,
                    wednesday_closing: 1260,
                    thursday_opening: 540,
                    thursday_closing: 1260,
                    friday_opening: 540,
                    friday_closing: 1260,
                    saturday_opening: 600,
                    saturday_closing: 1320,
                }),
            ]);
        });
};
