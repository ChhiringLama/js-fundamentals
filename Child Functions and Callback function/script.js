const functionA=function(a,b){
    console.log("Function expression A has been called"+ a + b);

    function childFunction(a,b){
        console.log("This is a child function declaration of a function"+ a + b);
    }

    childFunction(a,b);

    //Note that even tho every child function has a and b parameter each is unique and has scope on that function only
    //The a b parameter in this function will hold 11,22
    return (a,b)=>{
        console.log("Arrow function inside function A has been called"+a + b);
    }

}

// Second argument is for the return function
functionA(24,44)(giveValueA(),giveValueB());


function giveValueA(){
    return "Hello";
}

function giveValueB(){
    return "Wassup"
}
