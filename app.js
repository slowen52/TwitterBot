console.log("The bot says hi!");

var Twit = require('twit');
 
var config = require('./config.js');

var T = new Twit(config);

//-----------------------------------------------------
//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//

//data.status access to the status object 

//for loop to pull out text from each individual tweet

//refer to .text to get the actual text 
//T.get('search/tweets', { q: 'banana since:2011-07-11', count: 10 }, function(err, data, response) {
//    
//    for (var i = 0; i<data.statuses.length; i++){
//    console.log(data.statuses[i].text)
//}
//  //console.log(data);
//})

//-------------------------------------------------------
//
//  tweet 'hello world!'
//
//T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
//  console.log(data)
//})


//--------------------------------------------------------

//write a function that includes an array of tweets that we compose 
//randomly select a tweet from the array
//post on an interval
//could include a  callbacl function inside T.post to verify if the tweet posted 

setInterval(tweets, 50000);
function tweets(){
    //var moviequotes = ["Frankly, my dear, I don't give a damn.","I'm going to make him an offer he can't refuse.","Toto, I've got a feeling we're not in Kansas anymore.","May the Force be with you.","E.T. phone home.","Louis, I think this is the beginning of a beautiful friendship","I'll have what she's having.","I see dead people.","One morning I shot an elephant in my pajamas. How he got in my pajamas, I don't know"];
    var word = ['cupcake', 'dog','yeet','glasses','sad','banana','storytime','flower']
    var randomWord = Math.floor(Math.random()*word.length) 
    T.get('search/tweets', { q: word[randomWord]+' since:2017-07-11', count: 100 }, function(err, data, response) {
    var random = Math.floor(Math.random()*data.statuses.length);
    T.post('statuses/update', { status: data.statuses[random].text }, function(err, data, response) {
  console.log('posted')
})
    })
    
}
          