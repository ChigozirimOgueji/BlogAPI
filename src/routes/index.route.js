import { Router } from "express"
const router = Router();
import articleRouter from "./article.route.js";
import authRouter from "./auth.route.js";

router.use("/api/articles", articleRouter);
router.use("/api/auth", authRouter);

export default router;