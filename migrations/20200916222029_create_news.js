
exports.up = function(knex) {
  return knex.schema.createTable('news',(table)=>{
      table.increments('id')
      table.string('title').unique().notNullable()
      table.string('posted_at').unique().notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('news')
};
