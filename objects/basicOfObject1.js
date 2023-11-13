"use strict"

const obj = {
    name: "Mann Thakar",
    rollNo: 101,
    language: ["c", "c++", "javascript", "go"]
};


//Usefull methods
console.log(Object.keys(obj));
console.log(Object.values(obj));

console.log(Object.hasOwnProperty(obj['name']));