import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(400).json({ message: "Use doen not have token" });
    }

    const verifyToken = jwt.verify(token,process.env.JWT_SECRET)
    if(!verifyToken) {
        return res.status(400).json({ message: "user does not have valid token" });
    }

    req.userId = verifyToken.userId;
    next();
  } catch (error) {
    console.error("isAuth error:", error.message);
    return res.status(401).json({ message: "Unauthorized: " + error.message });
  }
};

export default isAuth;
