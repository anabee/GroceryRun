var connection = require("../config/connection.js")

 // Helper function to convert object key/value pairs to SQL syntax
 function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

var orm = {
    // orm is an object of different generic functions we can use to query the database we choose. It will take the input to query and a callback so that everything happens at the time it is supposed to 
    selectAll: function(tableName, cb){
        var queryString = "SELECT * FROM "+ tableName+";";
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(tableName, col, values, cb){
        // var queryString = "INSERT INTO "+tableName+" ("+col+") VALUES "+"('"+values+"');";
        var queryString = `INSERT INTO ${tableName} (${col}) VALUES ('${values}');`;
        console.log(queryString)
        connection.query(queryString, values, function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        })
    },
    updateOne: function(tableName,objColVals, id, cb){
        var queryString = "UPDATE "+tableName+" SET "+objToSql(objColVals)+" WHERE "+id;
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            } 
            cb(result);
        })
    }
}

module.exports = orm;