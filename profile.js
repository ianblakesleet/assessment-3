const buttonAlert = (evt) => {
  evt.preventDefault()
  alert(evt.target.textContent + ' ' + evt.target.classList)
}

let colBtn = document.querySelector('button#color')
colBtn.addEventListener('click', buttonAlert)
let placeBtn = document.querySelector('button#place')
placeBtn.addEventListener('click', buttonAlert)
let ritualBtn = document.querySelector('button#ritual')
ritualBtn.addEventListener('click', buttonAlert)
