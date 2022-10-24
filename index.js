"use strict";
let categoria = prompt ('Ingrese la categoría de su sueldo básico mensual.');
let subcategoria = prompt ('Ingrese la subcategoría que define el multiplicador.');
let sueldoBasico = 0;
let rango;

switch (categoria) {
    case '1':
        sueldoBasico = 1000;
        break;
    case '2':
        sueldoBasico = 1500;
        break;  
    case '3':
        sueldoBasico = 2000;
        break;
    default:
        sueldoBasico = 0;
        break;
    }

switch (subcategoria) {
    case 'A':
        sueldoBasico = sueldoBasico*1.5;
        break;
    case 'B':
        sueldoBasico = sueldoBasico*2;
        break;  
    case 'C':
        sueldoBasico = sueldoBasico*2.5;
        break;
    default:
        sueldoBasico = 0;
        break;
    }

    if (sueldoBasico >=1500 && sueldoBasico<=3000) {
        rango = 'Inicial';
        
    } else { 
        if (sueldoBasico >3000 && sueldoBasico<=4000) {
            rango = 'Intermedio';
        } else {
            if (sueldoBasico>4000) {
                rango = 'Avanzado';
            } else {
               rango = 'Indefinido';
            }
        }
    }

    alert ('Su sueldo básico mensual es $' + sueldoBasico + ' y su rango es ' + rango);

/* TODO */
