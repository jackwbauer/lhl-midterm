exports.seed = function (knex, Promise) {
    return knex('restaurants').del()
        .then(function () {
            return Promise.all([
                knex('restaurants').insert({
                    name: 'Dan\'s Blimp and Waffle House',
                    owner_id: 1
                }),
            ]);
        });
};
