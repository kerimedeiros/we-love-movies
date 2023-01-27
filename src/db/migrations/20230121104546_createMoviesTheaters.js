
exports.up = function (knex) {
    return knex.schema.createTable("movies_theaters", (table) => {
      table.integer("movie_id").unsigned().notNullable();
      table
        .foreign("movie_id")
        .references("movie_id")
        .inTable("movies")
        .onDelete("CASCADE");
      table.integer("theater_id").unsigned().notNullable();
      table
        .foreign("theater_id")
        .references("theater_id")
        .inTable("theaters")
        .onDelete("CASCADE");
      table.boolean("is_showing");
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("movies_theaters");
  };



// refer to "movies_theaters.md" file in "tables" folder

/*  a join table that connects movies with theaters. It represents which movies are being shown in which theaters. It also includes a key that represents whether or not a movie is currently showing at the theater, or if it has in the past.
*/ 

//    .onDelete("CASCADE"); ensures that the child data gets deleted when the parent data is deleted