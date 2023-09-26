import {TodoStore} from "./TodoStore.js";

export class Store {
    constructor(database) {
        // Mon store principal est l'ensemble de tous
        // mes sous-stores
        this.todoStore = new TodoStore(database)
    }
}
