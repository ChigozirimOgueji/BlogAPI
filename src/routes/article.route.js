import { Router } from "express"
const router = Router();
import ArticleController from "../controllers/article.controller.js"
import validate from "../middlewares/validate.middleware.js";
import { createArticleSchema } from "../schema/article.schema.js";

router.post("/", validate(createArticleSchema), ProductController.createProduct);

router.get("/", ArticleController.getArticles);
router.get("/query", ArticleController.getArticleQuery);
router.get("/allquery", ArticleController.getAllArticleQuery);
router.get("/:id",ArticleController.getArticleById);

router.patch("/:id", ArticleController.updateArticleById);

router.delete("/:id", ArticleController.deleteArticleById);

export default router;