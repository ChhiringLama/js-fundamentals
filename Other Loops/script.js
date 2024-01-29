// for , while , and other loops where condition is checked at first is called entry point loop

// let x=10;

// while(x>1){
//     console.log(`The while loops printed ${x}`);
//     x--;
// }


//======================================================================================


//do while loop also called exit-controlled loop because the condition is checked at last
// let y=20;

// do{
//     console.log(y);
//     y--;
// }while(y>1);


//=======================================================================================

//for in loop is used to iterate or enumerate over the key of each elements inside an object ( withouth concern on proper ordering or index).

// const newArray=[23,41,43,33,45];
// const newObject={
    // name:'Hasbulla',
    // age:23,
    // method: function(){
            // console.log("Hello world");
    // }
// 
// };
// 
// for(let y in newArray){
    // console.log(y) //returns index, not useful for arrays;
// }
// 
// for(let x in newObject){
    // console.log(x); // Prints all the keys 
    // Thus we can say it enumerates thru objects property, specially the key
//}


//==================================================================================

// For of loop, Allows us to use break and continue statement, for each doesnt allow us to do that, on top of that for each needs a statement 
///and can also have function that 
//is executed for each of the element.
// Forof loop is used for any iterables (objects that can be iterated)

let newArray=[24,44,55,66,12];

for(let x of newArray){
    if(x <=30){
        continue;
    } else{
        console.log(x);
    }
}

// array.forEach(element => {
//     if(x<=30){
//         continue; // Shows error
//     }else{
//         console.log(element);
//     }
// });