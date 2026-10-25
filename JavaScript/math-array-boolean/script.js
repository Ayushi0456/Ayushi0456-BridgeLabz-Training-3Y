// let a = 4.5;
// console.log(Math.ceil(a));
// console.log(Math.floor(a));
// console.log(Math.pow(2,3));


//let num = Math.random(); // 0-0.9999999 1 nahi hoga 
//let num = Math.floor(Math.random() * 10); // 0-9 
//let num = Math.floor(Math.random() * 100) + 500 ; // 500-600




//console.log('random number  ${num}')


// task 2 : generate 4-digit OTP
function generateOTP(){
    let min = 1000;
    let max = 9999;

    let num = Math.floor(Math.random()* (max-min) + max);
    console.log(num)
    return num;

}

// arrays

let arr = ['1','2','3'];
for(let i =0; i<arr.length;i++){
    console.log(arr[i]);

}

console.log(arr,shift('apple'));

function generateHexColor(){
    let arr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

    let ans = "#" ;

    for(let i=0;i<6;i++){
        ans+=arr[generateOTP()];

    }
    console.log(ans);


}
generateHexColor()


