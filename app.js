const express = require('express');
const app = express();
const Twit = require('twit');
var pug = require('pug');
const keys  = require('./config');
let T = new Twit(keys);

app.set('view engine', 'pug');
app.use(express.static('public'));



app.use('/', function (req, Res) {  



  T.get('statuses/user_timeline', {count: '1'},  function (err, data, res) {
    let profileImage = data[0].user.profile_image_url;
    Res.render('index',{ profImage: profileImage});
    
  }),

  T.get('statuses/user_timeline', {screen_name: '_martinezP' ,count: '5'},  function (err, data, res) {
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
    Res.render('index',{
      tuweet1: tweet1,
      tuweet2: tweet2,
      // tuweet3: tweet3,
      // tuweet4: tweet4,
      // tuweet5: tweet5,
    });
  });

});


app.listen(3000, () => {
  console.log('running on 3000');
});

