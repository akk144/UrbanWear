exports.login = function (req, res) {
  res.render('login', {
    message: req.flash('loginMessage')
  });
}

exports.profile = function (req, res) {
  res.render('profile.ejs', {
    user: req.user
  });
}

exports.logout = function (req, res) {
  req.logout();
  res.redirect('/');
}

exports.listUsers = function (req, res) {
  models.User.find(function (err, data) {
    res.render('admin/list_users', {
      users: data
    });
  })
}