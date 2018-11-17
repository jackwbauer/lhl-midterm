require('dotenv').config();
const phone1 = process.env.PHONE1;

exports.seed = function (knex, Promise) {
    return knex('locations').del()
        .then(function () {
            return Promise.all([
                knex('locations').insert([{
                    id: 1,
                    restaurant_id: 1,
                    address: '123 Airship Way',
                    phone: phone1,
                    sunday_opening: 600,
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
                }, {
                    id: 2,
                    restaurant_id: 1,
                    address: '1400 Aeronautic Blvd',
                    phone: phone1,
                    sunday_opening: 600,
                    sunday_closing: 1200,
                    monday_opening: 480,
                    monday_closing: 1080,
                    tuesday_opening: 480,
                    tuesday_closing: 1080,
                    wednesday_opening: 480,
                    wednesday_closing: 1080,
                    thursday_opening: 480,
                    thursday_closing: 1080,
                    friday_opening: 480,
                    friday_closing: 1080,
                    saturday_opening: 660,
                    saturday_closing: 1140,
                }, {
                    id: 3,
                    restaurant_id: 1,
                    address: '420 Helium Drive',
                    phone: phone1,
                    sunday_opening: 600,
                    sunday_closing: 1200,
                    monday_opening: 480,
                    monday_closing: 1200,
                    tuesday_opening: 480,
                    tuesday_closing: 1200,
                    wednesday_opening: 480,
                    wednesday_closing: 1200,
                    thursday_opening: 480,
                    thursday_closing: 1200,
                    friday_opening: 480,
                    friday_closing: 120,
                    saturday_opening: 660,
                    saturday_closing: 1260,
                }]),
            ]);
        });
};
