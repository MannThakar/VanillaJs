
function Sum(number) {


    let lastDigit, sum = 0;
    while (number != 0) {
        lastDigit = number % 10;
        sum += lastDigit;
        number = Math.floor(number / 10);
    }

    //Converting to Int
    return sum;

}

const ans = Sum(123);
console.log(ans);

