//Everytime the user presses the button, the number goes up by 1.

let button = document.getElementById('button')
let number = document.getElementById('number')

let count = 0

button.addEventListener('click', function () {
  count += 1
  number.innerHTML = count
})

/*const button = document.querySelector('button')
const heading = document.querySelector('h1')
button.addEventListener('click', clickHandler)

function clickHandler() {
  heading.setAttribute('style', 'color.red')
  heading.HTML = "it's going up!"
}
*/
