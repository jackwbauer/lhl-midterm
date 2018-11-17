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
                    sunday: '10AM - 8PM',
                    monday: '9AM - 9PM',
                    tuesday: '9AM - 9PM',
                    wednesday: '9AM - 9PM',
                    thursday: '9AM - 9PM',
                    friday: '9AM - 9PM',
                    saturday: '10AM - 10PM',
                }),
            ]);
        });
};
