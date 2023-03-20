function openClose() {
    const menu = document.querySelector(".mobile-menu-wrapper");
    if (menu.style.display == 'none') {
        menu.style.display = 'flex';
    }
    else {
        menu.style.display = 'none';
    }

    const button = document.querySelector(".nav-toggle");
}

const switcher = document.querySelector('nav-toggle');
switcher.addEventListener("click", openClose);