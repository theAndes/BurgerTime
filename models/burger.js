var borm = require("../config/orm.js");

var burger = {
    //get the whole list
    all: function (callback) {
        borm.all('burger', function (res) {
            callback(res);
        });
    },
    //add a new burger
    create: function (col, val, callback) {
        borm.create('burger', col, val, function (res) {
            callback(res);
        });
    },
    //update the burger status
    update: function(col,val,where,callback){
        borm.update('burger',col,val,where,function(res){
            callback(res);
        });
    }
}
module.exports = burger;