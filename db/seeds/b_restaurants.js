exports.seed = function (knex, Promise) {
    return knex('restaurants').del()
        .then(function () {
            return Promise.all([
                knex('restaurants').insert([
                    {
                        id: 1,
                        name: 'Dan\'s Blimp and Waffle House',
                        owner_id: 1,
                        description: 'A family-friendly place to enjoy to enjoy waffles and discuss hot air flight.',
                        image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/restaurants/dans-blimp-and-waffle-house.jpeg'
                    },{
                        id: 2,
                        name: 'Dan\'s Pizza Palace',
                        owner_id: 1,
                        description: 'The place to be when you want pizza and are hungry!',
                        image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/restaurants/dans-pizza-palace.jpeg'
                    }
                ]),
            ]);
        });
};
