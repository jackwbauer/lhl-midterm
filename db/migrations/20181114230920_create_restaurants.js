
exports.up = function(knex, Promise) {
    return knex.schema.createTable('restaurants', (table) => {
        table.increments('id');
        table.string('name').notNullable();
        table.integer('owner_id').unsigned().notNullable();
        table.foreign('owner_id').references('users.id');
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('restaurants');
};
