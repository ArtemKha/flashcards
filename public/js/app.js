const button = document.querySelector('#hintButton')
const hint = document.querySelector('.hint')

button && button.addEventListener('click', () => {
  button.style.display = 'none'
  hint.style.display = 'block'
})