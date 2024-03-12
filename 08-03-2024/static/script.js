

// console.log(document);
//.........................add book section.................

const button  = document.getElementById('add');
button.addEventListener(`click`, async( e )=>{
    e.preventDefault();

    const bookTitle = document.getElementById("title").value;
    const bookAuthor = document.getElementById("author").value;
   
    if(bookTitle===""||bookAuthor==""){
        alert("Please fill all fields!");
    }
    const Data = {
        title : bookTitle,
        author: bookAuthor
    };
    console.log(Data);   

    try {
        let response = await fetch('http://localhost:8000/book/addbook'  , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        if(response.ok){
            console.log("Book added successfully.");
            updateWindow();

            
        }else{
            throw new Error('Server responded with a status of '+response.status);
        }


    }catch(err){}

    
})

//.............................search book section ............................

const searchButton = document.getElementById("search");
searchButton.addEventListener(`click`,async(e)=>{
    e.preventDefault();

    const bookTitle = document.getElementById("searchTitle").value;
     console.log(bookTitle);
    if(bookTitle===""){
        alert("Please fill out necessary fields!");
        
    };
    const Data = {
        title : bookTitle};
        

        try {
            let response = await fetch( `http://localhost:8000/book/getBook/${bookTitle}`);
            if(response.ok){
                console.log("Book  found...");
                let display = document.getElementById("display");
                display.innerHTML = "";
                let head = document.createElement("h3");
                head.textContent = "Book Found"
                let para = document.createElement("p")
                para.textContent = bookTitle;     
                display.appendChild(head);
                display.appendChild(para);     

                
            }else{
                throw new Error('Server responded with a status of '+response.status);
            }
    
    
        }
        catch(err){console.error('Error searching for book:', err);
        let display = document.getElementById("display");
        display.innerHTML = "";
        let head = document.createElement("h3");
        head.textContent = "Book not Found";
        display.appendChild(head);}


})

//..................display book section..............................


const listBooks = document.getElementById("listBooks");
listBooks.addEventListener(`click`,(e)=>{
    updateWindow();
})

const  deleteBtn = document.getElementById("delete");
deleteBtn.addEventListener(`click`, async( e )=>{
    e.preventDefault();

    const bookTitle = document.getElementById("delTitle").value;

    if(bookTitle===""){
        alert("Please fill out necessary fields!");
        
    }
    const Data = {
        title : bookTitle};

        try {
            let response = await fetch( `http://localhost:8000/book/deleteBook/${bookTitle}`  , {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Data),
            });
            if(response.ok){
                console.log("Book DELETED successfully.");
                updateWindow();
                
                
            }else{
                throw new Error('Server responded with a status of '+response.status);
            }
    
    
        }
        catch(err){}


})




//........................update window function..........................

async function updateWindow(){
    let response = await fetch('http://localhost:8000/book/getBook');
    const bookArray = await response.json();
    

    const table = document.getElementById("list");
    table.innerHTML="";

    for(let book of bookArray){
        const row = document.createElement("tr") ;
        //create the columns 
        for(const data in  book) {
            
            if(data === "__v"){
                const td = document.createElement("td");
                const btnBorrow = book.available ? "borrow" : "return";
                const btn = document.createElement("button");
                btn.textContent = btnBorrow;
                btn.setAttribute('name', btnBorrow);
                btn.addEventListener('click', function() {updateStatus(book._id, btnBorrow);});
                td.appendChild(btn);
                row.appendChild(td);
                
            }
           const cell=document.createElement("td");
           cell.textContent =book[data];
           row.appendChild(cell);  
       }
       table.appendChild(row);
        

    }
}

//...............................update status function..................

async function updateStatus(bookId, action) {
    try {
        
        const newAction = action === "borrow" ? "return" : "borrow";
        const response = await fetch(`http://localhost:8000/book/updateStatus/${bookId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: newAction,
                available: newAction === "return" ? false : true 
            })
        });

        if (!response.ok) {
            throw new Error('Failed to update status');
        }

        
        updateWindow();
    } catch (error) {
        console.error('Error updating status:', error);
    }
}

