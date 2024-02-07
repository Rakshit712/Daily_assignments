function main(){
    alert("This page is a Calculator");
    let num1 = prompt("Enter the First number");
    let num2 = prompt("Enter the Second number");
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let operator = prompt("Enter the operator eg: + - * /");
    Calculator(operator, num1,num2);
}
const Summation = (num1, num2) => num1+num2;
const difference = (num1, num2) => num1-num2;
const multiplication = (num1, num2) => num1*num2;
const division = (num1, num2) => num1/num2;
//const Summation = (num1, num2) => num1+num2;

function Calculator(operator,num1,num2){
    switch(operator){
    case ("+"):
        alert("the sum of two numbers is : "+(Summation(num1, num2)));
        break;
    case ("-"):
        alert("the diff of two numbers is : "+(difference(num1,num2)));
        break;
    case ("*"):
        alert("the multiplication of two numbers is : "+(multiplication(num1,num2)));
        break;
    case ("/"):
        alert("the division of two numbers is : "+(division(num1,num2)));
        break;
    default:
        alert("Invaled operator. Please try again")

}
}
main();
