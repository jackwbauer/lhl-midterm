exports.seed = function (knex, Promise) {
    return knex('menu_items').del()
        .then(function () {
            return Promise.all([
                knex('menu_items').insert({
                    location_id: 1,
                    name: 'Baked Salmon',
                    price: 30.99,
                    description: 'Fish can fly... in blimps.',
                    image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/baked+salmon.jpg'
                }),
                knex('menu_items').insert({
                    location_id: 1,
                    name: 'Chicken Burrito',
                    price: 6.50,
                    description: 'Spicay',
                    image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/chicken+burrito.jpg'
                }),
                knex('menu_items').insert({
                    location_id: 1,
                    name: 'Pepperoni Pizza',
                    price: 13.75,
                    description: 'Hand tossed... in a blimp.',
                    image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/pepperoni+pizza.jpg'
                }),
                knex('menu_items').insert({
                    location_id: 1,
                    name: 'Meat and Veg',
                    price: 9.99,
                    description: 'The true potato experience... in a blimp.',
                    image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/potatoes+and+meat.jpg'
                }),
                knex('menu_items').insert({
                    location_id: 1,
                    name: 'Spaghetti Bolognese',
                    price: 15.00,
                    description: 'Living the Italian life... in a blimp',
                    image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/spaghetti+with+meat+sauce.jpg'
                }),
                knex('menu_items').insert({
                    location_id: 1,
                    name: 'Filet Minon',
                    price: 32.00,
                    description: 'Living the high life... in a blimp',
                    image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/steak+and+asparagus.jpg'
                }),
            ]);
        });
};
