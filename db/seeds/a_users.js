require('dotenv').config();

const phone1 = process.env.PHONE1;
const phone2 = process.env.PHONE2;

exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({
          id: 1,
          first_name: 'Dan',
          last_name: 'Nachbar',
          email: 'blimpguy@skyacht.com',
          hashed_pwd: 'alberto',
          phone: phone1,
          is_owner: true
        }),
        knex('users').insert({
          id: 2,
          first_name: 'Nima',
          last_name: 'Boscarino',
          email: 'blimpfan@example.com',
          hashed_pwd: 'nima<3blimps',
          phone: phone2,
          is_owner: false
        }),
      ]);
    });
};
