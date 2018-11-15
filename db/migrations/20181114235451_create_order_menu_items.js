
exports.up = function(knex, Promise) {
    return knex.schema.createTable('order_menu_items', (table) => {
        table.increments('id');
        table.integer('order_id').unsigned().notNullable();
        table.foreign('order_id').references('orders.id');
        table.integer('menu_item_id').unsigned().notNullable();
        table.foreign('menu_item_id').references('menu_items.id');
        table.string('comment');
        table.timestamp('deleted_at');
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('order_menu_items');
};
