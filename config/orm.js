var connection = require("../config/connection.js");

var orm = {
    showAll: function(table, col, vals, condition, cb) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?" ;
        connection.query(queryString, [table, col, vals, condition], function(err, result) {
            if (err) throw err;
            console.log(result);
        })
    },
    devourBurger: function(table, col, val, condition, cb) {
        var queryString = "UPDATE ?? SET FROM ?? WHERE ?? = ?";
        connection.query(queryString, [col, table, vals, condition], function(err, result) {
            if (err) throw err;
            console.log(result);
        })
    },
    createBurger: function(table, col, vals, cb) {
        var queryString = "SELECT * FROM ?? INSERT INTO ?? VALUES (?? ?? ) ";
        connection.query(queryString, tableInput, idValue, (valOfCol, false), function(err, result) {
            if (err) throw err;
            console.log(result);
        })
    }
};


module.exports = orm;