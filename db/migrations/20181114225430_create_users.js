
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id');
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('email').unique().notNullable();
        table.string('hashed_pwd').notNullable();
        table.string('phone').notNullable();
        table.string('address');
        table.boolean('is_owner').defaultTo('false').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
