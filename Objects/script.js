"use strict";
 

//Defining a variable 

//declaration_type name_of_the_object = {
    //key = value
    //key = value
//}

//note that we use colon and coma here 

//Object literal syntax declaration {}
const messi = {
    firstname:"messi",
    lastname:"lionel",
    birthyear:1990,
    hasDriversLicense:false,
    // caclAge: function(birthyear) {
    //     return 2037-birthyear;
    // },

    // caclAge: function(){
    //     console.log(this); // returns the current object being referred i.e messi
    //     return 2037 - this.birthyear;
    // },


    // When defining method inside an object we need to use function keyword or we use shorthand like :
    //calcage(){
    // No need to wrtie function keyword
    //}
    caclAge:function(){
        this.age=2023-this.birthyear;
        return this.age;
    },
    hobbies:['football','reading'],

    getSummary:function(){
        return this.summary =`${messi.firstname} is ${this.caclAge()} years old who has ${this.hasDriversLicense? 'a': 'no'} drivers license `
    }
}


//Retrival of object using dot and bracket notation
//Dot is very strict and only works if the property exist
// console.log(messi.age);

// const nameKey="name";

//brack notation is more useful for putting expressions inside it 
// console.log(messi["first"+nameKey]);

// const interestIn=prompt("What do you want to know about messi? choose from firstname, lastname, age and hobbies");

// console.log(messi[interestIn]); // works because the variable is being computed


// console.log(messi.interestIn); // wont work because it is strict and needs property name itself 
//thus it returns undefined, since .interstIn is not defined inside the object


// if(messi[interestIn]){
//     console.log(messi[interestIn]);
// }else{
//     console.log("Please choose from the above");
// }

//We can also create new property like this
// messi.trophies=23;
// messi["wife"]="Antollena";
// // console.log(messi);  

// console.log(`Messi has ${messi.hobbies.length} hobbies, and those are ${messi.hobbies[0]} and ${messi.hobbies[1]} and his wife name 
// is called ${messi["wife"]}`);



//--Object Methods

console.log(messi.caclAge());

// console.log(messi["caclAge"](1990));

// console.log(messi.age);


console.log(messi.getSummary());



