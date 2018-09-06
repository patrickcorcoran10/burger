var connection = require("../config/connection.js");

var orm = {
    showAll: function(table, vals, condition, cb) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?;" ;
        connection.query(queryString, [table, vals, condition], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        })
    },
    devourBurger: function(table, condition, val, condition, cb) {
        var queryString = "UPDATE ?? SET ?? WHERE ?? = ?;";
        connection.query(queryString, [col, table, vals, condition], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        })
    },
    createBurger: function(table, col, val, cb) {
        var queryString = "INSERT INTO ?? (??, ??) VALUES (??, ??); ";
        connection.query(queryString, table, (col, false), function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        })
    }
};


module.exports = orm;