exports.seed = function (knex, Promise) {
    return knex('orders').del()
      .then(function () {
        return Promise.all([
          knex('orders').insert({
            id: 1,
            user_id: 2,
            location_id: 1,
          }),
        ]);
      });
  };