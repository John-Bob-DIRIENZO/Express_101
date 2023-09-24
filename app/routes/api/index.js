import express from "express";
import apiUserRouter from "./user.js";

const apiRouter = express.Router()

apiRouter.use('/user', apiUserRouter)

export default apiRouter;
