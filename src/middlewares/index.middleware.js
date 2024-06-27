import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { json } from "express";
import { configDotenv } from "dotenv";
import indexRoute from "../routes/index.route.js"

export default (app) => {
    if (process.env.NODE_ENV !== 'production') configDotenv();

    //logging middleware
    app.use(morgan());

    //cors middleware
    app.use(cors());

    //security middleware
    app.use(helmet());

    app.use(json());
    app.use(cookieParser());

    app.use(indexRoute)
}