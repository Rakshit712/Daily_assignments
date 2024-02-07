alert("This page calculates the sum of all valid numeric values with in athe array");
let i = 0;
let sum=0;
let araay = [1, 2, 3, "hello", 5, "hi", "1"];

function summation (i){
    for (i of araay){
        if(typeof(i)=="number"){
            sum=sum+i;
        }
    }alert("the sum of numeric values in the arraay is "+ sum);
    

}
summation(i)