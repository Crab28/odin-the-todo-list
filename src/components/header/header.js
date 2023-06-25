function createHeader() {
    const header = document.getElementById('header');
    header.innerHTML = `
    <div class="header-content">
        <button type="button" class="btn" id="menu-btn">
            <div class="btn-icon"></div>
        </button>
        <h1>The Big To-Do</h1>
        <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
        </label>
    </div>`

    addMenuListener();
}

function addMenuListener() {
    const aside = document.getElementById('aside');
    const menuEl = document.getElementById('menu-btn');
    menuEl.addEventListener('click', () => {
        aside.classList.toggle('remove-content');
    });
}

export { createHeader }