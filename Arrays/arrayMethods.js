"use strict"

// const arr = [1, 2, 3, 4, 5, 7];

//Add item at begining of array
// console.log(arr.unshift(8));
// console.log(arr);

//Remove first element of an array
// console.log(arr.shift());
// console.log(arr);

//Return true if value exist
// console.log(arr.includes(5));


const actor = [

    {
        name: "Manoj Bajpai",
        fees: 200
    },

    {
        name: "Pankaj Tripathi",
        fees: 150
    },

    {
        name: "shahruk khan",
        fees: 250
    },
];

//Generic For Loop
// for (let i = 0; i < actor.length; i++) {
//     actor[i].fees -= 50;
// }

//For each loop

const newArray = actor.map((e) => e.name);

// Add a debug statement to check the `actor` array


// const strArray = newArray.join('\n');
// console.log(strArray);


// const index = actor.map((e, i) => e.fees -= 50)



const arr = ["Apple", "Banana", "Mango", "Pineapple"];


// const sliceArray = arr.slice(0, 2);
// console.log(sliceArray);

// arr.forEach(function run(e, i) {
//     console.log(`${e}:- ${i}`);
// })


// const element = arr.map((e, i) => {
//     return e + e
// });
// console.log(element);


// arr.push("Apple");
// arr.push("Apple");
// arr.push("Banana");

// console.log(arr);

// const NewFilterArray = arr.filter((e) => e === "Apple");

// console.log(NewFilterArray);


// const newArr = arr.concat(['Resberry','Orange','WaterMelon']);

// console.log(newArr);


// const Found = arr.find((e) => e === "Apdple")

// console.log(Found);

// const hasAnApple = arr.some(() => "apple");

// console.log(hasAnApple);


// const Headphones = ["Realme","Zeb thunder","Read Gear"];
// const newCollection = Headphones.splice(2,1);
// console.log(newCollection);


// console.log(Array.isArray(actor));

// const Itrator = actor.entries();

// for(const It of Itrator)
// {
//     console.log(It);
// }


