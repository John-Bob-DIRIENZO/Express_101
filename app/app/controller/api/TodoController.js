import {checkSchema, matchedData, validationResult} from "express-validator";
import {todoSchema} from "../../model/Todo.js";

/**
 * @param {Context} ctx
 * @return {import('express').RequestHandler<RouteParameters<Route>>}
 */
export function getAllTodos(ctx) {
    return async (req, res) => {
        res.json(ctx.store.todoStore.getAll())
    }
}

/**
 * @param {Context} ctx
 * @return {import('express').RequestHandler<RouteParameters<Route>>}
 */
export function addTodo(ctx) {
    return async (req, res) => {
        // Je peux toujours récupérer les données
        // nettoyées
        const newTodo = matchedData(req)

        ctx.store.todoStore.addOne(newTodo)
        res.json(ctx.store.todoStore.getAll())
    }
}

/**
 * @param {Context} ctx
 * @return {import('express').RequestHandler<RouteParameters<Route>>}
 */
export function deleteTodo(ctx) {
    return async (req, res) => {
        ctx.store.todoStore.deleteOne(parseInt(req.params.id))
        res.json(ctx.store.todoStore.getAll())
    }
}
