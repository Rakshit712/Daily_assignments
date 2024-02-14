let student = {
    naam : "jhon",
    age : 19,
    grade : 12,
    subject :[
        {name:"physics",grade :80,},
        {name : "chemistry", grade: 30},
        {name :"maths", grade : 70},
        {namec:"biology", grade : 50},
     ]}

// function todisplay the student details

function displayInfo(message){
    console.log(message,`student name: ${student.naam}, student age : ${student.age}, student grade ${student.grade}`);
    
}
// displayInfo("The details of student are:");

//binding displayInfo() to student object

const boundDisplayInfo = displayInfo.bind(student,);
boundDisplayInfo();

// modifying the function to accept parameters

let message = "The details of student are:"
boundDisplayInfo.call(student,message);            // using .call()...

boundDisplayInfo.apply(student,["the datails are :"])            // using .apply()...

// implementing the call back concept

function processSubjects(array,printt){
    for (let subject of array){
        printt(subject);
    }
}
const print = (subject)=>{console.log(subject)};
processSubjects(student.subject,  print);

// Implementing map method...

console.log(student.subject.map((currentValue)=>{             // creating anonymous arrow  function & currentValue are the objects of array "subject"
    return doubleGrade(currentValue.grade);
}));
function doubleGrade(grade){
    return grade*2;
}

// implementing filter method...

console.log(student.subject.filter((currentValue)=>{                         // creating anonymous arrow function here
    return passingSubject(currentValue.grade);
}));
function passingSubject(grade){
    if(grade>=70){
        return true;
    }
}