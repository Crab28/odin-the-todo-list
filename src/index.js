import './reset.css';
import './style.css';
import './components/header/header.css';
import './components/side/side.css';

import { createHeader } from './components/header/header';
import { createAside } from './components/side/side';

function initializeMainContainers() {
    createHeader();
    createAside();
}

initializeMainContainers();