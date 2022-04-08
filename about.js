console.log('hello world')

function handleSubmit(evt) {
  evt.preventDefault()

  alert('The form has been submitted')
}

const mouseMeow = (evt) => {
  alert('I like your style')
}

let form = document.querySelector('form#contact')
form.addEventListener('submit', handleSubmit)

let meowImg = document.querySelector('img#meowBieber')
meowImg.addEventListener('mouseover', mouseMeow)
