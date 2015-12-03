exports.isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}

exports.adminAccess = function(req, res, next) {
  var user = req.isAuthenticated();
  if(req.isAuthenticated(), req.user.role === 'admin') {
    return next();
  }
  res.redirect('/');
}