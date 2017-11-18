const express = require('express');
const http = require('http');
const path = require('path');
const mongo = require('mongodb');
const app = express();
const url = require('url');
// Data
var seedData;

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

app.get('/getUser', function(request, response){
  var querys = url.parse(request.url, true);
  var email = querys.query.email;
  var pass = querys.query.pass;

    MongoClient.connect(mourl, function(err, db){
      var search = JSON.parse(`{"email": "${email}", "password": "${pass}"}`);
      db.collection("users").find(search).toArray(function(err, result){
        if(err)
        {
          console.error(err); response.send("Error "+ err); throw err;
        }
        else
        {
          response.send(result);
        }
        });
      });
});

app.get('/regUser', function(request, response){
  var querys = url.parse(request.url, true);
  var name = querys.query.name;
  var email = querys.query.email;
  var pass = querys.query.password1;

  var seedData = {
    "uname": `${name}`,
    "email": `${email}`,
    "password": `${pass}`,
    "movieClicks":[],
    "genres": [],
    "movieLikes": [],
    "movieDislikes": [],
    "mylist": []
  };
  
  MongoClient.connect(mourl, function(err, db) {
    var search = JSON.parse(`{"email": "${email}"}`);
    db.collection("users").find(search).toArray(function(err, result) {
      if (err)
      { console.error(err); response.send("Error " + err); throw err;}
      if(result.length == 0)
      {
        //Insert the new document(user) into collection users if new user
        db.collection("users").insertOne(seedData, function(err, res) {
          if (err) throw err;
          console.log("1 user inserted");
          response.send(res);
        });
      }
      else
      { response.send(result); }
      
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