"use strict";


const array=['Johnas','Ram',23,"232"];
const newArray=[];
for(let i=0; i<=array.length-1; i++){
    // newArray[i]= typeof array[i];
    //or
    //We can push result into an array like this 
    newArray.push(typeof array[i]);
}
console.log(newArray);

const year=[1990,1992,1999,2004,2012];
const ages=[];

for(let k=0; k<=year.length-1; k++){

    //year array is easily accessed without us having the need to pass it as a parameter because it is globally defined
    let calcAge=()=>{
        ages.push(2023-year[k]); 
    }

    //we named the placeholder name as array and index which signifies that it expects an array and an interator which
    //will work as the index
    function printHello(array,index){
        //Note again array and index are just replaced placeholder name which containes the argument (year and k);
        console.log(`hello from ${array[index]}`);
    }
    calcAge();

    //passing year 
    printHello(year,k);
}

console.log(ages);
