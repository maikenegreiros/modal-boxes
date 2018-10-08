export default function(menu, button, options = {}) {
    const menuInactiveClass = options.menuInactiveClass || "menu--inactive" 
    const menuActiveClass = options.menuActiveClass || "menu--active"
    const buttonInactiveClass = options.buttonInactiveClass || "button--inactive"
    const buttonActiveClass = options.buttonActiveClass || "button--active"

    menu.classList.add(menuInactiveClass)
    button.classList.add(buttonActiveClass)

    button.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        menu.classList.toggle(menuActiveClass);
        menu.classList.toggle(menuInactiveClass);
        button.classList.toggle(buttonActiveClass);
        button.classList.toggle(buttonInactiveClass);
    })

    document.body.addEventListener('click', () => {
        menu.classList.remove(menuActiveClass);
        menu.classList.add(menuInactiveClass);
        button.classList.add(buttonActiveClass);
        button.classList.remove(buttonInactiveClass);
    })

    menu.addEventListener('click', event => {
        event.stopPropagation();
    })
}
