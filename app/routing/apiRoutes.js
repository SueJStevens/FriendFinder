// Load Data
// =============================================================

var friendsData = require("../data/friends");

// Routing
// =============================================================
module.exports = function (app) {
  
  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  }); //close get request

  app.post("/api/friends", function (req, res) {

    //Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`)
    var userScores = (req.body.scores);

    //compare the difference between current user's scores against those from other users, question by question. 
    //Add up the differences to calculate the `totalDifference`.

    //set variable equal to a number large enough to always be bigger than total possible score (friendsData[0].scores.length is the # of questions * 5 is the number of possible answers); 
    var compareDif = (friendsData[0].scores.length * 5) + 1;
    //loop through the friends object
    //console.log("Length of FriendsData Object: "+friendsData.length);
    for (var i = 0; i < friendsData.length; i++) {
      //loop through scores
      var totalScoreDif = 0;
      for (var j = 0; j < friendsData[i].scores.length; j++) {
        //Identify the absolute value of difference between Friends Survey 
        eachScoreDifCalc = Math.abs(parseInt(userScores[j]) - parseInt(friendsData[i].scores[j]));
        totalScoreDif += eachScoreDifCalc;
      }
      if (totalScoreDif < compareDif) {
        //found a new compatable friend so set the comptable friend variables to the new friend
        compatibleUser = i;
        //set the comparison score to the new friend's score
        compareDif = totalScoreDif;
      }

    }  //end of loop through friend object

    //populate name and photo variable
    var name = friendsData[compatibleUser].name;
    var photo = friendsData[compatibleUser].photo;

    //populate the results to return to the client
    var result = {
      "name": name,
      "photo": photo
    }
  
    //Save survey results
    friendsData.push(req.body);

    // Return the result back to the client in json form
    res.json(result);
  }); //close post request

  // ---------------------------------------------------------------------------
  // Used to clear out the table while working with the functionality.

  app.post("/api/clear", function (req, res) {
    // Empty out the arrays of data
    friendsData.length = [];
    res.json({ ok: true });
  });

} //close module.exports