import express from "express";
import {addTodo, deleteTodo, getAllTodos} from "../../app/controller/api/TodoController.js";

/**
 * @param {express} express
 * @param {Store} store
 * @return {import('express').Router}
 */
export function getTodoRouter(express, store) {
    const apiTodoRouter = express.Router()

    apiTodoRouter
        .route('/')
        .get(getAllTodos(store))
        .post(addTodo(store))

    apiTodoRouter
        .route('/:id(\\d+)')
        .delete(deleteTodo(store))

    return apiTodoRouter
}
