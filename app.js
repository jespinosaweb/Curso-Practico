// Codigo Cuadrado

function perimetroCuadrado(lado) {
    return lado * 4;
}
perimetroCuadrado();

function areaCuadrado(lado) {
    return lado * lado;
}
areaCuadrado();

// Codigo Triangulo

function perimetroTriangulo(lt1, lt2, bt) {
    return lt1 + lt2 + bt;
}
perimetroTriangulo();

function areaTriangulo(bt, altt) {
    return (bt * altt) / 2;
}
areaTriangulo();

// Codigo Circulo

const PI = Math.PI;

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

// Enlace con html cuadrado

function calPerCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = Number(input.value);
    const perimetro = perimetroCuadrado(value);
    alert("El perimetro es " + perimetro);
}

function calAreCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(" El area es " + area);
}

// Enlace con html triangulo

function calPerTriangulo() {
    const input1 = document.getElementById("inputTril1");
    const input2 = document.getElementById("inputTril2");
    const input3 = document.getElementById("inputTribase");
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calAreTriangulo() {
    const input1 = document.getElementById("inputTribase");
    const input2 = document.getElementById("inputTrialt");
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const area = areaTriangulo(value1, value2);
    alert(area);
}

// Enlace con html Circulo

function calPerCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = Number(input.value);
    const perimetro = circunferencia(value);
    alert(perimetro)
}

function calAreCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = Number(input.value);
    const area = areaCirculo(value);
    alert(area);
}

// Comprar si el triangulo es isosceles

function comprobarTriangulo() {
    const input1 = document.getElementById("inputIsosceles1");
    const input2 = document.getElementById("inputIsosceles2");
    const input3 = document.getElementById("inputIsosceles3");
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);
    if (value1 == value2 && value1 != value3 && value2 != value3) {
        alert("El Triangulo es Isosceles");
    } else if (value1 == value2 && value2 == value3 && value3 == value1) {
        alert("El triangulo es isosceles y ademas es equilatero");
    } else {
        alert("El triangulo es incorrecto(no es isosceles)");
    }
}


// 