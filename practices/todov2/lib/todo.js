class Todo {
     static runningId = 1 

    constructor(id = Todo.runningId++, desc, done = false) {
        this.id = id
        this.desc = desc
        this.done = done
    }

    getTodo = () => this
    setDescription = (newDesc) => this.desc = newDesc
    setDone = (boolean) => this.done = boolean
}

export { Todo }