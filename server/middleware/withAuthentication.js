export default(req, res, next) => {
  // TODO: is the user authenticated?  what's their role?
  // mock for now

  req.isAdmin = true;
  req.isAuthenticated= true;
  next();
}