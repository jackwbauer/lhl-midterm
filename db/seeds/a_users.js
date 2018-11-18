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
        knex('users').insert([{
          id: 2,
          first_name: 'Nima',
          last_name: 'Boscarino',
          email: 'blimpfan@example.com',
          hashed_pwd: 'nima<3blimps',
          phone: phone1,
          is_owner: false
        }, {
          id: 3,
          first_name: 'John',
          last_name: 'Stamos',
          email: 'john@stamos.com',
          hashed_pwd: 'fasdfasdf',
          phone: phone1,
          is_owner: false
        }, {
          id: 4,
          first_name: 'Brie',
          last_name: 'Larson',
          email: 'brie@larson.com',
          hashed_pwd: 'asdfasdf',
          phone: phone1,
          is_owner: false
        }, {
          id: 5,
          first_name: 'Ice',
          last_name: 'T',
          email: 'ice@t.com',
          hashed_pwd: 'fasdfasdf',
          phone: phone1,
          is_owner: false
        }]),
      ]);
    });
};
