exports.seed = function (knex, Promise) {
    return knex('orders').del()
      .then(function () {
        return Promise.all([
          knex.into('orders').insert([{
            id: 1,
            user_id: 4,
            location_id: 1,
            comment: 'I WANT MY FOOD NOW!!!'
          }, {
            id: 2,
            user_id: 3,
            location_id: 1
          }, {
            id: 3,
            user_id: 4,
            location_id: 1
          }, {
            id: 4,
            user_id: 5,
            location_id: 1
          }]),
        ]);
      });
  };