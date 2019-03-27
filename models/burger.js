var orm = require("../config/orm.js");

var burger = {
    //get the whole list
    all: function (callback) {
        orm.all('burger', function (res) {
            callback(res);
        });
    },
    //add a new burger
    create: function (col, val, callback) {
        orm.create('burger', col, val, function (res) {
            callback(res);
        });
    },
    //update the burger status
    update: function(col,val,where,callback){
        orm.update('burger',col,val,where,function(res){
            callback(res);
        });
    }
}
module.exports = burger;