const express = require('express');
const app = express();
const Twit = require('twit');
var pug = require('pug');
const keys  = require('./config');
let T = new Twit(keys);

app.set('view engine', 'pug');  //Set pug engine
app.use(express.static('public'));  //and static server

app.use('/', function (req, Res) {  //Renders twitter info to with '/' route
  //Subsequent requests get pertanent twitter data
  T.get('statuses/user_timeline', {count: '5'},  function (err, data, res) {
    let profileImage = data[0].user.profile_image_url;
    let name = data[0].user.name;
    let myhandle = data[0].user.screen_name;

    let tweet1 = data[0].text;
    let tweet1RetweetNum = data[0].retweet_count;
    let tweet1Likes = data[0].favorite_count;
    let tweet1Date = data[0].created_at;

    let tweet2 = data[1].text;
    let tweet2RetweetNum = data[1].retweet_count;
    let tweet2Likes = data[1].favorite_count;
    let tweet2Date = data[1].created_at;

    let tweet3 = data[2].text;
    let tweet3RetweetNum = data[2].retweet_count;
    let tweet3Likes = data[2].favorite_count;
    let tweet3Date = data[2].created_at;
    
    let tweet4 = data[3].text;
    let tweet4RetweetNum = data[3].retweet_count;
    let tweet4Likes = data[3].favorite_count;
    let tweet4Date = data[3].created_at;

    let tweet5 = data[4].text;
    let tweet5RetweetNum = data[4].retweet_count;
    let tweet5Likes = data[4].favorite_count;
    let tweet5Date = data[4].created_at;
    T.get('followers/list', {count: '5'},  function (err, data, res) {
      let friend1 = data.users[0].name;
      let friend1ProfilePic = data.users[0].profile_image_url;
      let friend1Handle = data.users[0].screen_name;
      
      let friend2 = data.users[1].name;
      let friend2ProfilePic = data.users[1].profile_image_url;
      let friend2Handle = data.users[1].screen_name;

      let friend3 = data.users[2].name;
      let friend3ProfilePic = data.users[2].profile_image_url;
      let friend3Handle = data.users[2].screen_name;

      let friend4 = data.users[3].name;
      let friend4ProfilePic = data.users[3].profile_image_url;
      let friend4Handle = data.users[3].screen_name;

      let friend5 = data.users[4].name;
      let friend5ProfilePic = data.users[4].profile_image_url;
      let friend5Handle = data.users[4].screen_name;

      T.get('direct_messages', {count: '5'},  function (err, data, res) {
        let message1 = data[0].text;
        let dateAndTime1 = data[0].created_at;

        let message2 = data[1].text;
        let dateAndTime2 = data[1].created_at;  
        
        let message3 = data[2].text;
        let dateAndTime3 = data[2].created_at;
        
        let message4 = data[3].text;
        let dateAndTime4 = data[3].created_at;
        
        let message5 = data[4].text;
        let dateAndTime5 = data[4].created_at;

        Res.render('index', {  //Render info for pug page
          profImage: profileImage,
          name: name,
          myhandle: myhandle,

          tuweet1: tweet1,
          tweet1ReCount: tweet1RetweetNum,
          tweet1likes: tweet1Likes,
          tweet1date: tweet1Date,

          tuweet2: tweet2,
          tweet2ReCount: tweet2RetweetNum,
          tweet2likes: tweet2Likes,
          tweet2date: tweet2Date,

          tuweet3: tweet3,
          tweet3ReCount: tweet3RetweetNum,
          tweet3likes: tweet3Likes,
          tweet3date: tweet3Date,

          tuweet4: tweet4,
          tweet4ReCount: tweet4RetweetNum,
          tweet4likes: tweet4Likes,
          tweet4date: tweet4Date,

          tuweet5: tweet5,
          tweet5ReCount: tweet5RetweetNum,
          tweet5likes: tweet5Likes,
          tweet5date: tweet5Date,

          friend1Name: friend1,
          friend1Pic: friend1ProfilePic,
          friend1handle: friend1Handle,

          friend2Name: friend2,
          friend2Pic: friend2ProfilePic,
          friend2handle: friend2Handle,

          friend3Name: friend3,
          friend3Pic: friend3ProfilePic,
          friend3handle: friend3Handle,

          friend4Name: friend4,
          friend4Pic: friend4ProfilePic,
          friend4handle: friend4Handle,

          friend5Name: friend5,
          friend5Pic: friend5ProfilePic,
          friend5handle: friend5Handle,

          message1text: message1,
          message1time: dateAndTime1,

          message2text: message2,
          message2time: dateAndTime2,

          message3text: message3,
          message3time: dateAndTime3,

          message4text: message4,
          message4time: dateAndTime4,

          message5text: message5,
          message5time: dateAndTime5,
        });
      });
    });
  });
});

app.listen(3000, () => {
  console.log('running on 3000');
});