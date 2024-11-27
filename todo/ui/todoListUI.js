function showTodoItem(newId, newDescription) {
  const divListTodo = document.getElementById("listTodo");
  const divTodoItem = document.createElement("div");
  divTodoItem.className = "todoItem";
  divTodoItem.id = newId;

  const pDesc = document.createElement("p");
  pDesc.textContent = newDescription;

  const btnNotDone = document.createElement("button");
  btnNotDone.textContent = "Not Done";

  const btnRemove = document.createElement("button");
  btnRemove.textContent = "Remove";

  divTodoItem.append(pDesc, btnNotDone, btnRemove);
  divListTodo.appendChild(divTodoItem);
}

function showNumberOfDone(numberOfDone) {
  const pDone = document.getElementById("done");
  pDone.textContent = `Number of Done: ${numberOfDone}`;
}

function showNumberOfNotDone(numberOfNotDone) {
  const pDone = document.getElementById("notDone");
  pDone.textContent = `Number of Not Done: ${numberOfNotDone}`;
}

export { showTodoItem, showNumberOfDone, showNumberOfNotDone };
