const fs = require('fs');



const getData =()=>{
    const data = fs.readFileSync('./MOCK_DATA.json', 'utf-8');
    return JSON.parse(data); 
}

const writeData = (data)=>{
    fs.writeFileSync('MOCK_DATA.json',JSON.stringify(data));
}




module.exports = {getData,writeData}