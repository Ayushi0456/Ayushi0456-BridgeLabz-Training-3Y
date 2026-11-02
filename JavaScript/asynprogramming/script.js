
// console.log("start")

// function getuser(){
//     setTimeout(()=>{
//         console.log("userdata....")
//     },3000)
// }

// function getUserBankDetail(){
//     setTimeout(()=>{
//         console.log("user bank detail")
//     },1000)
// }

// getuser();
// getUserBankDetail();

// console.log("end")

//


// console.log("start")

// function getuser(callback){
//     setTimeout(()=>{
//         console.log("userdata....")
//         callback()
//     },3000)
// }

// function getUserBankDetail(callback){
//     setTimeout(()=>{
//         console.log("user bank detail")
//         callback()
//     },1000)
// }

// getuser(()=>{
//     getUserBankDetail()

// })

// getuser();
// getUserBankDetail();

// console.log("end")



let mypromise = new Promise((resolve,reject)=>{
    let age = 10;
    if(age>18){
        resolve(age);

    }
    else{
        reject(age);
    }
})

mypromise
.then(()=>{
    console.log(msg)
})
.catch(()=>{
    console.log(msg)
})









