
exports.up = function(knex, Promise) {
  return knex.schema.table('orders', table => {
      table.boolean('confirmed').defaultTo('false').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('orders', table => {
      table.dropColumn('confirmed');
  })
};
