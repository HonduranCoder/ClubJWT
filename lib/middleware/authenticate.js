const jwt = require('jsonwebtoken');
/*
  TODO: Check for the session cookie and verify
  its contents using jsonwebtoken, then
  assign the payload to req.user
*/

module.exports = async (req, res, next) => {
  try {
    //reading a cookie
    //JWT hash
    const cookie = req.cookies.session;
    //verifying the cookie
    //verify is the lock.
    //JWT_SECRET is the key.
    //JWT only valid in the context of this secret
    //if secret doesn't match, error.
    //cookie session changes (expires).
    const payload = jwt.verify(cookie, process.env.JWT_SECRET);
    //set payload
    req.user = payload;
    next();
  } catch (error) {
    console.error(error);
    error.message = 'You must be signed in to continue';
    error.status = 401;
    next(error);
  }
};
