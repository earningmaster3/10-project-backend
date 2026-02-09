import express from "express";
import { createUser } from "../controllers/userController.js";
const router = express.Router();
// Controller function to handle user creation
router.post("/", createUser);

export default router;