import express from "express";
import { getTrendingTv, getTvTrailers, getTvDetails, getSimilarTvs, getTvsByCategory } from "../controllers/tv.controller.js";
const router = express.Router();

router.get("/trending", getTrendingTv);
router.get("/:category", getTvsByCategory);
router.get("/:id/trailers", getTvTrailers);
router.get("/:id/details", getTvDetails);
router.get("/:id/similar", getSimilarTvs);

export default router;