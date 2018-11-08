// Load Data
// =============================================================

var friendsData = require("../data/friends");

//var bodyParser = require('body-parser'); 

// app.post('/CAForm', function(req, res) {
//   res.send(req.body.optradio);
// });



// Routing
// =============================================================
module.exports = function (app) {
  //app.use(bodyParser.json()); // to support JSON bodies
  //app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies
  
  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  }); //close get request

  app.post("/api/friends", function (req, res) {
    //console.log("New Test"+req.body.name);

    //Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`)
    var userScores = (req.body.scores);

    //compare the difference between current user's scores against those from other users, question by question. 
    //Add up the differences to calculate the `totalDifference`.

    //set variable equal to a number large enough to always be bigger than total possible score (friendsData[0].scores.length is the # of questions * 5 is the number of possible answers); 
    var compareDif = (friendsData[0].scores.length * 5) + 1;
    //console.log("The name of the first friend: " + friendsData[0].name);
    //console.log("Total Difference Variable:" + friendsData[0].scores.length);
    //loop through the friends object
    //console.log("Length of FriendsData Object: "+friendsData.length);
    for (var i = 0; i < friendsData.length; i++) {
      //loop through scores
      var totalScoreDif = 0;
      //console.log("_____________________________________");
      //console.log("The Friend: "+friendsData[i].name);
      for (var j = 0; j < friendsData[i].scores.length; j++) {
        //Identify the absolute value of difference between Friends Survey 
        //console.log("This User's Score for Q"+ j +" "+parseInt(userScores[j]));
        //console.log("The friendData Score for Q"+ j +" "+parseInt(friendsData[i].scores[j]));
        eachScoreDifCalc = Math.abs(parseInt(userScores[j]) - parseInt(friendsData[i].scores[j]));
        //console.log("eachScoreDifCalc "+eachScoreDifCalc);
        totalScoreDif += eachScoreDifCalc;
        //console.log("TotalScoreDif "+totalScoreDif);
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
    //console.log(req.body);

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