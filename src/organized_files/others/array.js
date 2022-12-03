//array declare
// let arr=[];
let array=[1,2,3,4,5]
// // console.log(array);
// // console.log(array.length);
// let i=0;
// while(i<array.length){
//     console.log("elem at idx",i,"is ",array[i]);
//     i++;
// }

// push-->add element at last of array,unshift-->add element at starting of array
// array.push("last value");
// array.unshift("first value");
// console.log(":~''''''''''''''''");
// console.log(array);

// unshift-->delete element at starting of array, pop-->delete element at end of array
// array.shift();
// array.pop();
// console.log(":~'''''''''''''''");
// console.log(array);

//start idx, ending indx
//let partOfArray=array.slice(2,4); // slice includes elements n to m-1, where n and m are 2 and 4 //[ 3, 4 ]
//console.log(partOfArray);

//let partOfArray=array.slice(2); // If ending limit (m) is not mentioned then it will print up to end //[ 3, 4, 5 ]
//console.log(partOfArray);

// splice--> deletes elements from starting index n, deletes no. of elements (m)

array.splice(2,3);
console.log(array);


