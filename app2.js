
//Everthing from app.js as of december 2nd. Everthing is getting so convoluded Im leaving 
//this here before the original file gets worse.





const express = require('express');
const app = express();
const Twit = require('twit');
var pug = require('pug');
const keys  = require('./config');
let T = new Twit(keys);

app.set('view engine', 'pug');
app.use(express.static('public'));



// app.get('/', function (req, Res, next) {  
T.get('statuses/user_timeline', {count: '1'},  function (err, data, res) {
  let profileImage = data[0].user.profile_image_url;
  res.render('index',{ profImage: profileImage});
});
// }    
// function(req, Res) {
//   T.get('statuses/user_timeline', {screen_name: '_martinezP' ,count: '5'},  function (err, data, res) {
//     let tweet1 = data[0].text;
//     let tweet1RetweetNum = data[0].retweet_count;
//     let tweet1Likes = data[0].favorite_count;
//     let tweet1Date = data[0].created_at;

//     let tweet2 = data[1].text;
//     let tweet2RetweetNum = data[1].retweet_count;
//     let tweet2Likes = data[1].favorite_count;
//     let tweet2Date = data[1].created_at;

//     let tweet3 = data[2].text;
//     let tweet3RetweetNum = data[2].retweet_count;
//     let tweet3Likes = data[2].favorite_count;
//     let tweet3Date = data[2].created_at;

//     let tweet4 = data[3].text;
//     let tweet4RetweetNum = data[3].retweet_count;
//     let tweet4Likes = data[3].favorite_count;
//     let tweet4Date = data[3].created_at;

//     let tweet5 = data[4].text;
//     let tweet5RetweetNum = data[4].retweet_count;
//     let tweet5Likes = data[4].favorite_count;
//     let tweet5Date = data[4].created_at;
//     Res.render('index',{
//       tuweet1: tweet1,
//       // tuweet2: tweet2,
//       // tuweet3: tweet3,
//       // tuweet4: tweet4,
//       // tuweet5: tweet5,
//     });
//   });
// }
// );





//THE CURRENT PROBLEM I AM HAVING IS THAT THE API SEEMS TO ONLY BE ABLE TO RUN ONE GET REQUEST AT A TIME, 
//SO EVERYTHING MAY HAVE TO LOAD AT ONCE, NOT SURE... 

app.get('/', function (req, res) {  
  T.get('statuses/user_timeline', {screen_name: '_martinezP' ,count: '5'},  function (err, data, response) {
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
    res.render('index',{
      tuweet1: tweet1,
      // tuweet2: tweet2,
      // tuweet3: tweet3,
      // tuweet4: tweet4,
      // tuweet5: tweet5,
    });
  });
});
















T.get('followers/list', {screen_name: '_martinezP' ,count: '5'},  function (err, data, response) {
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
  // console.log(friend1Handle);
});

// T.get('statuses/user_timeline', {screen_name: '_martinezP' ,count: '5'},  function (err, data, response) {
//   let tweet1 = data[0].text;
//   let tweet1RetweetNum = data[0].retweet_count;
//   let tweet1Likes = data[0].favorite_count;
//   let tweet1Date = data[0].created_at;

//   let tweet2 = data[1].text;
//   let tweet2RetweetNum = data[1].retweet_count;
//   let tweet2Likes = data[1].favorite_count;
//   let tweet2Date = data[1].created_at;

//   let tweet3 = data[2].text;
//   let tweet3RetweetNum = data[2].retweet_count;
//   let tweet3Likes = data[2].favorite_count;
//   let tweet3Date = data[2].created_at;
  
//   let tweet4 = data[3].text;
//   let tweet4RetweetNum = data[3].retweet_count;
//   let tweet4Likes = data[3].favorite_count;
//   let tweet4Date = data[3].created_at;

//   let tweet5 = data[4].text;
//   let tweet5RetweetNum = data[4].retweet_count;
//   let tweet5Likes = data[4].favorite_count;
//   let tweet5Date = data[4].created_at;
//   // console.log(tweet2);
// });

T.get('direct_messages', {count: '5'},  function (err, data, response) {
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
  
  // console.log(message1 + ' ' + message2 + ' ' + message3 + ' ' + message4);
  // console.log(dateAndTime5);
});





app.get('/', function (req, res) {
  res.render('index');
});
 
app.listen(3000, () => {
  console.log('running on 3000');
});








//LEAVING DATA HERE IN CASE I RUIN SOMETHING\\
// T.get('statuses/user_timeline', {count: '1'},  function (err, data, res) {
//   let name = data[0].user.name;
//   let handle = data[0].user.screen_name;
//   let profileImage = data[0].user.profile_image_url;
            //ALL GOOD JUST TINKERING WITH A COPY\\
// });

// T.get('followers/list', {screen_name: '_martinezP' ,count: '5'},  function (err, data, response) {
//   let friend1 = data.users[0].name;
//   let friend1ProfilePic = data.users[0].profile_image_url;
//   let friend1Handle = data.users[0].screen_name;
  
//   let friend2 = data.users[1].name;
//   let friend2ProfilePic = data.users[1].profile_image_url;
//   let friend2Handle = data.users[1].screen_name;

//   let friend3 = data.users[2].name;
//   let friend3ProfilePic = data.users[2].profile_image_url;
//   let friend3Handle = data.users[2].screen_name;

//   let friend4 = data.users[3].name;
//   let friend4ProfilePic = data.users[3].profile_image_url;
//   let friend4Handle = data.users[3].screen_name;

//   let friend5 = data.users[4].name;
//   let friend5ProfilePic = data.users[4].profile_image_url;
//   let friend5Handle = data.users[4].screen_name;
//   // console.log(friend1Handle);
// });

// T.get('statuses/user_timeline', {screen_name: '_martinezP' ,count: '5'},  function (err, data, response) {
//   let tweet1 = data[0].text;
//   let tweet1RetweetNum = data[0].retweet_count;
//   let tweet1Likes = data[0].favorite_count;
//   let tweet1Date = data[0].created_at;

//   let tweet2 = data[1].text;
//   let tweet2RetweetNum = data[1].retweet_count;
//   let tweet2Likes = data[1].favorite_count;
//   let tweet2Date = data[1].created_at;

//   let tweet3 = data[2].text;
//   let tweet3RetweetNum = data[2].retweet_count;
//   let tweet3Likes = data[2].favorite_count;
//   let tweet3Date = data[2].created_at;
  
//   let tweet4 = data[3].text;
//   let tweet4RetweetNum = data[3].retweet_count;
//   let tweet4Likes = data[3].favorite_count;
//   let tweet4Date = data[3].created_at;

//   let tweet5 = data[4].text;
//   let tweet5RetweetNum = data[4].retweet_count;
//   let tweet5Likes = data[4].favorite_count;
//   let tweet5Date = data[4].created_at;
//   // console.log(tweet2);
// });

// T.get('direct_messages', {count: '5'},  function (err, data, response) {
//   let message1 = data[0].text;
//   let dateAndTime1 = data[0].created_at;

//   let message2 = data[1].text;
//   let dateAndTime2 = data[1].created_at;  
  
//   let message3 = data[2].text;
//   let dateAndTime3 = data[2].created_at;
  
//   let message4 = data[3].text;
//   let dateAndTime4 = data[3].created_at;
  
//   let message5 = data[4].text;
//   let dateAndTime5 = data[4].created_at;
  
  // console.log(message1 + ' ' + message2 + ' ' + message3 + ' ' + message4);
  // console.log(dateAndTime5);
// });


