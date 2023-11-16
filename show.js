

let slides = ["buffet6.jpg","buffet4.jpg","buffet8.jpg"]
/*
console.log(slides[0])
console.log(slides.length)
*/
 
let intervalo = 3000
let indice = 0

show()

function show(){

    document.getElementById("slide").src = (`img/${slides[indice] }`)
    indice++
    if (indice === 3){
        indice = 0
    }
    //**Trocar o slide a cada 3s */
    setTimeout(show, intervalo)
}