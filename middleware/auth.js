// Middleware til at tjekke om bruger er logget ind
function isAuthenticated(req, res, next) {
  if (!req.session.user) {
    return res.redirect('/auth/login');
  }
  next();
}

// Middleware til at redirecte hvis allerede logget ind
function isNotAuthenticated(req, res, next) {
  if (req.session.user) {
    return res.redirect('/dashboard');
  }
  next();
}

module.exports = {
  isAuthenticated,
  isNotAuthenticated
};