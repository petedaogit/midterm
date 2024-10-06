import UserModel from "../models/users.model.js";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../utils/key.js";

const register = async (req, res) => {
  try {
    const { userName, email, age, nationality, education, password } = req.body;

    const checkExistingUser = await UserModel.findOne({
      email: email,
    });

    if (checkExistingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const newUser = { userName, email, age, nationality, education, password };

    const insertNewUser = await UserModel.create(newUser);
    if (!insertNewUser) {
      return res.status(500).json({ error: "Failed to create user" });
    }

    res.status(200).json({
      message: "User created successfully",
      user: insertNewUser,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password!" });
    }

    const validPassword = password == user.password;
    if (!validPassword) {
      return res.status(400).json({ error: "Invalid email or password!" });
    }
    const payload = {
      id: user._id,
      email: user.email,
      userName: user.userName,
    };

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });

    res.json({ message: "Login successful!", token });
  } catch (error) {
    res.status(500).json({ error: "Server error!" });
  }
};

const logout = async () => {
  try {
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
const authController = {
  register,
  login,
  logout,
};

export default authController;
