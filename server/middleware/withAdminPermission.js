export default(req, res, next) => {
   req.isAdmin = req.next && req.user && req.user.data && req.user.data.role === 'admin';
   next();
}