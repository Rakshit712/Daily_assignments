alert("Select the type of operation from ( add, subtract, multiply, divide)");

let num1 = prompt("enter the operation symbol ( +  -  *  / )");
let n1 = prompt("enter the first number:");
n1 = parseFloat(n1);
let n2 = prompt("enter the second number:");
n2 = parseFloat(n2);

switch(num1){
    case ("+"):
        alert(`Sum of ${n1} and ${n2} is ${n1+n2}`);
        break;
    case ("-"):
        alert(`Diffrence of ${n1} and ${n2} is ${n1-n2}`);
        break;
    case ("*"):
        alert(`Multiplication of ${n1} and ${n2} is ${n1*n2}`);
        break;
    case ("/"):
        alert(`Division of ${n1} and ${n2} is ${n1/n2}`);
        break;
    default:
        alert(`invalid operator. Please try again`);
}




