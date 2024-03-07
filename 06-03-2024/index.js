class bankAccount{
    constructor(accNo, accHolderName, Balance){
        this.accNo = accNo;
        this.accHolderName = accHolderName;  
        this.Balance= Balance; 
}

deposit(amount) {
    if (amount > 0) {
      this.Balance += amount;
      return true;
    } else {
      console.log("Deposit amount should be greater thn 0");
      return false};
}
withdraw(amount) {
    if (amount <=this.Balance && amount>0 ) {
       this.Balance -= amount;
       console.log( "Amount Withdrawn Successfully!");}
       else {console.log ("Insufficient balance or wrong amount")}    
    }

checkbal() {
    console.log(`The current balance is ${this.Balance}`);
}

}

class savingsAccount extends  bankAccount {
    constructor(accNo, accHolderName, Balance ){
        super(accNo, accHolderName, Balance);
    }
addInt(interestRate){
    let intrst = (this.Balance * interestRate )/100 ;
    this.Balance +=intrst;
    console.log(`interest added:  ${intrst}`)}

withdraw(amount) {

    const limit = 1500;
    const  charge = 50;
    if(this.Balance < limit) {
        super.withdraw(amount);
    }else{
        super.withdraw(amount+charge);
    }}

    
}

const account = new  savingsAccount('030000000356225',"Rakshit Sharma",10000);

console.log(account);
account.checkbal();
// account.addInt(6);
account.withdraw(9500);
account.checkbal();