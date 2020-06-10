let toggleDarkMode = document.getElementsByClassName('dark-mode')[0];

toggleDarkMode.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle("dark-mode");
});