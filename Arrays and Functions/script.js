"use strict";

//-------What are strict mode--------//
//---Returns errors in console, which generally are not given by the terminal/console itself, such as undefined variable
//---being called, or using a reserved word for varriable declaration//
// let hasDriversLicense =false;
// const passTest=true;

// if(passTest)
//      hasDriversLicense=true;
// if(hasDriversLicense) console.log("I can Drive");

//----Functions---/
//--Note that apples and oranges inside the parameter do not need to be explicity defined
//--for example: var apples or let apples,
//--the parameter is defined as soon as the function is called.
// function myfunction(apples, oranges){
//    console.log(apples, oranges);
//    let juice=`Juice with ${apples} apples and ${oranges} oranges`;
//    return juice;
// }

// //Can either run like this where you catch the result
// let output=myfunction(20,30);
// console.log(output);
// //or this
// console.log(myfunction(20,30));
// console.log(myfunction(2,59));

//---Function declaration

// function calcAge(birthyear){
//     let date=2023;
//     return date-birthyear;
// }

// console.log(calcAge(23));

// //--Function Expression , and this is also a Anynomous function since it has no name
// const calcAge2 = function(birthyear){
//     return 2023-birthyear;
// }

// console.log(calcAge2(23));

//--Arrow function
//--The difference is that arrow function cannot use this. keyword
//--Shorter version of function expression

//Simply parameter => {do this};

// const calcAge3 = birthyear =>
//     2023-birthyear;

// const juiceBlender = (item1, item2, servings) =>{
//     return `Juice with ${item1} and ${item2} has been made for ${servings} people`;
// }

// console.log(calcAge3(23));
// console.log(juiceBlender('Honey','Apple',3));

// function slicer(item) {
//   return item * 4;
// }
// const juiceBlender = (item1, item2, servings) => {
//     item1 = slicer(item1);
//     item2 = slicer(item2);
//   return `Your Juice has been made with ${item1} slices of apples and ${item2} slices of oranges for ${servings}`;
// };

// console.log(juiceBlender(4, 2, 4));

//---Coding challenge fundamental 2

// const calcAverage=(pointA,pointB,pointC)=>{
//     return (pointA+pointB+pointC)/3;
// }

// let dolphinsResultOne =calcAverage(44,23,71)
// let dolphinsResultTwo =calcAverage(85,54,41)
// let dolphinsResultThree =calcAverage(42,41,51)
// let avgDolphins = dolphinsResultOne +dolphinsResultTwo+dolphinsResultThree;
// let koalasResultOne =calcAverage(23,51,51)
// let koalasResultTwo =calcAverage(23,15,77)
// let koalasResultThree =calcAverage(99,52,12)
// let avgKoalas = koalasResultOne +koalasResultTwo+koalasResultThree;

// function checkWinner(teamA,teamB){
//     if(teamA >= 2 * teamB){
//         console.log(`Team Dophins win with ${Math.floor(teamA)} points vs ${Math.floor(teamB)}`);
//     }else if ((teamB >= 2 * teamA)){
//         console.log(`Team Koalas win with ${Math.floor(teamB)} points vs ${Math.floor(teamA)}`);
//     }else{
//         console.log(`No team wins with ${Math.floor(teamB)} points vs ${Math.floor(teamA)}`);
//     }
// }

// checkWinner(avgDolphins,avgKoalas)

//---Array
// Literal Syntax Declaration
// const friends = ['Micheal','Steven', 'Peter'];

// //new keyword declaraion
// const ages = new Array(19,23,41,12);

// //arrays function
// friends.push('Harley');

// //Arrays property .length
// console.log(friends[friends.length-1]);

// //Accessing array item
// console.log(ages[2]);

// console.log(friends.length);

// //Assining manualay
// friends[2]='Charlie';
// console.log(friends[2]);

// let age=23;
// const completeArray = ['Jonas', age, friends];
// console.log(completeArray);

//Exercise on Array

// function calcAge(birthyear) {
//   let date = 2023;
//   return date - birthyear;
// }

// const years = [1990, 2003, 2010, 2000];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[years.length-1]);

// console.log(age1);
// console.log(age2);

// //this both is same , however one computes the value fist
// const ages=[calcAge(years[0]), calcAge(years[years.length-1])];
// const ages2=[age1, age2]

// console.log(ages);
// console.log(ages2);

// const friend = ['Jacob','Noami'];

// //Note that push function returns a value, ie the lenght of the new array

// const length=friend.push("Messi");

// console.log(length);
// console.log(friend.unshift("John"));

// friend.pop();

// friend.unshift("Phillip") // add from the first
// friend.push("Larem") // add from the first

// friend.shift(); // Remove from the first
// console.log(friend);
// console.log(friend.indexOf("Jacob")); // Find the index

// //includes return  boolean true / 1 if the specified element exist
// if(friend.includes("Jacob")){
//   console.log(`Jacob exist`);
// }
let calcTip = (billValue) => {
  billValue = billValue >=50 && billValue<= 300 ? (billValue / 100) * 15 : (billValue / 100) * 20;
  return billValue;
};



const bills = [125,555,44];
const tips =[];

tips[0]=(calcTip(bills[0]));
tips[1]=(calcTip(bills[1]));
tips[2]=(calcTip(bills[2]));

// const total=[`${bills[0]+tips[0]}`,`${bills[1]+tips[1]}`,`${bills[2]+tips[2]}`];
// //Produces a string, since `` template literals initializes a string

const totalArraytwo=[]
for (let i=0; i<=tips.length-1; i++){
  totalArraytwo[`${i}`]=bills[`${i}`]+tips[`${i}`];
}
//produces numerals

console.log(bills);
console.log(tips);
// console.log(total);
console.log(totalArraytwo);



//----Note that even if you use "0" as a string to access harry, due to js's auto conversion it can
//still access the element at the 0 index

// const arrayName=["harry"];

// console.log(arrayName["0"]);


// ==================================Recursion Function====================

// let y=10;
// function recursion(y){
//  if(y>=1){
     
// console.log('X is decrementing, Recusion on progress');
//  recursion(y - 1); 
//  }
     
//   else{
//   console.log("X is now 1");
//   }
  
// }

// recursion(y);

// let conversion=20;
// console.log(typeof(Number(conversion)));



//========================Multidimensional Array

// const multiDimensional = [
//   ["Apple", 'Ball', 'Cat', 'Dog'],
//   ['Elephant', 'Fish'],
//   ['Gun', 'Hen', 'Ice'],
//   ['Joker', 'King', 'Lion', 'Mango', 'November']
// ];

// for (let x = 0; x < multiDimensional.length; x++) {
//   for (let y = 0; y <= x; y++) {
//       console.log(multiDimensional[y][x]);
//   }
// }


// <!-- ================================= !!! IMPORTANT ======================= 

// Classes in js are not like traditional classes in other programming language, so in js objects can serve as prototype for creating a new 
// objects. prototype in this case means objects from which other objects can be formed. Now Array is an prototype because we can declare
// arrays using different method and it will inherit properties from array objects thus an instance is created  -->


//============================ Types of function based on its attachement

//Standalone 
//Functions that are not tied to any obejcts or class and thus we can directly call them
function unattachedStandalonefunction(){
  console.log("Im a stand alone function and can be called withouth any prefix");
}

// unattachedStandalonefunction()


//Object methods 
//Functions or methods that are defined inside an objects and thus needs to be called using the object since they are also property of an object
//For example: Array is an object in JS, so when we declare an array we it inherits all the methods as well of the base array prototype object

const simpleArray=[23,23,13,'Apple'];

simpleArray.length(); // Now length is the object method and accessed thru our array


// Class methods
//Similar to objects, we decalare an instance of class with new keyword and a constructor.
//then use the instance to access the objects of the class

class People{
  classid="2";
  myconstructor(name){
     this.name=name;
  };

  print(){
    console.log("Good Bye World");
  }
}

const person=new People('Hello');

person.print();



//array in js do not provide us multidimensonal array; we have to create our own implementation
// type 1, Array of anyonomous objects 

const ObjArray=[
  {name:'Apple', weight:23},
  {name:'Ball', weight:23},
  {name:'car', weight:23}
]

//Type two array of arrays

const ArrayofArrays=[
  [23,41,44]
  [4,4,2]
  [53,1,4]
]


const resultarray=ArrayofArrays.find(x => x==4);


//we can also use foreach to access multidimensonal array
const multiDimensonal=[["Apple",'Ball','Cat','Dog'],['Elephant','Fish'],['Gun','Hen','Ice'],['Joker','King','Lion','Mango','November']];
// console.log(multiDimensonal);


multiDimensonal.forEach(x=> x.forEach(z=> console.log(z)))