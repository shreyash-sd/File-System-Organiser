//object --> group of key value pair
//key: value-->property
//key: function-->method
let cap={
name:"steve",
lastname:"rogers",
address: {
    city:"Manhatten",
    state:"New York"
},
age:35,
isAvenger:true,
movies:["first","second","third"],
sayHi:function(){
    console.log("Cap says Hi");
}
};
// Get 
// console.log(cap.name);
// console.log(cap.age);
// console.log(cap.movies[1]);
// console.log(cap.name);
// cap.sayHi();

// Set/Update

// before setting print
// console.log("cap",cap);

// console.log("-------------");



// cap.age=36;
// cap.isAvenger=false;
// cap.friends=["Tony","Bruce","peter"]

// after setting print
// console.log("cap",cap);

// //delete

// delete cap.address
// console.log("cap",cap);

for(let key in cap){
    console.log(key," : ",cap[key]);
}

