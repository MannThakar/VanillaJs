"use strict"

//Dummy Function
function Div(x, y) {
    return y / x;
}

//Parsing Method
let ans = Div(5, 11);
let intAns = parseInt(ans);
console.log(intAns);

//Math
console.log(Math.round(ans));
console.log(Math.min(10, 12, 1, 4));


//Random 
console.log(parseInt(Math.random() * 10) + 1);