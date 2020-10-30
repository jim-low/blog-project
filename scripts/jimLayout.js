const colorBtnToggle = document.querySelector(".color-toggle-btn")
const colorCodeCont = document.querySelector(".color-box")
let glideIn = true
let angle = 180
let query = window.matchMedia("(max-width: 768px)")

colorBtnToggle.addEventListener('click', () => {
	glideIn ? colorCodeCont.style.animation = "glideIn 1s linear forwards" : colorCodeCont.style.animation = "glideOut 1s linear forwards"
	colorBtnToggle.style.cssText = `transform: rotate(${angle}deg); transition: 1s ease-in;`
	angle += 180
	glideIn = !glideIn
})

const setColorContState = () => {
	if(query.matches) {
		colorCodeCont.style.cssText = ""
	}else {
		colorBtnToggle.style.animation = "rotate(0deg)"
		colorCodeCont.style.cssText = "top: 5%; left: 1.25%; width: 20%;"
	}
}

query.addEventListener('change', setColorContState)