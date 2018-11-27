var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/database');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/user");
var Disaster = require("../models/disaster");

router.post('/signup', function(req, res) {
  if (!req.body.username || !req.body.password) {
    res.json({success: false, msg: 'Please pass username and password.'});
  } else {
    var newUser = new User({
      username: req.body.username,
      password: req.body.password
    });
    // save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Username already exists.'});
      }
      res.json({success: true, msg: 'Successful created new user.'});
    });
  }
});

router.post('/signin', function(req, res) {
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.sign(user.toJSON(), config.secret);
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token});
        } else {
          // If authentication failed
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});

// Save
router.post('/disaster', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    console.log(req.body);
    var newDisaster = new Disaster({
      name: req.body.name,
      description: req.body.description,
      location: req.body.location,
      rescuers: req.body.rescuers,
      rescued: req.body.rescued,
      injureds: req.body.injureds,
      deaths: req.body.deaths,
      victims: req.body.victims
    });

    newDisaster.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Save disaster failed.'});
      }
      res.json({success: true, msg: 'Successful created new disaster.'});
    });
  } else {
    // If user is not loggedin and try to access secure api
    return res.status(401).send({success: false, msg: 'Unauthorized.'});
  }
});

// Update
router.put('/disaster/:id', passport.authenticate('jwt', { session: false}), function(req, res, next) {
  var token = getToken(req.headers);
  if(token) {
    Disaster.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } else {
    // If user is not loggedin and try to access secure api
    return res.status(401).send({success: false, msg: 'Unauthorized.'});
  }
});

// Delete
router.delete('/disaster/:id', passport.authenticate('jwt', { session: false}), function(req, res, next) {
  var token = getToken(req.headers);
  if(token) {
    Disaster.findByIdAndRemove(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } else {
    // If user is not loggedin and try to access secure api
    return res.status(401).send({success: false, msg: 'Unauthorized.'});
  }
});

// Get by Id
router.get('/disaster/:id', passport.authenticate('jwt', { session: false}), function(req, res, next) {
  var token = getToken(req.headers);
  console.log('/disaster:id');
  if(token) {
    Disaster.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } else {
    // If user is not loggedin and try to access secure api
    return res.status(401).send({success: false, msg: 'Unauthorized.'});
  }
});

// Get all 
router.get('/disasters', passport.authenticate('jwt', { session: false}), function(req, res, next) {
  var token = getToken(req.headers);
  console.log('/disasters');
  if (token) {
    Disaster.find(function (err, disaster) {
      if (err) {
        console.log(err);
        return next(err);
      }
      res.json(disaster);
    });
  } else {
    // If user is not loggedin and try to access secure api
    return res.status(401).send({success: false, msg: 'Unauthorized.'});
  }
});

// Get Top 5 disaster By Death  
router.get('/topFiveDisastersByDeath', passport.authenticate('jwt', { session: false}), function(req, res, next) {
  var token = getToken(req.headers);
  if (token) {
    // Get top 5 disaster by death
    Disaster.find().sort({deaths: -1}).limit(5).exec(function (err, disasters) {
      if (err) {
        return next(err);
      }
      res.json(disasters);
    });
  } else {
    // If user is not loggedin and try to access secure api
    return res.status(401).send({success: false, msg: 'Unauthorized.'});
  }
});

// Extract token from headers
getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = router;