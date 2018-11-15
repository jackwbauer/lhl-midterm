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
                    hours: '',
                }),
            ]);
        });
};
