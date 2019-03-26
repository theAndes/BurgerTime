// Dependencies
// =============================================================
const connection = require("./connection.js");

// ORM
// =============================================================
const sql;
//Create ORM

const orm = {
    selectAll: function (callback) {
        sql = "SELECT * FROM ??"
        connection.query(sql, ['burger'], function (err, result) {

            callback(result);
        })

    },
    insertOne: function () {
        sql = "INSERT INTO ?? (body) VALUES (??) "
        connection.query(sql, ['burger', req.body], function (err, result) {

            callback(result);
        })
    },
    updateOne: function () {

    }

}



module.exports = orm;