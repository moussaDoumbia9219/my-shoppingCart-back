import jwt from 'express-jwt';
// export default(req, res, next) => {
//   // TODO: is the user authenticated?  what's their role?
//   // mock for now

//   req.isAdmin = true;
//   req.isAuthenticated= true;
//   next();
// }

export default jwt({
  secret: process.env.JWT_SECRET,
  credentialsRequired: false,
  getToken: (req) => {
    if(
      req.headers &&
      req.headers.authorization &&
      req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
      return req.headers.authorization.split(' ')[1]; //Token
    }
    return null;
  }
});