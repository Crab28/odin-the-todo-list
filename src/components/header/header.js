function createHeader() {
    const header = document.getElementById('header');
    header.innerHTML = `
    <div class="header-content">
        <button type="button" class="btn" id="menu-btn">
            <div class="btn-icon"></div>
        </button>
        <h1>The Big To-Do</h1>
        <label class="switch">
            <input type="checkbox" id="slider-mode">
            <span class="slider round"></span>
        </label>
    </div>`

    addMenuListener();
    addSliderListener();
}

function addMenuListener() {
    const aside = document.getElementById('aside');
    const menuEl = document.getElementById('menu-btn');
    menuEl.addEventListener('click', () => {
        aside.classList.toggle('remove-content');
    });
}

function addSliderListener() {
    const slider = document.getElementById('slider-mode');
    slider.addEventListener('click', () => {
        document.body.classList.toggle('darkmode');
    })
}

export { createHeader }