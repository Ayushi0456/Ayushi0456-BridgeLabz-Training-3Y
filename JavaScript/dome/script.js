
//dome
//1. select the element


//let h1EL = document.getElementById("heading")
//let h1EL = document.getElementByClassName("heading")
let h1EL = document.querySelector("#heading")
console.log(h1EL)

h1EL.style.color = "red"; //color change krne k liy hai 
h1EL.style.backgroundColor = "blue"; // background color 

//h1EL.textContent = "Hello World"
h1EL.innerHTML+= " <h2>Welcome</h2>"

let btnEL = document.querySelector("#btn")

let fun = ()=>{
    h1EL.style.color="red";
}
btnEL.addEventListener("click",fun)


