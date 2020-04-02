var orm = require("../config/orm");

var grocery = {
    selectAll: function(cb){
        orm.selectAll("groceries", function(res){
            cb(res);
        });
    },
    insertOne: function(col, values, cb){
        orm.insertOne("groceries", col, values, function(res){
            cb(res);
        })
    },
    updateOne: function(objColVals, id, cb){
        orm.updateOne("groceries", objColVals, id, function(res){
            cb(res);
        })
    }
}

module.exports = grocery;