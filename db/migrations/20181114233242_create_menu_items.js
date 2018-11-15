
exports.up = function(knex, Promise) {
    return knex.schema.createTable('menu_items', (table) => {
        table.increments('id');
        table.integer('location_id').unsigned().notNullable();
        table.foreign('location_id').references('locations.id');
        table.string('name').notNullable();
        table.decimal('price');
        table.string('description');
        table.string('image_url');
        table.boolean('active').defaultTo('true').notNullable();
        table.timestamp('deleted_at');
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('menu_items');
};
