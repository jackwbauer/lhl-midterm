
exports.up = function (knex, Promise) {
    return knex.schema.table('locations', table => {
        table.dropColumn('monday');
        table.dropColumn('tuesday');
        table.dropColumn('wednesday');
        table.dropColumn('thursday');
        table.dropColumn('friday');
        table.dropColumn('saturday');

        table.integer('sunday_opening');
        table.integer('sunday_closing');
        table.integer('monday_opening');
        table.integer('monday_closing');
        table.integer('tuesday_opening');
        table.integer('tuesday_closing');
        table.integer('wednesday_opening');
        table.integer('wednesday_closing');
        table.integer('thursday_opening');
        table.integer('thursday_closing');
        table.integer('friday_opening');
        table.integer('friday_closing');
        table.integer('saturday_opening');
        table.integer('saturday_closing');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.table('locations', table => {
        table.string('monday');
        table.string('tuesday');
        table.string('wednesday');
        table.string('thursday');
        table.string('friday');
        table.string('saturday');

        table.dropColumn('sunday_opening');
        table.dropColumn('sunday_closing');
        table.dropColumn('monday_opening');
        table.dropColumn('monday_closing');
        table.dropColumn('tuesday_opening');
        table.dropColumn('tuesday_closing');
        table.dropColumn('wednesday_opening');
        table.dropColumn('wednesday_closing');
        table.dropColumn('thursday_opening');
        table.dropColumn('thursday_closing');
        table.dropColumn('friday_opening');
        table.dropColumn('friday_closing');
        table.dropColumn('saturday_opening');
        table.dropColumn('saturday_closing');
    });
};
