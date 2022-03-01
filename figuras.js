//Codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados cuadrado miden: "+ ladoCuadrado +" cm");

function perimetroCuadrado(lado){
    return lado*4; 
} 


function areaCuadrado(lado){
    return lado*lado;
}
//console.log("El area del cuadrado mide: "+ areaCuadrado +" cm^2");
console.groupEnd();

//Codigo del triangulo
/*console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo= 4;
const alturaTriangulo=5.5;

console.log(
    "Los lados del triangulo miden: "
    + ladoTriangulo1 
    +" cm, "
    + ladoTriangulo2 
    +" cm, "
    + baseTriangulo
    +" cm"
    );


    console.log("La altura del triangulo es de: " + alturaTriangulo+ "cm");*/

    function perimetroTriangulo(lado1, lado2, base){
        return lado1 + lado2 + base;

    }
    //console.log("El perimetro del triangulo mide: "+ perimetroTriangulo +" cm");

    function  areaTriangulo(base, altura){
        return (base * altura)/2;
    }
    //console.log("El area del triangulo mide: "+ areaTriangulo +" cm^2");

    console.groupEnd();

    //Codigo del circulos
console.group("Circulos");
  
// Radio
/*const radioCirculo = 4;
console.log("El radio del circulo mide: "+ radioCirculo+"cm");*/

//Diametro
function diametroCirculo(radio){
    return radio * 2;
}

//PI
const PI = Math.PI;
console.log("PI es: "+ PI);

//Circiunferencia
function perimetroCirculo(radio){
    const diaemtro = diametroCirculo(radio); 
    return diaemtro*PI;
}


//Area
function areaCirculo(radio){
    return (radio * radio) *PI;
}
console.groupEnd();

// Aqui interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
     alert(area);
}
