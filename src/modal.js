export default function(menu, button, options = {}) {
    const buttonClose = options.buttonClose || null
    const menuInactiveClass = options.menuInactiveClass || "box--inactive" 
    const menuActiveClass = options.menuActiveClass || "box--active"
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
  
    if (buttonClose) {
        buttonClose.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            close();
        })
    }
  
    document.body.addEventListener('click', () => {
        close();
    })

    document.addEventListener("keyup", event => {
        if (event.which === 27) {
            close()
        }
    })
  
    menu.addEventListener('click', event => {
        event.stopPropagation();
    })

    function close() {
        menu.classList.remove(menuActiveClass);
        menu.classList.add(menuInactiveClass);
        button.classList.add(buttonActiveClass);
        button.classList.remove(buttonInactiveClass);
    }
  }
  