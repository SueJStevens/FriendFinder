// Data
// =============================================================

var friendsData = [
  {
    "name": "Mickey Mouse",
    "photo": "https://www.listchallenges.com/f/items/b6d34245-d8f5-4419-a6dd-d6644e0e9a3e.jpg",
    "scores": [2, 4, 1, 4, 4, 2, 5, 2, 4, 2]
  },
  {
    "name": "Minnie Mouse",
    "photo": "https://www.listchallenges.com/f/items/41a8a10b-168c-4a5b-b3d4-d3472611c55e.jpg",
    "scores": [3, 3, 3, 1, 2, 4, 3, 5, 5, 5]
  },
  {
    "name": "Goofy",
    "photo": "https://www.listchallenges.com/f/items/bff19702-651e-46c7-896f-f38e516344bf.jpg",
    "scores": [4, 2, 3, 1, 1, 3, 2, 1, 2, 4]
  },
  {
    "name": "Donald Duck",
    "photo": "https://www.listchallenges.com/f/items/219b8be3-f7d4-4540-a32e-a2940659ca1e.jpg",
    "scores": [1, 5, 2, 4, 1, 5, 4, 4, 2, 4]
  },
  {
    "name": "Elsa",
    "photo": "https://lumiere-a.akamaihd.net/v1/images/open-uri20160812-3094-11p2kds_940c7497.jpeg?region=0%2C0%2C1024%2C320",
    "scores": [4, 3, 4, 2, 1, 5, 2, 2, 3, 2]
  },
  {
    "name": "Anna",
    "photo": "https://imgc.allpostersimages.com/img/print/u-g-F69PAW0.jpg?w=900&h=900&p=0",
    "scores": [4, 5, 1, 4, 1, 3, 5, 2, 2, 3]
  },
  {
    "name": "Ariel",
    "photo": "https://upload.wikimedia.org/wikipedia/en/7/77/Ariel_disney.png",
    "scores": [2, 2, 1, 2, 3, 1, 3, 4, 1, 3]
  },
  {
    "name": "Bugs Bunny",
    "photo": "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/440px-Bugs_Bunny.svg.png",
    "scores": [4, 2, 3, 2, 2, 5, 4, 2, 5, 3]
  },    
  {
    "name": "Daffy Duck",
    "photo": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Daffy_Duck.svg/360px-Daffy_Duck.svg.png",
    "scores": [4, 1, 1, 4, 3, 2, 5, 5, 3, 5]
  },    
  {
    "name": "Porky Pig",
    "photo": "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Porky_Pig.svg/300px-Porky_Pig.svg.png",
    "scores": [1, 5, 4, 4, 1, 2, 3, 5, 4, 2]
  },    
  {
    "name": "Tasmanian Devil",
    "photo": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Taz-Looney_Tunes.svg/440px-Taz-Looney_Tunes.svg.png",
    "scores": [1, 3, 5, 3, 2, 3, 3, 1, 4, 4]
  },
  {
    "name": "Clarabelle Cow",
    "photo": "https://upload.wikimedia.org/wikipedia/en/e/ed/Clarabelle_Cow.png",
    "scores": [1, 3, 5, 3, 2, 3, 3, 1, 4, 4]
  },
  {
    "name": "Foghorn Leghorn",
    "photo": "https://upload.wikimedia.org/wikipedia/en/a/a0/Foghorn_Leghorn.png",
    "scores": [2, 5, 4, 5, 5, 4, 3, 4, 1, 1]
  },
  {
    "name": "Marvin the Martian",
    "photo": "https://en.wikipedia.org/wiki/File:Marvin_the_Martian.svg",
    "scores": [4, 5, 5, 2, 3, 3, 4, 3, 5, 4]
  },
  {
    "name": "Charlie Dog",
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReUcPOrNhmDC3ekntv6iRFcxgapaXou2Oyn8ax_h0TdLxXsE0fEhM5Z24Dri9zux34FkM",
    "scores": [2, 5, 1, 5, 2, 2, 1, 4, 3, 5]
  },
  {
    "name": "Cecil Turtle",
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFVKSMCo25BVoxlvr4o61B4UxxTUwJ3hQsaOh8k38-9poxoqnYEgPWmJBYc4BboD2LZ1U",
    "scores": [1, 2, 5, 1, 1, 2, 2, 1, 1, 3]
  },
  {
    "name": "Snoopy",
    "photo": "https://www.peanuts.com/wp-content/uploads/2017/09/snoopy.png",
    "scores": [4, 4, 2, 4, 2, 2, 3, 3, 1, 5]
  }, 
  {
    "name": "Charlie Brown",
    "photo": "https://www.peanuts.com/wp-content/uploads/2017/09/charliebrown.png",
    "scores": [2, 1, 5, 2, 3, 1, 5, 5, 5, 4]
  },
  {
    "name": "Woodstock",
    "photo": "https://www.peanuts.com/wp-content/uploads/2011/05/woodstock.png",
    "scores": [3, 5, 4, 2, 1, 2, 5, 3, 3, 2]
  }, 
  {
    "name": "Linus van Pelt",
    "photo": "https://www.peanuts.com/wp-content/uploads/2017/09/linus-r.png",
    "scores": [5, 4, 5, 5, 3, 4, 4, 2, 2, 3]
  },  
  {
    "name": "Lucy",
    "photo": "https://www.peanuts.com/wp-content/uploads/2017/09/lucy.png",
    "scores": [1, 1, 4, 3, 3, 5, 2, 5, 4, 2]
  },  
  {
    "name": "Peppermint Patty",
    "photo": "https://www.peanuts.com/wp-content/uploads/2017/09/marcie-main.png",
    "scores": [4, 1, 1, 4, 3, 3, 1, 2, 3, 4]
  },
  {
    "name": "Little Red Haired Girl",
    "photo": "https://vignette.wikia.nocookie.net/loveinterest/images/2/20/Little-red-haired-girl.png/revision/latest/scale-to-width-down/220?cb=20151121155121",
    "scores": [3, 1, 4, 3, 3, 4, 1, 2, 1, 3]
  },  
  {
    "name": "Red Barron",
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUjUS0UX9TKF9qyZb9XSCDedRn5JkkDq9m_G7qMl-Jbz3qD3peg",
    "scores": [4, 2, 5, 4, 3, 1, 4, 3, 3, 2]
  },
  {
    "name": "Dr. Red Barron Who",
    "photo": "https://www.feistees.com/images/uploads/2015/06/snoopy-red-baron-doctor-who-peanuts-t-shirt.jpg",
    "scores": [
    "5",
    "1",
    "3",
    "1",
    "5",
    "5",
    "3",
    "1",
    "2",
    "2"
    ]
  },
  {
    "name": "Sue J. Stevens",
    "photo":"https://user-images.githubusercontent.com/39141985/48185235-3f2d7080-e2e9-11e8-99a5-f8634ec8548b.png",
    "scores": [
    "5",
    "1",
    "3",
    "3",
    "5",
    "5",
    "4",
    "2",
    "3",
    "3"
    ]
  }  
];

module.exports = friendsData;
