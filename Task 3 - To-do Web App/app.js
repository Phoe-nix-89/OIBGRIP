const form = document.querySelector("#form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const task = taskInput.value;

  const li = document.createElement("li");
  li.innerHTML = task;
  taskList.appendChild(li);
});
