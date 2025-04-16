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

const taskList = document.querySelector('.tasks-list');
const createTaskForm = document.querySelector('.create-task-block');
const taskNameInput = createTaskForm.querySelector('input[name="taskName"]');



const createTaskItem = (taskId, taskText, completed = false) => {
    const createInputWithLabel = (inputClass, inputType) => {
        const input = document.createElement('input');
        input.className = inputClass;
        input.type = inputType;
        input.id = `task-${taskId}`;
        input.checked = completed;
        
        return input;
    };

    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.dataset.taskId = taskId;

    const taskItemMainContainer = document.createElement('div');
    taskItemMainContainer.className = 'task-item__main-container';

    const taskItemMainContent = document.createElement('div');
    taskItemMainContent.className = 'task-item__main-content';   

    const inputWithLabel = createInputWithLabel('checkbox-form__checkbox', "checkbox");
     
    const form = document.createElement('form');
    form.className = 'checkbox-form';

    const label = document.createElement('label');
    label.htmlFor = `task-${taskId}`;

    const span = document.createElement('span');
    span.className = 'task-item__text';
    span.innerText = taskText;

    const button = document.createElement('button');
    button.className = 'task-item__delete-button default-button delete-button';
    button.dataset.deleteTaskId = taskId;
    button.innerText = 'Удалить';

    form.append(inputWithLabel, label);
    taskItemMainContent.append(form, span);
    taskItemMainContainer.append(taskItemMainContent, button);
    taskItem.append(taskItemMainContainer);

    return taskItem;
};

tasks.forEach((item) => {
    const taskItem = createTaskItem(item.id, item.text, item.completed);
    taskList.append(taskItem);
});

createTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputValue = taskNameInput.value.trim();
    
    
    const newTask = {
        id: Date.now().toString(),
        text: inputValue,
        completed: false
    };

    tasks.push(newTask);
    const taskItem = createTaskItem(newTask.id, newTask.text);
    taskList.append(taskItem);
    
});

