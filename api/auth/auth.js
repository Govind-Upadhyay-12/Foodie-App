import express from "express";
const router = express.Router();
import User from "../models/User.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
  var secretkey="priya"
router.post("/register", async (req, res) => {
    console.log(req.body);
    try {
      const { name, email, password } = req.body;
  
  
      const FindEmail = await User.findOne({ email });
  
      const hashedPassword = await bcryptjs.hashSync(password, 10);

      if (FindEmail && FindEmail.length > 0) {
        return res.status(400).send({ message: "User already exists in the database" });
      } else {
        const NewUser = new User({
          name,
          email,
          password: hashedPassword,
        });
  
        await NewUser.save();
  
        return res.status(200).send({ message: "User created successfully" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: "Internal server error", error });
    }
  });

  router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(500).send({ message: 'User Not Exist' });
      } else {
        const passwordValid = bcryptjs.compareSync(password, user.password);
  
        if (!passwordValid) {
          return res.status(400).send({ message: 'Password is invalid' });
        } else {
          const token = jwt.sign({ id: user._id }, secretkey);
          return res.status(200).send({
            token,
            user,
          });
        }
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: 'Internal Server Error' });
    }
  });
  
  export default router;