import { createProjectCreator, projects } from "../content/content";

function createAside() {
    const aside = document.getElementById('aside');
    aside.innerHTML = `
    <div class="aside-content">
        <div class="aside-block">
            <h3>Main</h3>
            <hr>
            <ul class="aside-block-list">
                <li>All Tasks</li>
                <li>Today</li>
                <li>Weekly</li>
                <li>Important</li>
            </ul>
        </div>
        <div class="aside-block" id="project-aside-block">
            <h3>Projects</h3>
            <hr>
            <ul class="aside-block-list" id="project-list">
                <li class="project-list-item">Default</li>
            </ul>
            <button type="button" class="btn" id="project-btn">
                <div class="btn-icon"></div>
                <span>Add Project</span>
            </button>
        </div>
    </div>`

    createAddProjectListener();
}

function createAddProjectListener() {
    const projectBtn = document.getElementById('project-btn');

    projectBtn.addEventListener('click', () => {
        createProjectCreator();
    });
}

function refreshProjectList(projects) {
    const projectList = document.getElementById('project-list');

    projectList.innerHTML = '';
    
    projects.forEach(project => {
        const listEl = document.createElement('li');
        listEl.classList.add('project-list-item');

        listEl.textContent = project.title;

        projectList.appendChild(listEl);
    });

    addProjectListListeners();
}

function addProjectListListeners() {
    const projectList = document.getElementsByClassName('project-list-item');
    
    for (let i = 0; i < projectList.length; i++) {
        projectList[i].addEventListener('click', () => {
            projects.setCurrentProject(projectList[i].textContent);
        });
    }
}

export { createAside, refreshProjectList, addProjectListListeners }