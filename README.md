# It's A Match!
# Friend Finder Application

## Description
*It's A Match!*, a full-stack site, implements friend matching based on users'  responses to a ten question survey. The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). When the survey is submitted, the site will take in the results and compare the user's answers with those from other users.  An existing user record closest to the current user's responses is found and returned. The app will then display the name and picture of the user with the best overall match.  The closest set of user responses is defined as the set with the lowest absolute difference for all ten questions combined.

## Demo
*It's A Match!* is deployed to Heroku.  Please check it out [here](https://mighty-journey-94523.herokuapp.com/).

## Installation
To install the application follow the instructions below:
```
git clone https://github.com/SueJStevens/FriendFinder.git
cd FriendFinder
npm install
```

## Running Locally
To run the application locally and access it in your browser, first set the `PORT` environment variable to the value of your choice.  An example is shown below.
```
export PORT=8080
```
After the `PORT` environment variable has been set, run the Node.js application with the command below.
```
node server.js
```
The application will now be running locally on `PORT`, in this case that is `PORT 8080` You can then access it locally from your browser at the URL `localhost:PORT`, in this case `localhost:8080`.

## Technology
### Hosting Platform
  * Heroku (https://www.heroku.com/home)
### Front-End
  * HTML, CSS, JavaScript, jQuery
  * Bootstrap v4 (https://getbootstrap.com/)
### Back-End
  * Javascript, jQuery
  * Node.js (https://nodejs.org/en/)
  * Express.js (https://expressjs.com/)

## Code Explanation
  * `server.js` file sets up the Express server, specifying our port number as well as the environment variable will be used by Heroku (`process.env.PORT`), the npm packages that need to be loaded (`express`, `body-parser` and `path`), and the routes.

  * There are 2 front-end HTML files (`home.html` and `survey.html`).  They determine the user experience - the home page and the survey, which will also show the resulting best match via a modal.

  * The routing files (`htmlRoutes.js` and `apiRoutes.js`) contain the back-end logic.  The HTML routes display the survey and homepage based on the URL that is accessed, and the API routes send back content in our server-side data (initially set in `friends.js` and added to via the survey) or posts new content from the survey response.

  * The application's initial data is stored inside of `app/data/friends.js` as an array of objects following the format below.

```json
  {
    "name": "Sue Stevens",
    "photo":"https://user-images.githubusercontent.com/39141985/48185235-3f2d7080-e2e9-11e8-99a5-f8634ec8548b.png",
    "scores": [5, 1, 3, 3, 5, 5, 4, 2, 3, 3]
  } 
```

  * The user's most compatible friend is determined from a calculation comparing the user's survey scores to the scores of all friends in the application data, returning the friend with the minimum difference in scores.

  * A modal is revealed to the user displaying both the name and picture of the closest match.
