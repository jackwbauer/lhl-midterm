
exports.up = function(knex, Promise) {
    return knex.schema.createTable('orders', (table) => {
        table.increments('id');
        table.integer('user_id').unsigned().notNullable();
        table.foreign('user_id').onDelete('CASCADE').references('users.id');
        table.integer('location_id').unsigned().notNullable();
        table.foreign('location_id').onDelete('CASCADE').references('locations.id');
        table.timestamp('pickup_time');
        table.boolean('accepted').defaultTo('false').notNullable();
        table.boolean('ready').defaultTo('false').notNullable();
        table.timestamp('deleted_at');
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('orders');
};
