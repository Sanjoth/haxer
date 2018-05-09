const express = require('express');
const http = require('http');
const sslRedirect = require('heroku-ssl-redirect');
const compression = require('compression');
const path = require('path');
const mongo = require('mongodb');
const app = express();
const url = require('url');
const bodyParser = require('body-parser');
const UIDGenerator = require('uid-generator');
const uidgen = new UIDGenerator(256, UIDGenerator.BASE62);
const mourl = 'mongodb://heroku_m30b5bz0:60gal69sk9g13li16u57jda1ts@ds261745.mlab.com:61745/heroku_m30b5bz0';
var MongoClient = mongo.MongoClient;

app.use(sslRedirect());
app.use(compression(({level: 9})));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


/**
 * Test DB Connection
 */
MongoClient.connect(mourl, function (err, db) {
  if (err) throw err;
  console.log("Database usable!");
});

/**
 * APIs START HERE
 */

/**
 * Get User Details
 */
app.get('/loginUser', function (request, response) {
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

app.get('/getUserDetails', function (request, response) {
  var querys = url.parse(request.url, true);
  var email = querys.query.email;

  MongoClient.connect(mourl, function (err, db) {
    var search = JSON.parse(`{"email": "${email}"}`);
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
  var uid = uidgen.generateSync();
  console.log(uid);
  var seedData = {
    "uname": `${name}`,
    "email": `${email}`,
    "password": `${pass}`,
    "token": uid,
    "reactions_data": pos,
    "bookmark_data": pos,
    "clicked_data": pos,
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
app.post('/sendReactionData', function (req, res) {
  var user_id = req.body.user_id;
  var tracking_data = {};
  tracking_data = JSON.parse(req.body.JSON_String);
  var bcd = tracking_data;
  var search = JSON.parse(`{"email": "${user_id}"}`);
  var query_object, abc, query, params;
  // UPDATE MULTIPLE FI

  //console.log(tracking_data["18411"].genre_ids);
  try {
    MongoClient.connect(mourl, function (err, db) {
      for (var movie_id in tracking_data) {
        kcd = JSON.stringify(bcd[movie_id]);
        //var temp = tracking_data[movie_id];
        abc = "\"reactions_data." + movie_id + "\"";
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
        //console.log(query);

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
  }
  catch (e) {
    console.log(e);
  }
});

/**
 * 
 */
app.post('/sendClicksData', function (req, res) {

  var user_id = req.body.user_id;
  var additional_data = {};
  additional_data = JSON.parse(req.body.JSON_String);
  var bcd = additional_data;
  var search = JSON.parse(`{"email": "${user_id}"}`);
  var query_object, abc, query, params;

  try {
    MongoClient.connect(mourl, function (err, db) {
      for (var movie_id in additional_data) {
        kcd = JSON.stringify(bcd[movie_id]);
        abc = "\"clicked_data." + movie_id + "\"";
        if (params === undefined) {
          params = abc + ': ' + kcd;
        }
        else {
          params = params + ',' + abc + ': ' + kcd;
        }
        query = '{$set: {' + params + '}}';
        var jsonValidString = JSON.stringify(eval("(" + query + ")"));
        var query_object = JSON.parse(jsonValidString);
      }
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
  }
  catch (e) {
    console.log(e);
  }
});

app.post('/sendBookmarkData', function (req, res) {

  var user_id = req.body.user_id;
  var additional_data = {};
  additional_data = JSON.parse(req.body.JSON_String);
  var bcd = additional_data;
  var search = JSON.parse(`{"email": "${user_id}"}`);
  var query_object, abc, query, params;

  //console.log(additional_data["18411"].genre_ids);
  try {
    MongoClient.connect(mourl, function (err, db) {
      for (var movie_id in additional_data) {
        kcd = JSON.stringify(bcd[movie_id]);
        abc = "\"bookmark_data." + movie_id + "\"";
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
        //console.log(query);

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
  }
  catch (e) {
    console.log(e);
  }
});

/**
 * For using Angular with Node.js
 * Keep it in the end of the requests
 */
app.use(express.static(path.join(__dirname, 'dist'), { maxAge: 0 }));
app.get('*', function (req, res) {
  const index = path.join(__dirname, 'dist', 'index.html');
  res.sendFile(index);
});

const port = process.env.PORT || '3001';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Running`));
