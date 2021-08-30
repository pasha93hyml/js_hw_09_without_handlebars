import refs from './js/refs.js'
import './styles.css'
import './images/sprite.svg'


import './js/template.js'
import './js/listeners.js'

setThemeAndCheckbox();

function setThemeAndCheckbox() {
    let checked = localStorage.getItem('checked')
    let theme = localStorage.getItem('theme')

    if(!!checked && theme) {
        refs.body.classList.add(theme)
        refs.checkbox.checked = checked
    }
}
