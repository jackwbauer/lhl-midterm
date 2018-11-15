
exports.up = function(knex, Promise) {
    return knex.schema.createTable('locations', (table) => {
        table.increments('id');
        table.integer('restaurant_id').unsigned().notNullable();
        table.foreign('restaurant_id').references('restaurants.id');
        table.string('address').notNullable();
        table.string('phone').notNullable();
        table.string('hours').notNullable();
        table.boolean('active').defaultTo('true').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('locations');
};
