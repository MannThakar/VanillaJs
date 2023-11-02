
// const todayDate = new Date(2002,11,24);

// console.log(todayDate.toString());

// console.log(todayDate.toLocaleDateString());


//It Returns timestames from 1970 in milisecounds
// const todayDate = Date.now();
// console.log(Math.floor(todayDate/3600000));


//This is 
const todayDate = new Date();

//becuase Array's index starts from 0
console.log(todayDate.getMonth() + 1);


//Using toLocaleDateString 
console.log(todayDate.toLocaleString('en-US',
    {
        weekday: "long",
        month: "2-digit",
        year: "2-digit"

    }

));