const Knex = require("knex");

module.exports = {
    up: async function up(knex = new Knex()){
        return knex('hello').insert({
            msg: 'hello smar!'
        }).then();
    },
    down: async function down(){
        return knex('hello').where().delete().then();
    }
}