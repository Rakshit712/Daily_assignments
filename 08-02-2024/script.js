alert("This page is a Library Management System");
let id = 100;
let Library = [];
function Books(id,title,author){
    this.id = id;
    this.title = title;
    this.author = author;
    this.isborrowed = false;
}
let book1 = new Books(id++,"Power Of Your Subconscious Mind", "Joseph Murphey");  
Library.push(book1);
let book2 = new Books(id++,"The Alchemist", "Paulo Coelho");
Library.push(book2);
let book3 = new Books(id++,"Atomic Habits", "James Clear");  
Library.push(book3)
let book4 = new Books(id++,"Thinking Fast And Slow", "Daniel Kahneman"); 
Library.push(book4);


function addBook(){
    
    let title = prompt("Enter  the book title");
    let author = prompt("Enter  the book author");
    let book = new Books(id++, title, author);
    Library.push(book);
     alert("The Book has been added to the library");
    }

function  borrowBook(){
    let id  = prompt("Enter  the book id");
    id = parseInt(id);
    let borrowed=false;
    for(let check of Library){
        if(check.id === id){
            borrowed=true;
            if (check.isborrowed){
                alert("The Book has already been borrowed");
            }else{
                alert("success!!");
                check.isborrowed = true;
                break;
            }
        }
    }
        if(!borrowed){
            alert("Please enter valid ID");
            borrowBook();
        }
}
function listAvailableBooks(){
    let book = [];
    for (let check of Library){
        if(!check.isborrowed){
            book.push(` \nId : ${check.id}, tittle : ${check.title}, Author : ${check.author}`);
        }
    }
    alert("available book in the library are : \n"+ book+"\n");

}
function returnBook(){
     let id  = prompt("Enter  the book id");
    id = parseInt(id);
    let errorr = false;
    for(let check of Library){
        if(check.id === id){
            if (check.isborrowed){
                check.isborrowed = false;
                errorr = true;
                alert("The Book returned sucessfully");
                break;
            }else{
                alert("Book already exist! please recheck the book id and enter again.");
                errorr = true;
                break;
            }
        }
    }if(!errorr){
        alert("book id does not exist. please recheck the book id.");
    }
}
function searchBook(title){
    let tittle = prompt("enter the title of the book");
    let book = false;
    for (let check of Library){
        if(check.title === tittle){
            book = true;
           alert("Available")
        }
    }if(!book){
        alert("Book is not available")
    }
   

}


let operation;
do{
operation = prompt("Enter : 1 : To add a book \n 2: To borrow a book \n 3: To get the list of available books\n 4: To return a book \n 5 : To search for a book \n 0 : To exit");
operation = parseInt(operation);

switch(operation){

    case 1:
        
        addBook();
        
    break;
    case 2:
        borrowBook();
        break;
    case 3:
        listAvailableBooks();
        break;
    case 4:
        returnBook();
        break;
    case 5:
        searchBook()
        break;
    default:
        if (operation!==0){
            alert("Invalid input");
        }
}


}while(operation!==0);