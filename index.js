const express = require('express');
const http = require('http');
const path = require('path');
const mongo = require('mongodb');
const app = express();
const url = require('url');
const bodyParser = require('body-parser');
// Globals 

var mourl = 'mongodb://heroku_m30b5bz0:60gal69sk9g13li16u57jda1ts@ds261745.mlab.com:61745/heroku_m30b5bz0';
var MongoClient = mongo.MongoClient;
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/**
 * Test DB Connection
 */
MongoClient.connect(mourl, function (err, db) {
  if (err) throw err;
  console.log("Database usable!");
  /* db.createCollection("users", function(err, res) {
   console.log("Collection created!");
   db.close();
 }); */
});

/**
 * APIs Start here
 */

/**
 * Get User Details
 */
app.get('/getUser', function (request, response) {
  var querys = url.parse(request.url, true);
  var email = querys.query.email;
  var pass = querys.query.pass;

  MongoClient.connect(mourl, function (err, db) {
    var search = JSON.parse(`{"email": "${email}", "password": "${pass}"}`);
    db.collection("users").find(search).toArray(function (err, result) {
      if (err) {
        console.error(err); response.send("Error " + err); throw err;
      }
      else {
        response.send(result);
      }
    });
  });
});

/**
 * Register User
 */
app.get('/regUser', function (request, response) {
  var querys = url.parse(request.url, true);
  var name = querys.query.name;
  var email = querys.query.email;
  var pass = querys.query.password1;
  var pos = {};
  console.log("Hello");
  var seedData = {
    "uname": `${name}`,
    "email": `${email}`,
    "password": `${pass}`,
    "tracking_data": pos,
    "additional_data": pos,
    "cluster": ``,
    "genre_ranking": ``
  };

  MongoClient.connect(mourl, function (err, db) {
    var search = JSON.parse(`{"email": "${email}"}`);
    console.log(search);
    db.collection("users").find(search).toArray(function (err, result) {
      if (err) { console.error(err); response.send("Error " + err); throw err; }
      if (result.length == 0) {
        console.log("NO user")
        //Insert the new document(user) into collection users if new user
        db.collection("users").insertOne(seedData, function (err, res) {
          if (err) throw err;
          console.log("1 user inserted");
          response.send(res);
        });
      }
      else { response.send(result); }

      db.close();
    });
  });
});

/**
 * Send Tracking data to the MongoDB Database
 */
app.post('/sendTrackingData', function (req, res) {

  var user_id = req.body.user_id;
  var tracking_data = {};
  tracking_data = JSON.parse(req.body.JSON_String);
  console.log(user_id);
  var bcd = tracking_data;
  var search = JSON.parse(`{"email": "${user_id}"}`);
  var query_object, abc, query, params;
  // UPDATE MULTIPLE FI

  //console.log(tracking_data["18411"].genre_ids);
  MongoClient.connect(mourl, function (err, db) {
    for (var movie_id in tracking_data) {
      kcd = JSON.stringify(bcd[movie_id]);
      //var temp = tracking_data[movie_id];
      abc = "\"tracking_data." + movie_id + "\"";
      if (params === undefined) {
        params = abc + ': ' + kcd;
      }
      else {
        params = params + ',' + abc + ': ' + kcd;
      }

      query = '{$set: {' + params + '}}';
      var jsonValidString = JSON.stringify(eval("(" + query + ")"));
      var query_object = JSON.parse(jsonValidString);
      // query_object = {$set: {tracking_data: tracking_data}};
      console.log(query);

    }
    // Send to DB
    db.collection("users").update(search, query_object, { upsert: true }, function (err, result) {
      if (err) {
        console.error(err);
        res.send("Error " + err); throw err;
      }
      else {
        res.send(result);
      }
    });

  });
});

/**
 * 
 */
app.post('/sendAdditionalData', function (req, res) {

  var user_id = req.body.user_id;
  var additional_data = {};
  additional_data = JSON.parse(req.body.JSON_String);
  console.log(user_id);
  var bcd = additional_data;
  var search = JSON.parse(`{"email": "${user_id}"}`);
  var query_object, abc, query, params;
  // UPDATE MULTIPLE FI

  //console.log(additional_data["18411"].genre_ids);
  MongoClient.connect(mourl, function (err, db) {
    for (var movie_id in additional_data) {
      kcd = JSON.stringify(bcd[movie_id]);
      //var temp = additional_data[movie_id];
      abc = "\"additional_data." + movie_id + "\"";
      if (params === undefined) {
        params = abc + ': ' + kcd;
      }
      else {
        params = params + ',' + abc + ': ' + kcd;
      }

      query = '{$set: {' + params + '}}';
      var jsonValidString = JSON.stringify(eval("(" + query + ")"));
      var query_object = JSON.parse(jsonValidString);
      // query_object = {$set: {additional_data: additional_data}};
      console.log(query);

    }
    // Send to DB
    db.collection("users").update(search, query_object, { upsert: true }, function (err, result) {
      if (err) {
        console.error(err);
        res.send("Error " + err); throw err;
      }
      else {
        res.send(result);
      }
    });

  });
});


/**
 * For using Angular with Node.js
 * Keep it in the end of the requests
 */
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', function (req, res) {
  const index = path.join(__dirname, 'dist', 'index.html');
  res.sendFile(index);
});


const port = process.env.PORT || '3001';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Running`));
