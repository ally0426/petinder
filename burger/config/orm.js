const connection = require("./connection.js");

const orm = {
    selectAll: function (table, onResult) {
        const query = "SELECT * FROM ??";
        connection.query(query, [table], (err, result) => {
            console.log(err);
            onResult(err, result);
        });
    },
    insertOne: function (table, cols, vals, onResult) {
        const query = "INSERT INTO ?? (??) VALUES(?)";
        connection.query(query, [table, cols, vals], (err, result) => {
            console.log(err);
            onResult(err, result);
        })
    },
    updateOne: function (table, col, val, id, onResult) {
        const query = "UPDATE ?? SET ?? = ? WHERE id=?";
        connection.query(query, [table, col, val, id], (err, result) => {
            console.log(err);
            onResult(err, result);
        });
    },
    deleteOne: function (table, id, onResult) {
        const query = "DELETE FROM ?? WHERE id=?";
        connection.query(query, [table, id], (err, result) => {
            console.log(err);
            onResult(err, result);
        });
    }
}

module.exports = orm;

