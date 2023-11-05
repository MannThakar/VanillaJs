"use strict"

const arr = [1, 2, 3, 4, 5, 7];

//Add item at begining of array
// console.log(arr.unshift(8));
// console.log(arr);

//Remove first element of an array
// console.log(arr.shift());
// console.log(arr);

//Return true if value exist
console.log(arr.includes(5));


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


for (let i = 0; i < actor.length; i++) {
    actor[i].fees -= 50;
}

