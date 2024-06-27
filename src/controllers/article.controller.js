import ArticleService from "../services/article.service.js";

class ArticleController {

    
    async createArticle(req, res) {
        const articleData = req.body;
        const newArticle = await ArticleService.createArticle(articleData);
        res.status(201).send({
            success: true,
            message: "Article uploaded successfully",
            newArticle
        })
    }

    async getArticles(req, res) {
        const articles = await ArticleService.getArticles();
        res.status(200).send({
            success: true,
            articles
        })
    }

    async getArticleQuery(req, res) {
        const articleQuery = req.query;
        const queriedArticle = await ArticleService.getArticle(articleQuery);
        res.status(200).send({
            success: true,
            queriedArticle
        })
    }

    async getAllArticlesQuery(req, res) {
        const allArticles = req.query;
        const articles = await ArticleService.getAllArticles(AllArticles);
        res.status(200).send({
            success: true,
            articles
        })
    }

    async getArticleById(req, res) {
        const id = req.params.id
        const article = await ArticleService.getArticleById(id)
        res.status(200).send({
            success: true,
            article
        })
    }

    async updateArticleById(req, res) {
        const id = req.params.id;
        const data = req.body;
        const article = await ArticleService.updateArticle(id, data)
        res.status(200).send({
            success: true,
            article
        })
    }

    async deleteArticleById(req, res) {
        const id = req.params.id
        const article = await ArticleService.deletArticleById(id)
        res.status(200).send({
            success: true,
            article
        })
    }
}

export default new ArticleController();