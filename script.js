const image = document.querySelector('img')
const  btn = document.querySelector('button')
let lights = true

function lightSwitch() {
    if(lights){
        image.src = 'images/lightsOn.png'
        lights = false
    } else {
        image.src = 'images/lightsOff.png'
        lights = true
    }
}
btn.addEventListener('click', lightSwitch)