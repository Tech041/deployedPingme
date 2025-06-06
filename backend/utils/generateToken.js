import jwt from "jsonwebtoken";
const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("token", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    // To prevent access of cookie from Javascript(cross site scripting attacks) we use httpOnly
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });
};
export default generateToken;
