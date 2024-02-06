alert("This page is a Grade Calculator");
let num1 = prompt("Enter your score");
let num;
num = parseFloat(num1);

if(num>90 && num<=100){
    alert("Your grade is 'A'");
}else if(num>=80 && num<90){
    alert("Your grade is 'B'");
}else if(num>=70 && num<80){
    alert("Your grade is 'C'");
}else if(num>=60 && num<70){
    alert("Your grade is 'D'");
}else if(num>=40 && num<60){
    alert("Your grade is 'E'");
}else if(num>=0 && num<40){
    alert("Your grade is 'F'")
}else(alert("Enter a valid score"))