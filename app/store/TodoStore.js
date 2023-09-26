export class TodoStore {
    // Mon store a besoin de la database pour fonctionner,
    // je la passe en dépendance de mon objet
    constructor(database) {
        this.database = database
    }

    // Je crée ensuite mes méthodes d'abstraction pour
    // manipuler ma base de données
    getAll() {
        return this.database
    }

    getById(id) {
        return this.database.find(todo => todo.id === id)
    }

    addOne(todo) {
        let newTodo = {
            ...todo,
            id: this.database.length + 1
        }
        this.database.push(newTodo)

        return this.database
    }

    deleteOne(id) {
        this.database = this.database.filter(el => el.id !== id)
        return this.database
    }
}
