// Dependencies
// =============================================================
const connection = require("./connection.js");

// ORM
// =============================================================
const sql = '';
//Create ORM

const orm = {
    selectAll: function (table, callback) {
        sql = "SELECT * FROM ??"
        connection.query(sql, [table], function (err, result) {

            callback(result);
        })

    },
    insertOne: function (table,col,val) {
        sql = "INSERT INTO ?? (??) VALUES (??) "
        connection.query(sql, [table, col, val], function (err, result) {

            callback(result);
        })
    },
    updateOne: function (table,col,val,where) {

        sql = "UPDATE ?? SET ?? = ?? WHERE ??";
        connection.query(sql, [table,col,val,where], function (err, result) {

            callback(result);
        })

    }

}
module.exports = orm;