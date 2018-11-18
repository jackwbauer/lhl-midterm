exports.seed = function (knex, Promise) {
    return knex('menu_items').del()
        .then(function () {
            return Promise.all([
                knex('menu_items').insert({
                    id: 1,
                    location_id: 1,
                    name: 'Baked Salmon',
                    price: 30.99,
                    description: 'Fish can fly... in blimps.',
                    image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/baked+salmon.jpg'
                }),
                knex('menu_items').insert({
                    id: 2,
                    location_id: 1,
                    name: 'Chicken Burrito',
                    price: 6.50,
                    description: 'Spicay',
                    image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/chicken+burrito.jpg'
                }),
                knex('menu_items').insert({
                    id: 3,
                    location_id: 1,
                    name: 'Pepperoni Pizza',
                    price: 13.75,
                    description: 'Hand tossed... in a blimp.',
                    image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/pepperoni+pizza.jpg'
                }),
                knex('menu_items').insert({
                    id: 4,
                    location_id: 1,
                    name: 'Meat and Veg',
                    price: 9.99,
                    description: 'The true potato experience... in a blimp.',
                    image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/potatoes+and+meat.jpg'
                }),
                knex('menu_items').insert({
                    id: 5,
                    location_id: 1,
                    name: 'Spaghetti Bolognese',
                    price: 15.00,
                    description: 'Living the Italian life... in a blimp',
                    image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/spaghetti+with+meat+sauce.jpg'
                }),
                knex('menu_items').insert({
                    id: 6,
                    location_id: 1,
                    name: 'Filet Mignon',
                    price: 32.00,
                    description: 'Living the high life... in a blimp',
                    image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/steak+and+asparagus.jpg'
                }),
                knex('menu_items').insert([
                    {
                        id: 7,
                        location_id: 2,
                        name: 'Pancakes',
                        price: 4.99,
                        description: 'Golden brown pancakes',
                        image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/breakfast/pancake-stack.jpeg'
                    }, {
                        id: 8,
                        location_id: 2,
                        name: 'Waffles',
                        price: 6.50,
                        description: 'The way a waffle should be',
                        image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/breakfast/waffles.jpeg'
                    }, {
                        id: 9,
                        location_id: 2,
                        name: 'Chocolate Cake',
                        price: 2.50,
                        description: 'Tasty and chocolatey',
                        image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/breakfast/chocolate-cake.jpeg'
                    }, {
                        id: 10,
                        location_id: 2,
                        name: 'Vanilla Cake',
                        price: 4.50,
                        description: 'The opposite of chocolatey',
                        image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/breakfast/vanilla-cake.jpeg'
                    }, {
                        id: 11,
                        location_id: 3,
                        name: 'Chocolate Waffles',
                        price: 6.99,
                        description: 'Chocolate and waffles... who could ask for more?',
                        image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/waffles/chocolate-waffles.jpeg'
                    }, {
                        id: 12,
                        location_id: 3,
                        name: 'Crepes',
                        price: 4.25,
                        description: 'Flat pancakes',
                        image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/waffles/crepes.jpeg'
                    }, {
                        id: 13,
                        location_id: 3,
                        name: 'Raspberry Pancakes',
                        price: 6.37,
                        description: 'Raspberries and pancakes... what more is there to say?',
                        image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/waffles/raspberry-pancakes.jpeg'
                    }, {
                        id: 14,
                        location_id: 3,
                        name: 'Round Waffles',
                        price: 3.60,
                        description: 'The way a waffle was meant to be',
                        image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/waffles/round-waffles.jpeg'
                    }, {
                        id: 15,
                        location_id: 3,
                        name: 'Vanilla Waffles',
                        price: 4.45,
                        description: 'Vanilla and waffles!',
                        image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/waffles/vanilla-waffles.jpeg'
                    }
                ])
            ]);
        });
};
