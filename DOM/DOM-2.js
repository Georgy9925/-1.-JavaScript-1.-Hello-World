const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];

function getTask(body, task) {
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  const form = document.createElement("form");
  const input = document.createElement("input");
  const label = document.createElement("label");
  const span = document.createElement("span");
  const button = document.createElement("button");
  div1.className = "task-item";
  div1.dataset.taskId = task.id;
  div2.className = "task-item__main-container";
  div3.className = "task-item__main-content";
  form.className = "checkbox-form";
  input.className = "checkbox-form__checkbox";
  input.type = "checkbox";
  input.id = "task-" + task.id;
  label.htmlFor = "task-" + task.id;
  span.className = "task-item__text";
  span.innerText = task.text;
  button.className = "task-item__delete-button default-button delete-button";
  button.dataset.deleteTaskId = "5";
  button.textContent = " Удалить ";
  form.append(input, " ", label);
  div3.append(form, " ", span);
  div2.append(div3, " ", button)
  div1.append(div2);

  body.append(div1);
}

for (let task of tasks)
  getTask(document.querySelector(".tasks-list"), task);