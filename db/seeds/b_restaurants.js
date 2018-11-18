exports.seed = function (knex, Promise) {
    return knex('restaurants').del()
        .then(function () {
            return Promise.all([
                knex('restaurants').insert([
                    {
                        id: 1,
                        name: 'Dan\'s Blimp and Waffle House',
                        owner_id: 1
                    },{
                        id: 2,
                        name: 'Dan\'s Pizza Palace',
                        owner_id: 1
                    }
                ]),
            ]);
        });
};
