alert("This is a Unit Conversion Tool");
let num1 = prompt("enter the Value to be converted : ");
let str1 = prompt("enter the type eg. km, miles, celcius, farenheit");
let str2 = prompt("enter the type to which you want to convert eg. km, miles, ceclius, farenheit");
num1 = parseFloat(num1);
let temp;
if(str1===str2){
    alert("The converted value is"+num1);

}else if(str1==="km" && str2==="miles"){
 temp = num1*0.621;
    alert(" "+str1+"kilometers equals to"+temp+"miles");
}else if(str1==="miles" && str2==="km"){
    temp = num1*1.609;
    alert(" "+str1+"miles equals to"+temp+"kms");
}else if(str1==="celcius" && str2==="farenheit"){
    temp=num1*1.8+32;
    alert(" "+str1+"celcius equals to"+temp+"Farenhiet");
}else if(str1==="farenhiet" && str2==="celcius"){
    temp= num1-32;
    temp= temp*0.55;
    alert(" "+str1+"farenhiet equals to"+temp+"celcius");
}else{
    alert("Invailed combination, please try again");
}