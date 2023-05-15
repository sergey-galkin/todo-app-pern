const identification = (req, res, next) => {
  const user = req.session.user;
  res.send(user);
}

module.exports = identification;