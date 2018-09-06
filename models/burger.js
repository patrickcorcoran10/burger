var orm = require("../config/orm.js");


var burger = {

    showAll: function(cb) {
        orm.showAll("burgers", "devoured", false, function(res) {
            cb(res);
        });
    },

    devourBurger: function(objColVals, condition, cb) {
        orm.devourBurger("burgers", objColVals, condition, function(res) {
            cb(res);
        });

    },

    create: function(table, col, val, cb) {
        orm.createBurger("burgers", "condition", function(res) {
            cb(res);
        })
    }
};



module.exports = burger;