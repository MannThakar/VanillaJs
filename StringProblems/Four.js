
function longestWord(str) {


    const strArr = str.split(' ');
    const len = strArr.length;

    let max = strArr[0].length;
    let word;


    for (i = 0; i < len; i++) {
        if (strArr[i].length > max) {

            max = strArr[i].length;
            word = strArr[i];

        }
    }
    return word;

}

const ans = longestWord("This is javaScript");
console.log(ans);