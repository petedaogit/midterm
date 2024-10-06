import ExperienceModel from "../models/experience.model.js";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../utils/key.js";
import authorizationToken from "../middleware/auth.middleware.js";

const createExpProfile = async (req, res) => {
  try {
    const { title, status, duration, compName } = req.body;

    const newExpProfile = new ExperienceModel({
      userId: req.user.id,
      title,
      status,
      duration,
      compName,
    });
    await newExpProfile.save();

    res.status(200).json({ message: "Created successfully", newExpProfile });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const getExpProfile = async (req, res) => {
  try {
    const profiles = await ExperienceModel.find({ userId: req.user.id });
    res.status(200).json({ profiles });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const editExpProfile = () => {
  console.log("editing");
};

const expController = {
  createExpProfile,
  getExpProfile,
  editExpProfile,
};
export default expController;
