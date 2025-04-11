import jwt from "jsonwebtoken";
const secret = 'Ayush@12345a'

function setUser (user) {
  return jwt.sign({ name: user.name, email: user.email ,type:user.type,}, process.env.SECRET)
}

function getUser (token) {
  if (!token) return null
  try {
    return jwt.verify(token, secret)
  } catch (error) {
    return null;
  }
}

export default {
  setUser,
  getUser
}
