import express from "express";

const aiRouter = express.Router();

import {
  enhanceJobDescription,
  enhanceProfessionalSummary,
  uploadResume,
} from "../controllers/aiController.js";
import protect from "../middlewares/authMiddleware.js";

aiRouter.post("/enhance-pro-sum", protect, enhanceProfessionalSummary);
aiRouter.post("/enhance-job-desc", protect, enhanceJobDescription);

aiRouter.post("/upload-resume", protect, uploadResume);

export default aiRouter;
