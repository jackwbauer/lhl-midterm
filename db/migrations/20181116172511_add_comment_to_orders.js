
exports.up = function(knex, Promise) {
  return knex.schema.table('orders', table => {
    table.string('comment');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('orders', table => {
    table.dropColumn('comment');
  })
};
