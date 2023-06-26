import { refreshProjectList } from "../side/side";

const container = document.getElementById('container');

function refreshProject(project) {
    const projectTitle = document.getElementById('project-title');
    projectTitle.innerHTML = ``;
    const titleEl = document.createElement('h2');
    const hrEl = document.createElement('hr');
    titleEl.textContent = project.title;

    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ``;

    project.tasks.forEach(task => {
        generateTaskContent(task);
    });

    projectTitle.appendChild(titleEl);
    projectTitle.appendChild(hrEl);
}

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

    createAddTaskButtonListener();
}

function createAddTaskButtonListener() {
    const addTask = document.getElementById('add-task-btn');
    addTask.addEventListener('click', () => {
        createTaskCreator();
    });
}

function createProjectCreator() {
    const projectContainer = document.createElement('div');

    projectContainer.id = 'creation-container';
    projectContainer.innerHTML = `
        <div id="project-creation-box">
            <form>
                <label for="title">Project Name</label>
                <input type="text" name="title" id="title">
                <div class="form-buttons">
                    <button type="submit" class="btn submit-btn" id="submit-btn">Create</button>
                    <button type="button" class="btn" id="cancel-btn">Cancel</button>
                </div>
            </form>
        </div>`

    container.appendChild(projectContainer);

    createFormCancelButtonListener(projectContainer);
    const submitBtn = document.getElementById('submit-btn');

    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const titleEl = document.getElementById('title');

        const title = titleEl.value;
       
        if (titleEl.value === '') {
            titleEl.placeholder = 'Please fill out this field!';
        } else {
            projects.createProject(title);
            projectContainer.remove();
        }
    });
}

function createTaskCreator() {
    const taskContainer = document.createElement('div');

    taskContainer.id = 'creation-container';
    taskContainer.innerHTML = `
    <div id="task-creation-box">
        <form>
            <fieldset>
                <legend>New Task</legend>
                <hr>
                <div class="form-item">
                    <label for="title">Title</label>
                    <input type="text" name="title" id="title">
                </div>
                <div class="form-item">
                    <label for="description">Description</label>
                    <textarea name="description" id="description" cols="30" rows="5"></textarea>
                </div>
                <div class="form-item">
                    <label for="duedate">Due Date</label>
                    <input type="date" name="duedate" id="duedate">
                </div>
                <div class="form-item">
                    <label for="notes">Notes</label>
                    <input type="text" name="notes" id="notes">
                </div>
                <div class="form-item">
                    <label for="important">Important</label>
                    <input type="checkbox" name="important" id="important">
                </div>
            </fieldset>
            <hr>
            <div class="form-buttons">
                <button type="submit" class="btn submit-btn" id="submit-btn">Create</button>
                <button type="button" class="btn" id="cancel-btn">Cancel</button>
            </div>
        </form>
    </div>`

    container.appendChild(taskContainer);

    createFormCancelButtonListener(taskContainer);
    const submitBtn = document.getElementById('submit-btn');

    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const titleEl = document.getElementById('title');

        const title = titleEl.value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('duedate').value;
        const notes = document.getElementById('notes').value;
        const important = document.getElementById('important').value;

        if (title === '') {
            titleEl.placeholder = 'Please fill out this field!';
        } else {
            projects.createTask(title, description, notes, dueDate, important);

            taskContainer.remove();
        }
    });
}

function createFormCancelButtonListener(formContainer) {
    const cancelBtn = document.getElementById('cancel-btn');

    cancelBtn.addEventListener('click', () => {
        formContainer.remove();
    });
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
            <ul class="task-buttons-list">
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
    const taskComplete = taskContainer.querySelector('.task-checkbox');

    taskComplete.checked = task.complete;
    createTaskListeners(taskContainer, task);

    taskTitle.appendChild(createTextElement('h5', '', task.title));
    taskNote.appendChild(createTextElement('small', '', task.note));
    taskDue.appendChild(createDateElement(task.duedate));

    taskList.appendChild(taskContainer);
}

function createDescriptionBox(task) {
    const descriptionContainer = document.createElement('div');
    descriptionContainer.id = 'creation-container';

    descriptionContainer.innerHTML = `
    <div id="description-box">
        <h4 id="item-title">Title</h4>
        <hr>
        <p id="item-description">Description</p>
        <hr>
        <time id="item-due">Due: </time>
        <hr>
        <p id="item-note">Note</p>
        <hr>
        <button class="btn" id="desc-back-btn">Back</button>
    </div>`

    container.appendChild(descriptionContainer);
    
    const titleEl = document.getElementById('item-title');
    const descEl = document.getElementById('item-description');
    const timeEl = document.getElementById('item-due');
    const noteEl = document.getElementById('item-note');

    titleEl.textContent = task.title;
    descEl.textContent = task.description;
    timeEl.textContent = 'Due: ' + task.duedate;
    noteEl.textContent = task.note;

    const backBtn = document.getElementById('desc-back-btn');
    backBtn.addEventListener('click', () => {
        descriptionContainer.remove();
    });
}

function createTaskListeners(taskContainer, task) {
    const buttonsArray = taskContainer.querySelectorAll('.task-buttons-list li');
    buttonsArray[0].addEventListener('click', () => {
        createDescriptionBox(task);
    })
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

    let projects = [
        {
            id: 0,
            title: 'Default',
            tasks: []
        }
    ];
    let currentProjectId = projects[0].id;

    const createTask = (title, description, notes, duedate, priority, complete) => {
        let task = new Task(title, description, notes, duedate, priority, complete);
        let tasks = getCurrentProject().tasks;

        generateTaskContent(task);
        tasks.push(task);
    }

    const loadProjects = () => {
        // Load Projects from Server
        // projects = {}
    }

    const setCurrentProject = (projectName) => {
        projects.forEach(project => {
            if (project.title === projectName) {
                currentProjectId = project.id;
                refreshProject(project);
            };
        });
    }

    const createProject = (title) => {
        projects.push({
            id: projects[projects.length - 1].id + 1,
            title: title,
            tasks: []
        });

        refreshProjectList(projects.slice());
    }

    const getCurrentProject = () => {
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].id === currentProjectId) {
                return projects[i];
            }
        }
    }

    return { createTask, createProject, loadProjects, setCurrentProject }

})();

export { projects, createContent, createProjectCreator }