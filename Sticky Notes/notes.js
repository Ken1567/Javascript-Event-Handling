// Get access to the elements
// With these, we can now perform on them
const txtInput = document.getElementById('txt')
const newBtn = document.getElementById('button')
const notesDiv = document.getElementById('notes');
const instructions = document.getElementById('instructions')

// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper function 
function getRandomColor() {
    const red = randomInteger(0, 255);
    const green = randomInteger(0, 255);
    const blue = randomInteger(0, 255);
    return `rgb(${red},${green},${blue})`
}

// Create an even handler for button onclick
newBtn.onclick = () => {
    // Create the new sticky note div container
    const newNote = document.createElement("div")
    // Give it a sticky-note class
    newNote.setAttribute("class", "sticky-note")
    // Add a random background
    const randomColor = `background-color: ${getRandomColor()}`// Kailangan natin igenerate mamaya
    newNote.setAttribute("style", randomColor)
    // Set the h2
    const h2 = document.createElement("h2")
    h2.innerHTML = txtInput.value
    // erase the content of the text box
    txtInput.value = ''
    // append the elements into the html
    newNote.appendChild(h2);
    notesDiv.appendChild(newNote)
}