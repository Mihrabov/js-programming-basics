function summ(){ 
let number1 = Number(document.getElementById('first_number').value) 
let number2 = Number(document.getElementById('second_number').value) 
var answer = number1 + number2 
document.getElementById("result").innerHTML = answer
} 
function subtraction(){ 
let number1 = Number(document.getElementById('first_number').value) 
let number2 = Number(document.getElementById('second_number').value) 
var answer = number1 - number2 
document.getElementById("result").innerHTML = answer
} 
function multiplication(){ 
let number1 = Number(document.getElementById('first_number').value) 
let number2 = Number(document.getElementById('second_number').value) 
var answer = number1 * number2 
document.getElementById("result").innerHTML = answer  
} 
function division(){ 
let number1 = Number(document.getElementById('first_number').value) 
let number2 = Number(document.getElementById('second_number').value) 
var answer = number1 / number2 
document.getElementById("result").innerHTML = answer
}
console.log('Скрипт загружен'); 