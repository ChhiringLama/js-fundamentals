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

//The sort function 
//Automatically sorts the elements in an array by default in ascending order of either numerals or alphabetical

const unSortedArray=[4,5,7,1,3,2];
const unSortedAlphabets=["apple","cat","ball"];

unSortedArray.sort();
unSortedAlphabets.sort();

//We can also include a compartor function (a function that does the comparing )

let unSortedObject=[{x:2,y:20},{x:1,y:40},{x:0, y:10}];

function ComparingFunction(a,b){
    return a.y-b.y

    //What's Happening here?
    //a.y = 20 - b.y=40
    //a and b are choosen from front indices of the array
    //if negative move a should be place before b, if positive move a after b
    //The first comparision
    //20-40=-20
    //the partially sorted array generated: [{x:2, y:20},{x:1, y:40},{x:0, y:10}];
    //a and b again picked from the second index of the partially unsoreted array
    //40-10=30
    //a is positive, it will be placed before b
    //the partially sorted array will be[{x:2, y:20},{x:0, y:10},{x:1, y:40}]
    //a and b now will be a={x:0, y:10}, b={x:2, y:20}
    //10-20 = -10
    //a is kept before the b
    //The final array is [{x:0, y:10},{x:2, y:20},}{x:1, y:40}];
}

unSortedObject.sort(ComparingFunction);
console.log(unSortedObject);