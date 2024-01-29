"use strict"

// logical not converts any statement to opposite value (Just converts the result)
// Truthy value to false and falsy value to truth
// 0, undefined, null being False, and 1,"Any String", boolean true being truthy value

//precendece in js means the feature of arranging operators priority
// like bodmas

//for example !x+2<5 means ((!x)+2)<5

var x=0;

if(!x){
    // x=0 means its a falsy value
    // but because of the negationo x will become true 
    console.log('x has no value but this will run');
}

var y=2;

if(!y){
    //Y has a value so its a true
    // But negation changes it to false 
    // So the condition will not run because y was changed to false by the negation
    console.log("You wont see me on console : (");
}

if(!y<5){
    //Y is true
    //Y negated to false, now 0 is a falsy value so JS makes the falsy value as 0
    
    //0<5 true
    console.log("0 is less than 5 ");
}

var z=10;
if(!(z>5)){
    //Z is greater than 5 the result of inner operation is true,
    //That will be negated and made to true

    console.log("You wont see me on console : (");
}