class Todo {
  static runningId = 1;

  constructor(id = Todo.runningId++, description, done = false) {
    this.id = id;
    this.description = description;
    this.done = done;
  }

  getTodo = () => this;
  setDescription = (newDescription) => (this.description = newDescription);
  setDone = (newDone) => (this.done = newDone);
}

export{Todo};
