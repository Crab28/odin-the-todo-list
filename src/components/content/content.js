function createContent() {
    const main = document.getElementById('main');
    main.innerHTML = `
    <div class="main-content">
        <div id="project-title">
            <h2>Default</h2>
            <hr>
        </div>
        <div class="task-header">
            <h4>Title</h4>
            <h4>Note</h4>
            <h4>Due</h4>
        </div>
        <ul class="task-list" id="task-list">
        </ul>
        <button class="btn" id="add-task-btn">Add Task</button>
    </div>`
}

function createDateElement(date) {
    const newDate = document.createElement('time');
    newDate.dateTime = date;
    newDate.textContent = date;

    return newDate;
}

function createTextElement(el, classname, text) {
    const newEl = document.createElement('li');
    newEl.classList.add('task-container');
    newEl.textContent = text;

    return newEl;
}

function createElement(el, className) {
    const newEl = document.createElement('li');
    newEl.classList.add('task-container');

    return newEl;
}

function generateTaskContent(task) {
    const taskList = document.getElementById('task-list');
    const taskContainer = createElement('li', 'task-container');

    taskContainer.innerHTML = `
    <input type="checkbox" name="task-checkbox" class="task-checkbox">
    <div class="task-box">
        <div class="task-title">
        </div>
        <div class="task-note">
        </div>
        <div class="task-due">
        </div>
        <div class="task-buttons">
            <ul>
                <li><button class="btn"><div class="btn-icon btn-view"></div></button></li>
                <li><button class="btn"><div class="btn-icon btn-edit"></div></button></li>
                <li><button class="btn"><div class="btn-icon btn-trash"></div></button></li>
                <li><button class="btn"><div class="btn-icon btn-important"></div></button></li>
            </ul>
        </div>
    </div>`

    const taskTitle = taskContainer.querySelector('.task-title');
    const taskNote = taskContainer.querySelector('.task-note');
    const taskDue = taskContainer.querySelector('.task-due');

    taskTitle.appendChild(createTextElement('h5', '', task.title));
    taskNote.appendChild(createTextElement('small', '', task.note));
    taskDue.appendChild(createDateElement(task.duedate));

    taskList.appendChild(taskContainer);
}

class Task {
    constructor(title, description, note, duedate, priority, complete ) {
        this.title = title;
        this.description = description;
        this.note = note;
        this. duedate = duedate;
        this.priority = priority;
        this.complete = complete;
    }
}

const projects = (() => {

    let currentProject = 0;
    let projects = [
        {
            id: 0,
            title: 'Default',
            tasks: []
        }
    ];

    const createTask = (title, description, note, duedate, priority) => {
        let task = new Task(title, description, note, duedate, priority);
        let tasks = projects[currentProject].tasks;

        generateTaskContent(task);
        tasks.push(task);
    }

    return { createTask }

})();

export { projects, createContent }