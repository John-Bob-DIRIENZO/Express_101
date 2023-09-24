import express from "express";
import {addTodo, getAllTodos} from "../../app/controller/api/TodoController.js";

/**
 * @param {express} express
 * @param database
 * @return {import('express').Router}
 */
export function getTodoRouter(express, database) {
    const apiTodoRouter = express.Router()

    apiTodoRouter
        .route('/')
        .get(getAllTodos(database))
        .post(addTodo(database))

    return apiTodoRouter
}
