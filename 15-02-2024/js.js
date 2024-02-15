

const url1 = "https://jsonplaceholder.typicode.com/users";
const url2 = "https://jsonplaceholder.typicode.com/posts";
const url3 = "https://jsonplaceholder.typicode.com/todos";


async function getUser(){
    const strUser = await fetch(url1);
    const objUser = await strUser.json();
    console.log(objUser.slice(0,4));
    insertData(objUser.slice(0,5),"table1");

}

getUser();


async function getPost(){
    const strPost = await fetch(url2);
    const objPost = await strPost.json();
    console.log("here are the objects");
    insertData(objPost.slice(0,10),"table2");
}

getPost();


async function getTodo(){
    const strTodo = await fetch(url3);
    const objTodo = await strTodo.json();
    console.log("Here is the todo list");
    insertData(objTodo.slice(0,10),"table3");

}

getTodo();

function insertData (data,id){
    
    
    const tablee = document.getElementById(id);
    
    const tr = document.createElement('tr')
    for(head in data[0] ){
        const th = document.createElement('th')
        th.textContent =head;
        tr.appendChild(th);     
    }    tablee.appendChild(tr);
    for (let objects of data){

        const row = document.createElement('tr')
    for (let keys in objects){//-------------object traverse
        const td = document.createElement('td')
        if(typeof objects[keys] === "object"){
            let str="";
            for (let subKeys in objects[keys]){
                str += objects[keys][subKeys];
            }
            td.textContent = str;
                 row.appendChild(td)

        }
        
        else{
        td.textContent = objects[keys];}
        row.appendChild(td);
        
    }tablee.appendChild(row);
    }
   
}