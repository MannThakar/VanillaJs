"use strict"

function palindrome(str) {
    const newStr = str.split('').reverse().join('')

    if (str === newStr) {
        return 1;
    }
    else return 0;
}
const Ans = palindrome("abba");
console.log(Ans);