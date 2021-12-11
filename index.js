const menu = document.querySelector('#menu')
const menuLinks = document.querySelector('.mobile-links')

menu.addEventListener('click', () => {
  menuLinks.classList.toggle('hidden')
})

window.addEventListener('resize', () => {
  console.log()
  if (!menuLinks.classList.contains('hidden')) {
    menuLinks.classList.toggle('hidden')
  }
})
