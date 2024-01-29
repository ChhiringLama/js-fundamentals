"use strict";

const forcasteResult=[12,5,-5,0,4];

const printForecast=(arr)=>{
    const resultLength=arr.length-1;
    let resultString="";
    let inputString="";
    for(let i=0; i<arr.length; i++){
        resultString=resultString.concat(`${arr[i]} in day ${i+1}...`,inputString);
    }

    return resultString;
}

console.log(printForecast(forcasteResult));
