const mongodb =  require("mongodb");
 const url = "mongodb://localhost:27017";

 let db;

 async function getDataBase(){
    if(db){
        return db
    }
    const client = new mongodb.MongoClient(url);
    try{
        await client.connect(err => {if (err) throw err});
        db = client.db("mydb");
        return db;
    }catch(errror){
        console.log(error);
    };
};
 module.exports = getDataBase;