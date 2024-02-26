const fs = require('fs');



const getData =()=>{
    const data = fs.readFile('.MOCK_DATA.json', 'utf8');
    return JSON.parse(data); 
}

const writeData = (data)=>{
    fs.writeFile('MOCK_DATA.json',JSON.stringify(data));
}




module.exports = {getData,writeData}