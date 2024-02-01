const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['red', 'yellow', 'blue', 'parrot', 'green', 'purple', 'pink', 'brown', 'orange ']

body.style.backgroundColor = 'aqua'

button.addEventListener('click', changeB)

function changeB() {
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
}

