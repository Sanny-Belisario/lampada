let body = document.querySelector("body")
let divLampada = document.createElement("div")
let divInterruptor = document.createElement("div")
body.append(divLampada)
body.append(divInterruptor)
//lampada
let imgLampada = document.createElement("img")
imgLampada.src = "./images/lampada-off.jpg"
divLampada.append(imgLampada)
divLampada.id = "lampada"
//interruptor on e off
let imgInterruptor = document.createElement("img")
imgInterruptor.src = "./images/interruptor-off.png"
divInterruptor.append(imgInterruptor)
divInterruptor.id = "interruptor"
imgInterruptor.onclick = function () {
    if (imgInterruptor.src.match(".on")) {
        imgLampada.src = "./images/lampada-off.jpg"
        imgInterruptor.src = "./images/interruptor-off.png"
        body.style = "background-color: #000"
    } else {
        imgLampada.src = "./images/lampada-on.jpg"
        imgInterruptor.src = "./images/interruptor-on.png"
        body.style = "background-color: #FFF"
    }
}
