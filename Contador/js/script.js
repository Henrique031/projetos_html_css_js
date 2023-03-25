const display =  document.getElementById('display')
const btnIncrement = document.getElementById('increment');
const btnReset = document.getElementById('reset');
const btnDecrement = document.getElementById('decrement');

let valueDisplay = 0
display.innerText = valueDisplay


const addIncrement = () => {
    valueDisplay++
    display.innerText = valueDisplay
    console.log(valueDisplay)
}

const reset = () => {
    valueDisplay = 0
    display.innerText = valueDisplay
}

const addDecrement = () => {
    valueDisplay--
    display.innerText = valueDisplay
}

btnIncrement.addEventListener('click', () => addIncrement())
btnReset.addEventListener('click', () => reset())
btnDecrement.addEventListener('click', () => addDecrement())