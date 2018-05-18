const orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
        orm.selectAll("burgers", cb);
    },
    create: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, cb);
    },
    update: function(col, val, id, cb) {
        orm.updateOne("burgers", col, val, id, cb);
    },
    delete: function(id, cb) {
        orm.deleteOne("burgers", id, cb);
    }
}

module.exports = burger;