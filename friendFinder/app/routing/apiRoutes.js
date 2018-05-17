var friendList = require("../data/friends");
var path = require("path");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendList);
  });

  app.post("/api/friends", function (req, res) {
    console.log("req.body", req.body);

    var newFriendScores = req.body.scores;
    console.log("newFriendScores", newFriendScores);

    var match;
    var currentBest = 100;
    var differenceArray = [];
    var bestIndex;

    for (var i = 0; i < friendList.length; i++) {
      for (var j = 0; j < 10; j++) {
        console.log("parseInt(newFriendScores[i]", parseInt(newFriendScores[j]));
        console.log("friendList.scores", friendList.scores);

        var currentDifference = parseInt(newFriendScores[j]) - friendList[i].scores[j];
        console.log("currentDifference", currentDifference);

        differenceArray.push(Math.abs(currentDifference));
      }

      var difference = differenceArray.reduce(add, 0); // needs function add()
      console.log("final difference*********************", difference);
      console.log("friendList[i]", friendList[i]);
      console.log("currentBest", currentBest);
      if (difference < currentBest) {
        bestIndex = i;
        currentBest = difference;
        differenceArray = [];
      }
      else {
        differenceArray = [];
      }


      function add(a, b) {
        return a + b;
      }
    }
    console.log("friendList[bestIndex]", friendList[bestIndex]);

    res.json(friendList[bestIndex]);

  });
};