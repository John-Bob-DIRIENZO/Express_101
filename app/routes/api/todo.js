import express from "express";
import {addTodo, deleteTodo, getAllTodos} from "../../app/controller/api/TodoController.js";
import {todoSchema} from "../../app/model/Todo.js";
import {validate} from "../../app/middleware/validator.js";

/**
 * @param {express} express
 * @param {Context} ctx
 * @return {import('express').Router}
 */
export function getTodoRouter(express, ctx) {
    const apiTodoRouter = express.Router()

    apiTodoRouter
        .route('/')
        .get(getAllTodos(ctx))
        // Mon nouveau middleware
        .post(validate(todoSchema), addTodo(ctx))

    apiTodoRouter
        .route('/:id(\\d+)')
        .delete(deleteTodo(ctx))

    return apiTodoRouter
}

