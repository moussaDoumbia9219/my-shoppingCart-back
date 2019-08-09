export default (req, res, next) => {
  console.log(
    '=> ',
    req.method,
    req.originalUrl,
    'isAuthenticated',
    typeof req.user === 'object',
    'is  Admin: ',
    req.user && req.user.role === 'admin'
  );
  next();
};