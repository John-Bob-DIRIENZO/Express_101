/**
 * @param todos
 * @return {import('express').RequestHandler<RouteParameters<Route>>}
 */
export function getAllTodos(todos) {
    return async (req, res) => {
        res.json(todos)
    }
}

/**
 * @param todos
 * @return {import('express').RequestHandler<RouteParameters<Route>>}
 */
export function addTodo(todos) {
    return async (req, res) => {
        todos.push({
            id: 4,
            title: "dormir",
            completed: false
        })

        res.json(todos)
    }
}
