const jwt = require("jsonwebtoken");
const JWT_SECRET = "RAAGS";


const fetchuser = (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    res.status(401).json("You are not authenticated...!")
  }

  try {

    const data = jwt.verify(token, JWT_SECRET);
    // console.log(data)
    req.user = data.id;
    next();
    
  } catch (error) {
    res.status(401).json("You are not authenticated...!")
  }
};


module.exports = fetchuser;