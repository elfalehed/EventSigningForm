const jwt = require('jsonwebtoken');
const TOKEN_SECRET = 'sqldklfqlqs545';

function userMidalware(req, res, next) {
    console.log(req);
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(401).send('Access Denied');
    try {
      jwt.verify(authHeader, TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
      });
  
    } catch (error) {
      console.log(error);
      return res.status(401).send('Invalid Token');
    }
}

function adminMidalware(req, res, next) {
  console.log(req);
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).send('Access Denied');
  try {
    jwt.verify(authHeader, TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403)
      if (user.type === "admin") {
        req.user = user;
        next();
      } else {
        res.status(401).send('Not Admin: Access Denied');
      }
    });

  } catch (error) {
    console.log(error);
    return res.status(401).send('Invalid Token');
  }
}

module.exports = {
  userMidalware,
  adminMidalware
}