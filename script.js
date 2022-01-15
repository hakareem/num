const inputfield = document.getElementById('inputfield')
const userGuess = document.getElementById('inputsubmit')
const result = document.getElementById('result')

const random = Math.floor(Math.random() * 10)

userGuess.addEventListener('click', function () {
    const inputvalue = inputfield.value
    const input = parseInt(inputvalue)
    if ( random === input ) {
        result.innerText = "Correct answer"
    } else if( random < input) {
     result.innerText = "lower"
    }else if( random > input) {
     result.innerText = "higher"
    }
    else {
        result.innerText = "Wrong answer, Guess Again!"
    }
})