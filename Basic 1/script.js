// var hasDriversLicense=false;
// var hasGoodVision=false;

// if(hasDriversLicense && hasGoodVision){
//     console.log(`You can Drive`);
// }else if(hasDriversLicense || hasGoodVision){
//     console.log(`You can Drive but work on your Stats`);
// }else if(!hasDriversLicense){
//     console.log(`You Cannot Drive Bruh`);
// }else{
//     console.log(`You cannot Drive`);
// }

console.log(a); //Undefined meaning var can be created before using it althou it doesnt  have value
console.log(b); //Cannot access before intialization
console.log(c); //Undefined

var a = 20;
let b = 30;
const c = 40; // Similar to let except no mutable

for (let i = 0; i <= 20; i++) {
  console.log(i);
}

// console.log(i); // I is not defined because let keywork is block scoped so it stays inside the loop, and outside of loop i is not declared with
//any keyword and we get reference error since it cannot locate the reference

for (var k = 0; k <= 20; k++) {
  console.log("Value from K loop");
  console.log(k);
}

setTimeout(function () {
  console.log(k);
}, 4000); // I is 21 because after the loop finished we call the function to log k which will have 21 due to the loop before it, 
//If we print without timeout, we get undefined because we accessed k before it got be assigned as 21 due to loops bit slow



//Vars can also be overwrittin, Let throws an error











///Type Conversion///

// var x=39;
// var y="20"
// console.log(String(x)+"23");
// console.log(Number(y)+23+"23");
// console.log(typeof(x));

// /// Type Coercion ///

// var a=20;
// console.log(a+parseInt("20"));

//////Coding Challenge 3////////

// var dolphins = 96 +108 +89;
//     dolphins = Math.round(dolphins/3);
// var koalas = 88 +91+110;
//     koalas = Math.round(koalas/3);

// var minimumScore=90;

// if(dolphins > koalas && dolphins >=minimumScore){
//     console.log(`Dophins win the match by ${dolphins} points`);
// }else if(koalas > dolphins && koalas >=minimumScore){
//     console.log(`Koalas win the match by ${koalas} points`);
// }else if(koalas==dolphins && koalas >=minimumScore && dolphins >=minimumScore){
//     console.log(`Its a tie with both team bringing ${koalas}`);
// }else{
//     console.log(`Both Team Lost`);
// }

//////////The Switch Case///////////

// var day ="monday";

// switch (day){
//     case "monday":
//         console.log(`The Day is Monday Today`);
//         break;

//     case "tuesday":
//         console.log("Today is Tuesday Yall");
//         break;
//     case "wednesday":
//     case "thursday":
//         console.log("You can sleep today");
//     default:
//         console.log("Invalid");
// }

//Statement and expression///
// expressions: anything that produces a value
// x+2;
// true;

// statement : stating anything with declaration (arrya or function or variable);

// conditional or Ternery operator

// var age =20;
// var result = age >= 20? "You are allowed to drink": "You are not allowed to drink";

// console.log("Basic string returned = "+result);
// //Note that this is called an operator because every operator returns a value,
// //and this one does too,
// //thus the result var is conditionally declared
// //Thus it is also applicable inside the template literals

// console.log(`I think ${ age >= 20? "You are allowed to drink": "You are not allowed to drink"}`);

////Challenge four///

// var billValue=275;
// var tipMoney = billValue >=50 && billValue <=300 ? (billValue/100)*15: (billValue/100)*20;

// console.log(`The bill was ${billValue} and the tip was ${tipMoney} thus the total is ${billValue + tipMoney}`);
