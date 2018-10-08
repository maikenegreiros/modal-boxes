#Modal Boxes

```js
import ModalBoxes from 'modal-boxes'

const menu = document.querySelector('.menu')
const btMenu = document.querySelector('.bt-menu')
ModalBoxes(menu, btMenu)
```

if you want to assign some custom css class to the button or the modal box, you can do as follows

```js
const menu = document.querySelector('.menu')
const btMenu = document.querySelector('.bt-menu')
const options = {
    menuActiveClass: "my-css-class",
    menuInactiveClass: "my-other-css-class",
    buttonActiveClass: "another-css-class",
    buttonInactiveClass: "again-another-css-class"
}
Menu(menu, btMenu, options)
```
