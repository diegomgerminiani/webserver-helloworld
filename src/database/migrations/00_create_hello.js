const Knex = require('knex');

module.exports = {
    up: async function up(knex = new Knex()){
        return knex.schema.createTable('hello', table =>{
            table.increments('id').primary();
            table.string('msg').notNullable();
        }).then();
    },
    down: async function down(){
        return knex.schema.dropTable('hello').then();
    }
}