import User from "../models/UserSchema.model.js";

// import setUser from "../services/auth.js";
import jwtUtils from "../services/auth.js";

async function handelUserSignUp (req, res) {
    const { name, email, password,type} = req.body
    const newUser = await new User({
      name: name,
      email: email,
      password: password,
      type:type,
    });
  
    if (!newUser) {
      return res.status(500).json({ error: 'user not found' })
    }
  
    await newUser.save()
    return res.status(200).json("signupdone")
}
  async function handelUserLogin(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user)
      return res.status(500).json({ error:'user not found'})
   
    const token = jwtUtils.setUser(user);
    res.cookie("uid", token);
    return res.status(200).json("login done token made");
};
async function handelUserLogout(req, res) {
    try {
      // Clear the cookie with the name 'uid'
      res.clearCookie("uid");
  
      // Send response to client
      return res.status(200).json({ message: "Logout successful" });
    } catch (error) {
      return res.status(500).json({ error: "Logout failed" });
    }
  };

export default {
  handelUserSignUp,
  handelUserLogin,
  handelUserLogout
}