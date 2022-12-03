// print
// console.log("Hello JS:)");
// declare variable
// let a; //undefined
// a=10;
// a=10.1;
// a = "Hello I am a string";
// a = 'Hello I am also a string';
// a = null;
// console.log("Variable contains", a);

// variable types : Primitive types: number, string, boolean, null

let number = 11;

// for(let i=1;i<=number;i++){
//     console.log("Number is ",i);
// }


let count=0;
for(let i=2;i*i<=number;i++){
   if(number%i==0){
       count++;
       break;
   }
}
if(count>=1){
    console.log("not prime");
}
else{
    console.log("prime");
}