import './reset.css';
import './style.css';
import './components/header/header.css';
import './components/side/side.css';
import './components/content/content.css';
import './taskcreator.css';
import './projectcreator.css';

import { createHeader } from './components/header/header';
import { createAside, addProjectListListeners } from './components/side/side';
import { createContent, projects } from './components/content/content';

function initializeMainContainers() {
    createHeader();
    createAside();
    createContent();

    projects.loadProjects(); // Does nothing. No server.
    addProjectListListeners();

    projects.createTask('title', 'description', 'notenote', '6-23-2024', true, false);
    projects.createTask('title2', 'description2', 'notenote', '6-23-2024', true, false);
    projects.createTask('title3', 'description3', 'notenote', '6-23-2024', true, true);
    projects.createTask('title4', 'description5', 'notenote', '6-23-2024', true, false);
}

initializeMainContainers();