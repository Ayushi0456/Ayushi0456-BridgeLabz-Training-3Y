


let result = 10 -"4"; // implicit
console.log(result);
console.log(typeof result);


let result2 = "value is " + true;
console.log(result2);
console.log(typeof result2);


let sNum = "123";
let num1 = Number(sNum);
console.log(num1, typeof num1);

let string = "abc"; // explicit 
let s1 = String(string);
console.log(s1, typeof s1);

let n2 = 250; // implicit 
let s2 = n2 + "";
console.log(s2, typeof s2);

// boolean to number
let b1 = true;
let n3 = Number(b1);
console.log(n3, typeof n3);

// function declaration
function sum(a,b){
    return a+b;
}

// function expression
let sum1 = function(a,b){
    return a+b;
}

// arrow function
let add = (a,b) =>{
    return a+b;
}
let mul = function(a,b){
    return a*b;
}

function calculate(a,b,callback){ // jo func paas hoga ek se dusre me use callback function bolte
return callback(a,b);

}
let sum2 = calculate(10,20,add); // add -> callback func
let multi = calculate(10,20,mul);



// callback function
//3 cases value index or 

let arr = [1,2,3,4,5,6,7];
let fun= (x)=>{
    return x*2;
}
let result1 = arr.map(fun);
    console.log(result1);

// khud ka map func bna rhe 
let res = arr.filter((x)=>{
    return x%2==0;

})
console.log(res);

let arr1 = ["apple", "mango","banana","apple","apple"];
arr1 = arr1.filter((fruits) => fruits !== "apple");
console.log(arr1);

//filter the fruit whose length is > 5

let arr2 = ["apple", "mango","banana","apple","apple"];
arr2 = arr2.filter((f) => f.length>5);
console.log(arr2);

//filter the age > 18
let arr3 = [12,34,9,60,36,24];
arr3 = arr3.filter((age) => age>18);
console.log(arr3);


//filter the fruit start with "A" or 'a'
let arr4 = ["Apple", "mango","banana","apple","apple"];
arr4 = arr4.filter((f) => f[0] === "A" || f[0] === "a");
console.log(arr4);













