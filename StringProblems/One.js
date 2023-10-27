"use strict"

function CountWord(str) {
    const Words = str.split(" ");
    const len = Words.length;
    return len;
}

const ans = CountWord("Hey This Is Mann");
console.log(ans);