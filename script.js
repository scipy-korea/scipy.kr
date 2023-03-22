function openClose() {
    const menu = document.querySelector(".mobile-menu-wrapper");
    if (menu.style.display == 'flex') {
        menu.style.display = 'none';
    }
    else {
        menu.style.display = 'flex';
    }

    const button = document.querySelector(".nav-toggle");
}

const switcher = document.querySelector('nav-toggle');
switcher.addEventListener("click", openClose);