// Dependencies
// =============================================================
var connection = require("./connection.js");

// ORM
// =============================================================
var sql = '';
//Create ORM

var orm = {
    all: function (table, callback) {
        sql = "SELECT * FROM ??"
        connection.query(sql, table, function (err, result) {

            callback(result);
        })

    },
    create: function (table,col,val,callback) {
        
        
        sql = "INSERT INTO ?? (??) VALUES (?) "
        connection.query(sql, [table, col, val], function (err, result) {


            callback(result);
        })
    },
    update: function (table,col,val,where, callback) {
        console.log(`
            ${table}
            ${col}
            ${val}
            ${where}
                     
            `);

        sql = "UPDATE ?? SET ?? = ? WHERE id = ? ";
        connection.query(sql, [table,col,val,where], function (err, result) {
            console.log('====================================');
            console.log(err);
            console.log('====================================');
            callback(result);
        })

    }

}
module.exports = orm;