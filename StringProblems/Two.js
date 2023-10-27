"use strict"

function Reverse(str) {
    const rev = str.split("").reverse().join("");
    return rev;
}

const Ans = Reverse("Mann Thakar");
console.log(Ans);