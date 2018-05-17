const orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
        orm.selectAll("burgers", cb);
    },
    create: function(planText, cb) {
        orm.insertOne("burgers", "name", planText, cb);
    },
    update: function(newText, id, cb) {
        orm.updateOne("burgers", "name", newText, id, cb);
    },
    delete: function(id, cb) {
        orm.deleteOne("burgers", id, cb);
    }
}

module.exports = burger;