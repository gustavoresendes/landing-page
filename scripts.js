const bar = document.querySelector(".responsive-bar")
const nav = document.querySelector(".nav-menu")

bar.addEventListener('click', () => {
    bar.classList.toggle('active')
    nav.classList.toggle('active')
})