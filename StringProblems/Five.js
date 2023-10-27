"use strict"

function firstWordUpper(str) {

    let word = str.split('');
    let i;


    for (i = 0; i < word.length; i++) {

        if(i==0)
        {
            word[i] = word[i].toUpperCase();
        }

        if (word[i] == " ") {
            word[i + 1] = word[i + 1].toUpperCase();
        }
    }
    let final = word.join('');

    return final;
}

const ans = firstWordUpper("this is mann thakar im bhuj") //This Is Mann Thakar
console.log(ans);
