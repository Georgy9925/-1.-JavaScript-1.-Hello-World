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

// Создаем модальное окно
const modalOverlay = document.createElement('div');
modalOverlay.className = 'modal-overlay modal-overlay_hidden';

const deleteModal = document.createElement('div');
deleteModal.className = 'delete-modal';

const modalQuestion = document.createElement('h3');
modalQuestion.className = 'delete-modal__question';
modalQuestion.textContent = 'Вы действительно хотите удалить эту задачу?';

const modalButtons = document.createElement('div');
modalButtons.className = 'delete-modal__buttons';

const cancelButton = document.createElement('button');
cancelButton.className = 'delete-modal__button delete-modal__cancel-button';
cancelButton.textContent = 'Отмена';

const confirmButton = document.createElement('button');
confirmButton.className = 'delete-modal__button delete-modal__confirm-button';
confirmButton.textContent = 'Удалить';

modalButtons.append(cancelButton, confirmButton);
deleteModal.append(modalQuestion, modalButtons);
modalOverlay.append(deleteModal);
document.body.append(modalOverlay);

// Функция создания элемента задачи
const createTaskItem = (taskId, taskText, completed = false) => {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.dataset.taskId = taskId;

    const taskItemMainContainer = document.createElement('div');
    taskItemMainContainer.className = 'task-item__main-container';

    const taskItemMainContent = document.createElement('div');
    taskItemMainContent.className = 'task-item__main-content';

    const form = document.createElement('form');
    form.className = 'checkbox-form';

    const input = document.createElement('input');
    input.className = 'checkbox-form__checkbox';
    input.type = 'checkbox';
    input.id = `task-${taskId}`;
    input.checked = completed;

    const label = document.createElement('label');
    label.htmlFor = `task-${taskId}`;

    const span = document.createElement('span');
    span.className = 'task-item__text';
    span.textContent = taskText;

    const button = document.createElement('button');
    button.className = 'task-item__delete-button default-button delete-button';
    button.dataset.deleteTaskId = taskId;
    button.textContent = 'Удалить';

    form.append(input, label);
    taskItemMainContent.append(form, span);
    taskItemMainContainer.append(taskItemMainContent, button);
    taskItem.append(taskItemMainContainer);

    return taskItem;
};

// Инициализация списка задач
tasks.forEach((task) => {
    const taskItem = createTaskItem(task.id, task.text, task.completed);
    taskList.append(taskItem);
});

// Обработчик добавления новой задачи
createTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputValue = taskNameInput.value.trim();
    
    if (!inputValue) {
        alert('Название задачи не должно быть пустым');
        return;
    }

    if (tasks.some(task => task.text === inputValue)) {
        alert('Задача с таким названием уже существует.');
        return;
    }

    const newTask = {
        id: Date.now().toString(),
        text: inputValue,
        completed: false
    };

    tasks.push(newTask);
    const taskItem = createTaskItem(newTask.id, newTask.text);
    taskList.append(taskItem);
    taskNameInput.value = '';
});

// Управление модальным окном
let currentTaskIdToDelete = null;

// Открытие модального окна при клике на удаление
taskList.addEventListener('click', (event) => {
    const deleteButton = event.target.closest('.task-item__delete-button');
    if (!deleteButton) return;
    
    event.preventDefault();
    currentTaskIdToDelete = deleteButton.dataset.deleteTaskId;
    modalOverlay.classList.remove('modal-overlay_hidden');
});

// Функция для закрытия модального окна
const closeModal = () => {
    modalOverlay.classList.add('modal-overlay_hidden');
    currentTaskIdToDelete = null;
};

// Обработчики кнопок модального окна
cancelButton.addEventListener('click', closeModal);
confirmButton.addEventListener('click', () => {
    if (currentTaskIdToDelete) {
        // Удаление из массива
        const taskIndex = tasks.findIndex(task => task.id === currentTaskIdToDelete);
        if (taskIndex !== -1) {
            tasks.splice(taskIndex, 1);
        }
        
        // Удаление из DOM
        const taskElement = document.querySelector(`.task-item[data-task-id="${currentTaskIdToDelete}"]`);
        if (taskElement) {
            taskElement.remove();
        }
        
        closeModal();
    }
});

// Закрытие при клике на overlay
modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        closeModal();
    }
});


// Реализация смены темы
let isDarkTheme = false;

const toggleTheme = () => {
    isDarkTheme = !isDarkTheme;
    
    // Изменяем стиль body
    document.body.style.background = isDarkTheme ? '#24292E' : 'initial';
    
    // Изменяем стили для всех задач
    const taskItems = document.querySelectorAll('.task-item');
    taskItems.forEach(item => {
        item.style.color = isDarkTheme ? '#ffffff' : 'initial';
    });
    
    // Изменяем стили для всех кнопок
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.border = isDarkTheme ? '1px solid #ffffff' : 'none';
    });
};

// Обработчик нажатия клавиши Tab
document.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
        event.preventDefault();
        toggleTheme();
    }
});