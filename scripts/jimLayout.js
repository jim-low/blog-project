const colorBtnToggle = document.querySelector(".color-toggle-btn")
const colorCodeCont = document.querySelector(".color-box")
let glideIn = true
let angle = 180

colorBtnToggle.addEventListener('click', () => {
	glideIn ? colorCodeCont.style.animation = "glideIn 1s ease-in forwards" : colorCodeCont.style.animation = "glideOut 1s ease-out forwards"
	colorBtnToggle.style.cssText = `transform: rotate(${angle}deg); transition: 1s ease-in;`
	angle += 180
	glideIn = !glideIn
})