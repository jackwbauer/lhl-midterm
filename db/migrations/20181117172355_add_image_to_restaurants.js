
exports.up = function(knex, Promise) {
    return knex.schema.table('restaurants', table => { 
        table.string('image_url');
        table.string('description');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('restaurants', table => {
        table.dropColumn('image_url');
        table.dropColumn('description');
    });
};
