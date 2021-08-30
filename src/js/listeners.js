import refs from './refs.js'

refs.checkbox.addEventListener('click', event => {
    refs.body.classList.toggle('dark-theme')
    let checked = event.target.checked
    let theme = refs.body.classList;
    localStorage.setItem('theme', theme)
    localStorage.setItem('checked', checked)
})

