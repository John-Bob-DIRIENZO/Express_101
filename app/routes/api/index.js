import express from "express";
import apiUserRouter from "./user.js";
import {getTodoRouter} from "./todo.js";

/**
 * @param {express} express
 * @param {Context} ctx
 * @return {import('express').Router}
 */
export function getApiRouter(express, ctx) {
    const apiRouter = express.Router()

    // avant
    apiRouter.use('/user', apiUserRouter)

    // après
    apiRouter.use('/todo', getTodoRouter(express, ctx))

    return apiRouter
}
