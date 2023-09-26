/**
 * @param {Store} store
 * @return {import('express').RequestHandler<RouteParameters<Route>>}
 */
export function getAllTodos(store) {
    return async (req, res) => {
        res.json(store.todoStore.getAll())
    }
}

/**
 * @param {Store} store
 * @return {import('express').RequestHandler<RouteParameters<Route>>}
 */
export function addTodo(store) {
    return async (req, res) => {
        // Je devrais prendre le temps de valider les données !
        store.todoStore.addOne(req.body)
        res.json(store.todoStore.getAll())
    }
}

/**
 * @param {Store} store
 * @return {import('express').RequestHandler<RouteParameters<Route>>}
 */
export function deleteTodo(store) {
    return async (req, res) => {
        store.todoStore.deleteOne(parseInt(req.params.id))
        res.json(store.todoStore.getAll())
    }
}
