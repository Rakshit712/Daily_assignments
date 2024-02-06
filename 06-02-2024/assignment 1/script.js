alert("This page is a decision maker, it can check whether the number is positive, negative or zero");
let num1 = prompt("enter a number");
let num;
num = parseFloat(num1);
if (num>0){
    alert("the entered number is positive");
}else if(num<0){
    alert("the entered number is negative");
}else if(num===0){
    alert("enter number is zero");
}else(alert("Invalid input, Please try again"));

