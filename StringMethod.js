
const strs = new String("Hey i am mann thakar and i am from bhuj");

//At()
console.log(strs.at(5));

//split()
const sorted = strs.split("");


//match()
const regexp = /am/g;
const found = strs.match(regexp);
console.log(found);


//slice() LastNumber doesnt include
const newStrs = strs.slice(-4, -2);
console.log(newStrs);


//replace()
console.log(strs.replaceAll("mann thakar", "javaScript"));

//Search()
console.log(strs.search('mann'));

//SubString Doesnt accept negative values
console.log(strs.substring(3, 6));


