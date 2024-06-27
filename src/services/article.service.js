import ArticleModel from "../models/article.model.js";

// MODEL => SERVICE => CONTROLLER => ROUTE => APP.JS

class ArticleService {
    // creates a new article
    async createArticle(article) {
        const newArticle = await ArticleModel.create(article);
        return newArticle;
    }

    // return all articles
    async getArticles() {
        const articles = await ArticleModel.find();
        return articles;
    }

    // returns an article that matches a query
    async getArticle(query) {
        const article = await ArticleModel.findOne(query);
        return article;
    }

    // returns all articles that matches a query
    async getAllArticles(query) {
        const allArticles = await ArticleModel.find(query)
        return allArticles
    }

    // find an article that matches an id
    async getArticleById(id) {
        const article = await ArticleModel.findById(id)
        return article;
    }

    // finds an article by id and updates it
    async updateArticle(id, data) {
        const updatedArticle = await ArticleModel.findByIdAndUpdate(id, data, { new: true })
        return updatedArticle;
    }

    // find an article by id and deletes it
    async deletArticleById(id) {
        const deletedArticle = await ArticleModel.findByIdAndDelete(id)
        return deletedArticle;
    }
}

export default new ArticleService();