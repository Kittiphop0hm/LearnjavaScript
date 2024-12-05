class Todo {
    static runningId = 1
    constructor(id, description, done) {
        if (!id || !done) {
            this.id = Todo.runningId++  
            this.done = false 
        }
        this.description = description
    }

    getTodo() {
        return `${this.id}, ${this.description}`
    }

    setDescription(newDesc) {
        this.description = newDesc
    }

    setDone() {
        this.done = true
    }
}

export {Todo}