exports.seed = function (knex, Promise) {
    return knex('order_menu_items').del()
        .then(function () {
            return Promise.all([
                knex.into('order_menu_items').insert({
                    id: 1,
                    order_id: 1,
                    menu_item_id: 1,
                    comment: 'FISH!'
                }),
                knex.into('order_menu_items').insert({
                    id: 2,
                    order_id: 1,
                    menu_item_id: 4,
                    comment: 'Boil em, mash em, put em in a stew'
                }),
                knex.into('order_menu_items').insert([{
                    id: 3,
                    order_id: 1,
                    menu_item_id: 6,
                    comment: 'STEAK!'
                }, {
                    id: 4,
                    order_id: 2,
                    menu_item_id: 2,
                    comment: 'Hold the Mayo!'
                }, {
                    id: 5,
                    order_id: 2,
                    menu_item_id: 2
                }, {
                    id: 6,
                    order_id: 2,
                    menu_item_id: 6,
                    comment: 'Please don\'t burn it this time...'
                }, {
                    id: 7,
                    order_id: 3,
                    menu_item_id: 2
                }, {
                    id: 8,
                    order_id: 3,
                    menu_item_id: 5
                }, {
                    id: 9,
                    order_id: 4,
                    menu_item_id: 1,
                    comment: 'Mmmm can\'t wait!'
                }, {
                    id: 10,
                    order_id: 4,
                    menu_item_id: 5
                }]),
            ]);
        });
};
