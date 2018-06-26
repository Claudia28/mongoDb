//require the orm object of functions
var orm = require('../config/orm.js');

//Set up the model object of functions
var burger = {
    //the 'cb' represents the callback function that was passed in from routes.js
    selectAll: function(cb) {
        //burger.selectAll will call this orm func and pass in the db name and another callback function
        orm.selectAll('burgers', function(res){
            //cb function is pulling data back from the orm function via and boomeranging it back to routes.js
            cb(res);
        })
    },

    update: function(id, cb) {
        orm.update('burgers', id, cb);
    },

    insertOne: function(name, cb) {
        orm.insertOne('burgers', name, cb);
    }
}

module.exports = burger;
