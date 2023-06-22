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
        <div class="aside-block">
            <h3>Projects</h3>
            <hr>
            <ul class="aside-block-list">
                <li>Default</li>
            </ul>
            <button type="button" class="btn">
                <div class="btn-icon"></div>
                <span>Add Project</span>
            </button>
        </div>
    </div>`
}

export { createAside }