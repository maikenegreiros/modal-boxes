# Modal Boxes

If your modal box is both opened and closed by the same button, you can do like the example below

```js
import ModalBoxes from 'modal-boxes'

const menu = document.querySelector('.menu')
const btMenu = document.querySelector('.bt-menu')
ModalBoxes(menu, btMenu)
```

Instead, if your modal box have one button to open and another to close, you must do like that

```js
import ModalBoxes from 'modal-boxes'

const menu = document.querySelector('.menu')
const buttonOpenMenu = document.querySelector('.bt-menu')
const buttonCloseMenu = document.querySelector('.bt-close-menu')
const options = {
    buttonClose: buttonCloseMenu
}
ModalBoxes(menu, btMenu, option)
```

if you want to assign some custom css class to the button or the modal box, you can do as follows

```js
import ModalBoxes from 'modal-boxes'

const menu = document.querySelector('.menu')
const btMenu = document.querySelector('.bt-menu')
const options = {
    menuActiveClass: "my-css-class",
    menuInactiveClass: "my-other-css-class",
    buttonActiveClass: "another-css-class",
    buttonInactiveClass: "again-another-css-class"
}
ModalBoxes(menu, btMenu, options)
```
