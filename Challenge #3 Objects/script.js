// let mark ={
//     fullName:"Mark Miller",
//     mass:78,
//     height:1.69,

//     calcBMI:function(){
//         return this.BMI = Math.round(this.mass/(this.height * 2))
//     },
// }
// let john ={
//     fullName:"John Smith",
//     mass:92,
//     height:1.95,
//     calcBMI:function(){
//         return this.BMI = Math.round(this.mass/(this.height * 2))
//     }
// }


// if(john["calcBMI"]()>mark.calcBMI()){
//     console.log(`${john.fullName} has greater BMI of ${john.calcBMI()} than ${mark["fullName"]} which is ${mark.calcBMI()}`);
// }else if(john[calcBMI()]<mark.calcBMI()){
// console.log(`${john.fullName} has lesser BMI of ${john.calcBMI()} than ${mark["fullName"]} which is ${mark.calcBMI()}`);
// }else{
//     console.log("Equal BMI");
// }


//Method 2
let mark={
    fullName:'Mark Smith',
    massInKG:78,
    heightInMeter:1.69,
    calcBMI:function(){
        return this.BMI=(this.massInKG/(this.heightInMeter*2))*2;
    }
}

let john={
    fullName:'John Miller',
    massInKG:60,
    heightInMeter:5.1,
    calcBMI:function(mass,height){
        return this.BMI=(mass/(height*2))*2;
    }
}
 
function executeComparision(){

    if( mark.calcBMI()>john['calcBMI'](john.massInKG,john.heightInMeter)){
        console.log(`${mark.fullName} has higher BMI of ${mark.calcBMI()}`);
    }else if( mark.calcBMI()<john['calcBMI'](john.massInKG,john.heightInMeter))
    console.log(`${john.fullName} has higher BMI of ${john.calcBMI()}`);
}

executeComparision();