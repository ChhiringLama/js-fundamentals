"use strict";

const simpleArray=[23,41,44,2,1,'Chhiring','Messi','Drogba'];


//array of anynomous objects
const assoArray=[
    {name:'Chhiring', rollno:20},
    {name:'Pogba', rollno:10},
    {name:'Ronaldo', rollno:4},
    {name:'Benzima', rollno:2},
    {name:'Xavi', rollno:1},
]

//console.log(simpleArray);


//for each to access each items?
// simpleArray.forEach(element => {
//     console.log(element);
// });

const multiDimensonal=[["Apple",'Ball','Cat','Dog'],['Elephant','Fish'],['Gun','Hen','Ice'],['Joker','King','Lion','Mango','November']];
// console.log(multiDimensonal);


multiDimensonal.forEach(x=> x.forEach(z=> console.log(z)))


// concat joins the two array 
//console.log(simpleArray.concat(assoArray));


//indexof returns the index of defined element
//console.log(simpleArray.indexOf('Chhiring'));

//toString
//change the array to string
// console.log(typeof(simpleArray.toString()));

//Shift remove from the first
//simpleArray.shift();
//unshit add from the first
// simpleArray.unshift('Apple');

// console.log(typeof(simpleArray));



// Filter method takes one argument and returns the filtered elements in collection according to defined condition
// const newArray=assoArray.filter(function(element){
//     return element.rollno>10;
// });

//Or newArray=arrayName.filter(x=>{
//     return x.length>=20; elemets which are longer than 20 char
//     or return x >=20;    elemetns which values are higher or equal to 20
// })

// console.log(newArray);


//Map allows us to create a new array based on the function
// const newArray=assoArray.map(x=>x.rollno*2);
//take every element of newarray as x and access x's rollno key, then multiply them by 2 and return them to newArray
//note the reason we didnt write return is because in js's arrow function if the statement is one line we can omit {} and return
// console.log(newArray);

// const newArray =assoArray.map(element=>{
//     return element.name;
// });

// console.log(newArray);


//Find allows us to find the element 
const newArray=assoArray.find(x=> x.name=="Chhiring");
console.log(newArray);

//Index of here gives us index of the searched value
console.log(assoArray.findIndex(x=> x.name=="Pogba"));

