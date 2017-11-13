const express = require('express');
const http = require('http');
const path = require('path');
const mongo = require('mongodb');
const app = express();
const url = require('url');
// Data
var seedData = {
    uname: 'Sanjoth Shaw',
    email: 'sanjothshaw@gmail.com',
    password: 'abcd1234',
    movieClicks:[ 1212,2213,4521],
    genres: [44,22,44],
    movieLikes: [ 12312,4123,4256],
    movieDislikes: [1123,4234,23434],
    mylist: [123421,1234231,1234]
  };

var mourl = 'mongodb://heroku_m30b5bz0:60gal69sk9g13li16u57jda1ts@ds261745.mlab.com:61745/heroku_m30b5bz0';

var MongoClient = mongo.MongoClient;

MongoClient.connect(mourl, function(err, db) {
  if (err) throw err;
      console.log("Database usable!");
     /* db.createCollection("users", function(err, res) {
      console.log("Collection created!");
      db.close();
    }); */
  });

//search



app.get('/regUser', function(request, response){
  var querys = url.parse(request.url, true);
  var name = querys.query.name;
  var email = querys.query.email;
  var pass = querys.query.password1;

  MongoClient.connect(mourl, function(err, db) {
    var search = { email: "sanjothshaw@gmail.com" };
    db.collection("users").find(search).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      if(result.length == 0)
      {
        db.collection("users").insertOne(seedData, function(err, res) {
          if (err) throw err;
          console.log("1 user inserted");
        });
      }
      db.close();
    });
  });  
});

app.use(express.static(path.join(__dirname, 'dist')));


app.get('*', function (req, res) {
    const index = path.join(__dirname, 'dist', 'index.html');
    res.sendFile(index);
  });


const port = process.env.PORT || '3001';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Running`));