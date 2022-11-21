//-------------------EventListener-----------------

//document.addEventListener('click', () =>{
  //  console.log("Hola, coders")
//})
//-------------------EventListener-----------------

//-------------------Contador---------------------------
let botonSuma = document.getElementById('boton-suma')
let botonResta = document.getElementById('boton-resta')
let contador = document.getElementById('contador')

valorInicial = 0

const countAdd = () => {
    contador.innerHTML = valorInicial += 1    
    console.log(valorInicial)
}
const countSubstract = () => {
    contador.innerHTML = valorInicial -= 1
    
}

botonSuma.addEventListener('click', () => {
        countAdd();
} )

botonResta.addEventListener('click', () => {
    countSubstract()
})

//-------------------Contador---------------------------
//-----------------Cambiar color------------------------
let botonRojo = document.getElementById('boton-cambiar-rojo')
let botonVerde = document.getElementById('boton-cambiar-verde')
let color = document.getElementById('color')

const handleColorRojo = () => {

    let result = color === 'Verde' ? 'Verde' : 'Rojo'
    console.log(result)
    color.innerHTML = result

}
const handleColorVerde = () => {

    let result = color === 'Rojo' ? 'Rojo' : 'Verde'
    console.log(result)
    color.innerHTML = result

}


botonRojo.addEventListener('click', () => {
    handleColorRojo()
})
botonVerde.addEventListener('click', () => {
    handleColorVerde()
})

//-----------------Cambiar color------------------------

let cuadro = document.getElementById('cuadro-amarillo')
let botonRosa = document.getElementById('boton-color-cuadro-rosa')
let botonAmarillo = document.getElementById('boton-color-cuadro-amarillo')

const handleColorSquarePink = () => {
    if(cuadro.className === 'cuadro-amarillo'){
        cuadro.classList.replace('cuadro-amarillo', 'cuadro-rosa')
    }
}
const handleColorSquareYellow = () => {
    if(cuadro.className === 'cuadro-rosa'){
        cuadro.classList.replace('cuadro-rosa', 'cuadro-amarillo')
    }
}

botonRosa.addEventListener('click', () => {
    handleColorSquarePink();
})
botonAmarillo.addEventListener('click', () => {
    handleColorSquareYellow();
})
//-----------------Cambiar color------------------------

