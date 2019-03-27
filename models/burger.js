var orm = require("../config/orm.js");

const burger = {
    //get the whole list
    all: function (callback) {
        orm.selectAll('burger', function (res) {
            callback(res);
        });
    },
    //add a new burger
    create: function (col, val, callback) {
        orm.insertOne('burger', col, val, function (res) {
            callback(res);
        });
    },
    //update the burger status
    update: function(col,val,where,callback){
        orm.updateOne('burger',col,val,where,function(res){
            callback(res);
        });
    }
}
module.exports = burger;