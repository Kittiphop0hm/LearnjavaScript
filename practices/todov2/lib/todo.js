class Todo {
     static runningId = 1 

    constructor(desc) {
        this.id = Todo.runningId++
        this.desc = desc
        this.done = false
    }

    getTodo = () => this
    setDescription = (newDesc) => this.desc = newDesc
    setDone = (boolean) => this.done = boolean
}

export { Todo }