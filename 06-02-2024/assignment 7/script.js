alert("Exploring Falsy and truthy values");
let n = prompt("Enter any data  Suggestions: 0, null, undefined, nan, false, empty string, or any other number or any value");

if(n==="0"||n==="null"||n==="undefined"||n==="NaN"||n==="false"||n===""){
    alert("Entered value is a Falsy value")
}else(alert("Entered value is a Truthy value"))