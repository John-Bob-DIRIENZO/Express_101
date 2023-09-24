import express from "express";
import webUserRouter from "./user.js";
import webProductRouter from "./products.js";

const webRouter = express.Router()

webRouter.use('/user', webUserRouter)
webRouter.use('/product', webProductRouter)

export default webRouter;


