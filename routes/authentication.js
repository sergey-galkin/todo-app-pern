const { User } = require("../db/request");

const setAuthChecks = (status) => ({
  login: status,
  role: status,
});

const setSession = (user) => {
  if (user) return {
    login: user.login,
    role: user.role,
  }

  return null;
//   return {
//     login: 'anonymous',
//     role: 'user',
//   }
};

const authentication = async (req, res, next) => {
  const authData = req.body;
  
  let user;
  try {
    user = await User.findUnique({
      where: {login: authData.login},
      select: {login: true, password: true, role: true},
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }

  const status = user && (authData.password === user.password) ? true : false;
  const checks = setAuthChecks(status);
  
  req.session.user = setSession(user);
  
  res.send({status, checks});
}

module.exports = authentication;