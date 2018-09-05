var orm = require("../config/orm.js");


var burger = {

    showAll: function(cb) {
        orm.showAll("burgers", "devoured", false, function(res) {
            cb(res);
        });
    },

    devourBurger: function(cols, vals, cb) {
        orm.devourBurger("burgers", "devoured", true);

    },

    create: function(res) {
        orm.createBurger("burgers", "burger_name")
    }


};



module.exports = burger;