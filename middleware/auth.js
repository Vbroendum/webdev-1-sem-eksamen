const e = require("express");

// Middleware til at tjekke om bruger er logget ind
function isAuthenticated(req, res, next) {
  if (!req.session.user) {
    return res.redirect('/');
  }
  next();
}

function isAdmin(req, res, next) { 
  if (req.session.user && req.session.user.role_id !== 1) {
    return res.status(403).send('Adgang nægtet');
  }
  next();
}

function isRengUser(req, res, next) {
  // 1️⃣ Først tjek om brugeren overhovedet er logget ind
  if (!req.session.user) {
    return res.redirect('/');
  }

  // 2️⃣ Tjek om brugeren har den rigtige rolle
  if (req.session.user.role_id !== 2) {
    return res.status(403).send('Adgang nægtet');
  }

  next();
}

// Middleware til at redirecte hvis allerede logget ind
function isNotAuthenticated(req, res, next) {
  if (req.session.user && req.session.user.role_id === 1) {
    return res.redirect('/dashboard');
  } else if (req.session.user && req.session.user.role_id === 2) {
    return res.redirect('/serviceplan');
  }
  next();
}

module.exports = {
  isAuthenticated,
  isNotAuthenticated,
  isAdmin,
  isRengUser
};