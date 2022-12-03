// Non-primitive=> array, objects, function
// Function defination
function sayHi(param){
    // console.log("Hello from sayHi",param);
    // return "JS developer"
    let rval=Math.random()>0.5?true:"less than 0.5";
    return rval;
}
// Function Call
// sayHi(10);
// sayHi("hello");
// sayHi([1,2,3,4,5]);
let rval=sayHi();
console.log("rval",rval);