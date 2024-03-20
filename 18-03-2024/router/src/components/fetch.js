const url = 'https://jsonplaceholder.typicode.com';

function fetchData (setdata, route){
    fetch(url  + route)
    .then((response)=> response.json())
    .then((data)=>{
        setdata(data)
        console.log(data);
    })
}
export default fetchData;