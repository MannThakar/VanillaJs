
"use strict"

//Object Declared
const obj = {
    name: "Mann Thakar",
    age: 21,
    college: "Darshan University",
    language: ["Gujarati", "Hindi", "English"]
};


//Oneway to access the property of object
console.log(obj.age);

//Second way to access the propery of object
console.log(obj["age"]);

//Frezzing the object
Object.freeze(obj);
obj['age'] = 22;


//Using This function
obj.myFun = function () { 
    console.log(`Hello Happy Diwali to ${this.name}`);
};

