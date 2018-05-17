const connection = require("./connection.js");

const orm = {
    selectAll: function (table, allResults) {
        const query = "SELECT * FROM ??";
        connection.query(query, [table], (err, result) => {
            allResults(err, result);
        });
    },
    insertOne: function (table, cols, vals, insertResult) {
        const query = "INSERT INTO ?? (??) VALUES(?)";
        connection.query(query, [table, cols, vals], (err, result) => {
            console.log(err);
            insertResult(err, result);
        })
    },
    updateOne: function (table, col, val, id, updateResult) {
        const query = "UPDATE ?? SET ?? = ? WHERE id=?";
        connection.query(query, [table, col, val, id], (err, result) => {
            console.log(err);
            updateResult(err, result);
        });
    },
    deleteOne: function (table, id, deleteResult) {
        const query = "DELETE FROM ?? WHERE id=?";
        connection.query(query, [table, id], (err, result) => {
            console.log(err);
            deleteResult(err, result);
        });
    }
}

module.exports = orm;

