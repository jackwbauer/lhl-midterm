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
                    }, {
                        id: 16,
                        location_id: 4,
                        name: 'Canadian',
                        price: 9.99,
                        description: 'Mushrooms, pepperoni, and sausage eh?',
                        image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/pizza/canadian-pizza.jpeg'
                    }, {
                        id: 17,
                        location_id: 4,
                        name: 'All Meat',
                        price: 10.99,
                        description: 'All kinds of meat',
                        image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/pizza/meat-pizza.jpeg'
                    }, {
                        id: 18,
                        location_id: 4,
                        name: 'Sausage and Egg',
                        price: 7.28,
                        description: 'You wouldn\'t think that these could go together, but they do!',
                        image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/pizza/sausage-and-egg.jpeg'
                    }, {
                        id: 19,
                        location_id: 4,
                        name: 'Sausage and Olive',
                        price: 8.20,
                        description: 'We do the crazy so you don\'t have to',
                        image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/pizza/sausage-and-olive-pizza.jpeg'
                    }, {
                        id: 20,
                        location_id: 4,
                        name: 'Spaghizza',
                        price: 6.70,
                        description: 'A portmanteau of two classic Italian dishes',
                        image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/pizza/spaghetti-pizza.jpeg'
                    }, {
                        id: 21,
                        location_id: 5,
                        name: 'Cheeze Pizza',
                        price: 7.80,
                        description: 'Several different kinds of cheeze in one place',
                        image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/pizza-two/all-cheeze.jpeg'
                    }, {
                        id: 22,
                        location_id: 5,
                        name: 'Half and Half Pizza',
                        price: 5.00,
                        description: 'For when you aren\'t sure what you want',
                        image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/pizza-two/half-and-half-pizza.jpeg'
                    }, {
                        id: 23,
                        location_id: 5,
                        name: 'Mushroom and Carrot Pizza',
                        price: 14.95,
                        description: 'Yup, we went there',
                        image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/pizza-two/mushroom-and-carrot.jpeg'
                    }, {
                        id: 24,
                        location_id: 5,
                        name: 'Classic Pepperoni',
                        price: 17.99,
                        description: 'Get it while it\'s hot!',
                        image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/pizza-two/pepperoni-pizza.jpeg'
                    }, {
                        id: 25,
                        location_id: 5,
                        name: 'Tomato Pizza',
                        price: 9.99,
                        description: 'Because Dan likes it gnarly!',
                        image_url: 'https://s3-us-west-2.amazonaws.com/andydlindsay-midterm/pizza-two/tomato-pizza.jpeg'
                    }
                ])
            ]);
        });
};
