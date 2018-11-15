exports.seed = function (knex, Promise) {
    return knex('order_menu_items').del()
        .then(function () {
            return Promise.all([
                knex('order_menu_items').insert({
                    id: 1,
                    order_id: 1,
                    menu_item_id: 1,
                    comment: 'FISH!'
                }),
                knex('order_menu_items').insert({
                    id: 2,
                    order_id: 1,
                    menu_item_id: 4,
                    comment: 'Boil em, mash em, put em in a stew'
                }),
                knex('order_menu_items').insert({
                    id: 3,
                    order_id: 1,
                    menu_item_id: 6,
                    comment: 'STEAK!'
                }),
            ]);
        });
};
