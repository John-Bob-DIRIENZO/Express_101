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
        // Je devrais prendre le temps de valider les données !
        ctx.store.todoStore.addOne(req.body)
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
