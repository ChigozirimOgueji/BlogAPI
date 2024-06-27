import express from 'express';
import connectToMongodb from "./configs/database.config.js";

const app = express();

import indexMiddleware from "./middlewares/index.middleware.js";


indexMiddleware(app);

app.listen(3000, ()=>{
    console.log("listening on port 3000");
})