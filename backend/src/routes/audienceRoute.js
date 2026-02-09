import express from "express";
import { allAudience } from "../controllers/audienceController.js"

const router = express.Router();

router.get("/", allAudience);

export default router;