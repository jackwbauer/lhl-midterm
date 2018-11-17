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
                    sunday: '10AM - 8PM',
                    monday: '9AM - 9PM',
                    tuesday: '9AM - 9PM',
                    wednesday: '9AM - 9PM',
                    thursday: '9AM - 9PM',
                    friday: '9AM - 9PM',
                    saturday: '10AM - 10PM',
                }, {
                    id: 2,
                    restaurant_id: 1,
                    address: '1400 Aeronautic Blvd',
                    phone: phone1,
                    sunday: 'Closed',
                    monday: '8AM - 4PM',
                    tuesday: '8AM - 4PM',
                    wednesday: '8AM - 4PM',
                    thursday: '8AM - 4PM',
                    friday: '8AM - 4PM',
                    saturday: '8AM - 6PM'
                }, {
                    id: 3,
                    restaurant_id: 1,
                    address: '420 Helium Drive',
                    phone: phone1,
                    sunday: '2PM - 6PM',
                    monday: '10AM - 6PM',
                    tuesday: '10AM - 6PM',
                    wednesday: '10AM - 6PM',
                    thursday: '10AM - 6PM',
                    friday: '10AM - 6PM',
                    saturday: '10AM - 2PM'
                }])
            ]);
        });
};
