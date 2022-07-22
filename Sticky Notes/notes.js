const txtInput = document.getElementById('txt')
const newBtn = document.getElementById('button')
const notesDiv = document.getElementById('notes');
const instructions = document.getElementById('instructions')

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    const red = randomInteger(0, 255);
    const green = randomInteger(0, 255);
    const blue = randomInteger(0, 255);
    return `rgb(${red},${green},${blue})`
}

newBtn.onclick = () => {
    const newNote = document.createElement("div")
    newNote.setAttribute("class", "sticky-note")
    const randomColor = `background-color: ${getRandomColor()}`
    newNote.setAttribute("style", randomColor)
    const h2 = document.createElement("h2")
    h2.innerHTML = txtInput.value
    txtInput.value = ''
    newNote.appendChild(h2);
    notesDiv.appendChild(newNote)
}
