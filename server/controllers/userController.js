//controller for user related operations
//POST: /api/users/regiser

import Resume from "../models/Resume.js";
import User from "../models/User.js";

const generateToken = (userId) => {
  const token = jwt.sign({ id: userId }, process.env.jwtSecret, {
    expiresIn: "7d",
  });
  return token;
};

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Create new user
    const user = new User({ name, email, password });
    await user.save();

    const token = generateToken(user._id);
    user.password = undefined; // Hide password in response

    res
      .status(201)
      .json({ message: "User registered successfully", token, user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//POST: /api/users/login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const token = generateToken(user._id);
    user.password = undefined; // Hide password in response
    res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//controller for getting user by id
//GET: /api/users/data
export const getUserById = async (req, res) => {
  try {
    const userId = req.userId;
    //ceheck if userId is present
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.password = undefined; // Hide password in response
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//controller for getting user resumes
//GET: /api/users/resumes
export const getUserResumes = async (req, res) => {
  try {
    const userId = req.userId;
//return user resumes
const resumes = await Resume.find({ userId });
    res.status(200).json({ resumes });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
