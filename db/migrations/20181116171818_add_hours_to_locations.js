
exports.up = function(knex, Promise) {
    return knex.schema.table('locations', table => {
        table.dropColumn('hours');
        table.string('sunday');
        table.string('monday');
        table.string('tuesday');
        table.string('wednesday');
        table.string('thursday');
        table.string('friday');
        table.string('saturday');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.table('locations', table => {
        table.string('hours');
        table.dropColumn('sunday');
        table.dropColumn('monday');
        table.dropColumn('tuesday');
        table.dropColumn('wednesday');
        table.dropColumn('thursday');
        table.dropColumn('friday');
        table.dropColumn('saturday');
    })
  };
  