const h1 = document.querySelector('h1');

const numero1 = document.querySelector('#num1');
const numero2 = document.querySelector('#num2');

const btonCalcular = document.querySelector('#btnCalcular');

const resultado = document.querySelector('#resultado');


btonCalcular.addEventListener('click', Calcular);

function Calcular(){

  const rest = parseInt(numero1.value) +parseInt(numero2.value);

  resultado.innerText = " Resultado: " + rest;

    console.log(rest);
}

