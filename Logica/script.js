
var figura = prompt('Que figura deseas 1.Cuadrado 2.Rectangulo 3.Triangulo')
console.log(figura)

var calculo = prompt('Que quieres calcular: 1.Area 2.Perimetro')
console.log(calculo)


if(figura==1 && calculo==1){
    var ladoCuadrado = prompt('Ingresa la base de cuadrado en cm: ')
    console.log(ladoCuadrado)
    AreaCuadrado(ladoCuadrado)
}

if(figura==1 && calculo==2){
    var ladoCuadrado = prompt('Ingresa la base de cuadrado en cm: ')
    console.log(ladoCuadrado)
    perimetroCuadrado(ladoCuadrado)
}

if(figura==2 && calculo==1){
    var alturaR = prompt('Ingresa la altura de tu rectangulo en cm: ')
    console.log(alturaR )   
    var baseR = prompt('Ingresa la base de tu rectangulo en cm: ')
    console.log(baseT )

    AreaRectangulo(baseR,alturaR)
}

if(figura==2 && calculo==2){
    var alturaR = prompt('Ingresa la altura de tu rectangulo en cm: ')
    console.log(alturaR )   
    var baseR = prompt('Ingresa la base de tu rectangulo en cm: ')
    console.log(baseT )
    perimetroRectangulo(baseR,alturaR)
}

if(figura==3 && calculo==1){

    var ladoT = prompt('Ingresa el lado de tu triangulo en cm: ')
    console.log(ladoT )  
    var baseT = prompt('Ingresa la base de tu triangulo en cm: ')
    console.log(baseT )
    AreaTriangulo(baseT,ladoT)
}

if(figura==3 && calculo==2){
    var ladoT = prompt('Ingresa el lado de tu triangulo en cm: ')
    console.log(ladoT )
    var baseT = prompt('Ingresa la base de tu triangulo en cm: ')
    console.log(baseT )
    perimetroTriangulo(baseT,ladoT)
}




function AreaCuadrado(ladoCuadrado) {
    console.log(' El area del cuadrado es: '+ladoCuadrado*ladoCuadrado)
}
function perimetroCuadrado(ladoCuadrado) {
    console.log(' El perimetro del cuadrado es: '+ 4*ladoCuadrado)
}

function AreaRectangulo(baseR,alturaR) {
    console.log(' El area del rectangulo es: '+ baseR*alturaR)
}

function perimetroRectangulo(baseR,alturaR) {
    console.log(' El perimetro del rectangulo es: '+ 2(baseR+alturaR))
}

function AreaTriangulo(baseT,ladoT) {
    console.log(' El area del rectangulo es: '+ (baseT*ladoT)/2)
}

function perimetroTriangulo(baseT,ladoT) {
    console.log(' El perimetro del rectangulo es: '+ (ladoT*2)+baseT)
}