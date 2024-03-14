import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const  persons = [
    {
    "namee": "John Doe",
    "ID": "JD123456",
    "email": "john.doe@example.com",
    "contactNo": "1234567890",
    "age": 35},
{
    "namee": "Jane Smith",
    "ID": "JS789012",
    "email": "jane.smith@example.com",
    "contactNo": "9876543210",
    "age": 28
},
{
    "namee": "Michael Johnson",
    "ID": "MJ345678",
    "email": "michael.johnson@example.com",
    "contactNo": "5551234567",
    "age": 42
},
{
    "namee": "Emily Davis",
    "ID": "ED567890",
    "email": "emily.davis@example.com",
    "contactNo": "7779876543",
    "age": 50
},
{
    "namee": "David Brown",
    "ID": "DB234567",
    "email": "david.brown@example.com",
    "contactNo": "9993456789",
    "age": 22
},
{
    "namee": "Sarah Wilson",
    "ID": "SW456789",
    "email": "sarah.wilson@example.com",
    "contactNo": "1238765432",
    "age": 37
},
{
    "namee": "Christopher Lee",
    "ID": "CL678901",
    "email": "christopher.lee@example.com",
    "contactNo": "3335557777",
    "age": 45
},
{
    "namee": "Amanda Martinez",
    "ID": "AM123456",
    "email": "amanda.martinez@example.com",
    "contactNo": "1112223333",
    "age": 29
},
{
    "namee": "Matthew Taylor",
    "ID": "MT789012",
    "email": "matthew.taylor@example.com",
    "contactNo": "4446668888",
    "age": 31
},
{
    "namee": "Jessica Garcia",
    "ID": "JG345678",
    "email": "jessica.garcia@example.com",
    "contactNo": "2224446666",
    "age": 26
},
{
    "namee" : "Daniel Rodriguez",
    "ID": "DR567890",
    "email": "daniel.rodriguez@example.com",
    "contactNo": "8889990000",
    "age": 39
},
{
    "namee": "Ashley King",
    "ID": "AK234567",
    "email": "ashley.king@example.com",
    "contactNo": "7771113333",
    "age": 34
},
{
    "namee": "Joseph Lopez",
    "ID": "JL456789",
    "email": "joseph.lopez@example.com",
    "contactNo": "6668889999",
    "age": 48
},
{
    "namee": "Olivia Gonzalez",
    "ID": "OG678901",
    "email": "olivia.gonzalez@example.com",
    "contactNo": "5557779999",
    "age": 25
},
{
    "namee": "William Hernandez",
    "ID": "WH123456",
    "email": "william.hernandez@example.com",
    "contactNo": "4442226666",
    "age": 33
}
];
const [searchValue, setSearchValue] = useState("");
const [data, setData] = useState(null);

const handleSearch = (event) => {
    console.log(event.target.value)
    event.preventDefault( );
    console.log("Searching for user with ID:", searchValue);
    const  user = persons.find((item)=> item.ID === searchValue);
    if(!user) {
    alert('User not found');
    setData(null);
    } else {
      setData(user);
    }
 };
 const handleChange = (event) => {

    setSearchValue(event.target.value);
  };
  return (
    <>
    <div className='container'>
        <h2>User Search </h2>
        <form /><label>Enter User ID :</label><br/>
        <input placeholder='User Id'
        value={searchValue}
        onChange={handleChange}
        ></input>
        <button type='submit' onClick={handleSearch}>Search</button>
        </div>

        <div>
  <h2>Found user details</h2>
  {data&&
    <div >
      <p>name: {data.namee}</p>
      <p>email: {data.email}</p>
      <p>contactNo: {data.contactNo}</p>
      <p>age: {data.age}</p>
    </div>
  }
</div>
    </>
  )
}

export default App
