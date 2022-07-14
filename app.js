//Codigo Cuadrado

//const ladoCuadrado = 5;

function perimetroCuadrado(lado) {
    return lado * 4;
}
perimetroCuadrado();

function areaCuadrado(lado) {
    return lado * lado;
}
areaCuadrado();

/* console.group("Cuadrado");
console.log("Los lados del cuadrado miden " + ladoCuadrado + "CM");
console.log("El perimetro del Cuadrado es de " + perimetroCuadrado + "CM");
console.log("El area del Cuadrado es de " + areaCuadrado + "CM2")
console.groupEnd(); */
 
//Codigo Triangulo

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturatriangulo = 5.5;
// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// const areaTriangulo = (baseTriangulo * alturatriangulo) / 2;

function perimetroTriangulo(lt1, lt2, bt) {
    return lt1 + lt2 + bt;
}
perimetroTriangulo();

function areaTriangulo(bt, altt,) {
    return (bt * altt) / 2;
}
areaTriangulo();

/* console.group("Triangulo");
console.log("El triangulo tiene un lado de " 
    + ladoTriangulo1 
    + "cm otro lado de " 
    + ladoTriangulo2 
    + "cm y una base de " 
    + baseTriangulo
    + "cm"
 )
 console.log("El triangulo tiene una altura de " + alturatriangulo + "cm");
 console.log("El perimetro del triangulo es de " + perimetroTriangulo + "cm");
 console.log("El arena del triangulo es de " + areaTriangulo + "CM2")
 console.groupEnd();
 */
 //Codigo Circulo
 
//const radioCirculo = 4; 
//const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
//const circunferencia = diametroCirculo * PI;
//const areaCirculo = (radioCirculo * radioCirculo) * PI;

function diametroCirculo(radio) {
    return radio * 2;
}
diametroCirculo();

function circunferencia(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
circunferencia();

function areaCirculo(radio) {
    return (radio * radio) * PI;
}
areaCirculo();

/* console.group("Circulo");
console.log("El radio del circulo es " + radioCirculo + "cm");
console.log("El diametro del Circulo es " + diametroCirculo + "cm");
console.log("Pi es igual a " + PI);
console.log("El perimetro del circulo es de " + circunferencia + "cm");
console.log("El area del circulo es de " + areaCirculo + "cm2");
console.groupEnd(); */