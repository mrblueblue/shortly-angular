var jwt  = require('jwt-simple');
var path = require('path')

module.exports = {
  errorLogger: function (error, req, res, next) {
    // log the error then send it to the next middleware in
    // middleware.js

    console.error(error.stack);
    next(error);
  },
  errorHandler: function (error, req, res, next) {
    // send error message to client
    // message for gracefull error handling on app
    res.send(500, {error: error.message});
  },

  decode: function (req, res, next) {
    var token = req.headers['x-access-token'];
    var user;
    console.log("TOKEN", token)
    if (!token) {
      var truePath = path.resolve(__dirname + '/../../client/index.html')
      console.log(truePath)
      res.sendFile(truePath);
      // return
      // return res.redirect('/signin'); // send forbidden if a token is not provided
    }

    try {
      // decode token and attach user to the request
      // for use inside our controllers
      user = jwt.decode(token, 'secret');
      req.user = user;
      next();
    } catch(error) {
      return next(error);
    }

  }
};
