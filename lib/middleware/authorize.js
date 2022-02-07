// TODO: Check req.user to ensure the user's email is 'admin'
//authenticate is the gatekeeping(put in route)

module.exports = async (req, res, next) => {
  try {
    if (req.user.email !== 'admin') throw new Error('Unauthorized');
    // const user = jwt.verify(cookie, process.env.JWT_SECRET);
    // req.user = user;
    next();
  } catch (error) {
    console.error(error);
    error.message = 'You do not have access to view this page';
    error.status = 403;
    next(error);
  }
};
