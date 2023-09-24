import express from "express";
import apiUserRouter from "./user.js";
import {getTodoRouter} from "./todo.js";

/**
 * @param {express} express
 * @param database
 * @return {import('express').Router}
 */
export function getApiRouter(express, database) {
    const apiRouter = express.Router()

    apiRouter.use('/user', apiUserRouter)
    apiRouter.use('/todo', getTodoRouter(express, database))

    return apiRouter
}
