// JavaScript String match
let text = "The rain in SPAIN stays mainly in plain";


// EXAMPLE 1
let result = text.match("ain");
document.getElementById('ex1').innerHTML = result;


// EXAMPLE 2
let result2 = text.match(/ain/);
document.getElementById('ex2').innerHTML = result2;


// EXAMPLE 3
let result3 = text.match(/ain/g);
document.getElementById('ex3').innerHTML = result3;


// EXAMPLE 4
let result4 = text.match(/ain/gi);
document.getElementById('ex4').innerHTML = result4;