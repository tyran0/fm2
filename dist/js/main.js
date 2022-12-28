if (document.readyState === 'interactive') {
    const header = document.querySelector('.header');
    const navigation = header.querySelector('.navigation');
    const headerNavToggle = header.querySelector('.nav_toggle');

    const buttonIcon = headerNavToggle.querySelector('.image');
    let toggleState = false;
    headerNavToggle.addEventListener('click', () => {
        if (toggleState === false) {
            toggleState = true
            navigation.style.display = 'flex';
            buttonIcon.src = buttonIcon.src.replace('menu.svg', 'menu-close.svg');
        } else {
            toggleState = false
            navigation.style.display = 'none';
            buttonIcon.src = buttonIcon.src.replace('menu-close.svg', 'menu.svg');
        }
    });
}