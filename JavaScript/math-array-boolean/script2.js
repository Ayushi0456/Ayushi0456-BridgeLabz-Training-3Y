// object 
let student = {
    id:"101",
    name:"rahul",
    marks:90,
    display : ()=>{
        console.log('my name is ${this.name} and got marks ${this.marks}')
    }

}
let username = student['name']; //bracket notation
let userMarks = student.marks; // dot notation 
console.log(username);
console.log(userMarks);

student.display;


//functional constructor

function Student(id,name,marks){
    this.id = id;
    this.name = name;
    this.marks = marks;

    function display(){
        console.log("this is method")
    }

}
let s1 = new Student (101,"rahul",75);
let s2 = new Student (102,"raj",87 );

console.log(s1);
console.log(s2);


// class

class Student1{
    constructor(id,name,marks){
        this.id=id;
        this.name=name;
        this.marks=marks;

    }
    display = ()=>{
        console.log("this is a student method");
        
    }
}
let studentArr=[
    {
        id:102,
        name:"raj",
        marks:"60",
        gender: "male",

    },
    {
        id:103,
        name:"ayushi",
        marks:"90",
        gender:"female",
    },
    {
        id:104,
        name:"monika",
        marks:"82",
        gender:"female",
    },
    {
        id:103,
        name:"amisha",
        marks:"93",
        gender:"female",
    } 
]

let student3 ={
    id:101,
    name :"rahul",
    isPresent:true,
    
    address:{
        city:"mathura",
        pincode:12345
    },
    display:function(){
        console.log("my name is ${this.name}")
    }


}

let jsonData = JSON.stringify(student);
console.log(jsonData);

let objData = JSON.parse(jsonData)
console.log(objData)

let query = "city";

console.log(student3["address"][query])
console.log(student3.address.city)
console.log(student3.name)
console.log(student3["name"])
student3.age=24;




