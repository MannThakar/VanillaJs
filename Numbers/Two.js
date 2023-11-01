
function Sum(number) {


    let lastDigit, sum = 0;
    while (number != 0) {
        lastDigit = number % 10;
        sum += lastDigit;
        number = Math.floor(number / 10);
    }

    //Converting to Int
    const sumInt = Math.floor(sum);
    return parseInt(sumInt);

}

const ans = Sum(123);
console.log(ans);

