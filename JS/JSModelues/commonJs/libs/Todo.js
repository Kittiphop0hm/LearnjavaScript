class Todo {
    static id = 1
    constructor(desc) {
        this.id = Todo.id++
        this.desc = desc
    }

    getTodo = () => {
        return {id:this.id, desc:this.desc}
    }

    setDescription = (desc) => {
        this.desc = desc
    }
}

const todo1 = new Todo("Hello Java")
const todo2 = new Todo("Hello JS")
console.log(todo1.getTodo());
console.log(todo2.getTodo());