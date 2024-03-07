const  express = require("express");
const getDataBase = require("./database");

const server = express();
server.use(express.json());




async function run(){
    const db = await getDataBase();

    //...........................movie count based  on genre..................


    // let pipeline = [
    //     {$unwind : "$genres"},
    //     {$group : {
    //         _id : "$genres",
    //         movieCount : {$sum :1}
    //     }}
    
    // ]
    //...................2nd aggregation.....Average Runtime in different countries................



    let pipeline = [
        {$unwind:"$countries"},
        {$group :{
            _id : "$countries",
            averageRuntime:{$avg: "$runtime"}
        }}                                          

    ]


    //..................3rd aggregation  ......number of documents with type series.................

    // let pipeline = [
       
    //     {  $match :{
    //             type : "series"
    //         }
    //     }, 
    //     {  $count: 'numberOfSeries'
    //     },
        
    // ]


    //.......................4rth  Aggregation........Number of movies with english as language.......  

    // let pipeline = [
    //     {$unwind : "$languages"},
    //     {$group :{
    //         _id : null,
    //         numberOfEnglishMovies : {$sum :  1}
    //         // language:"English"
    //     }}
           
    //    ]


    //........................5th aggregation.........displaying 10 documents ...........

    // let pipeline = [
        
    //     {$limit : 10}
    // ]
//...........................6th aggregation.......top 10 movies as per imdb rating...........

//     const pipeline = [
//         {     
//             $match: {
//               'imdb.rating': { $gt: 8.9 } 
//             }
          
//     },
//     { $sort:{ 'imdb.rating': -1}
//     },
//     {
//         $limit : 10
//     }
// ]

//...................7th aggregation....list of movies released after year 2015.............

        // let pipeline = [
        //     { $match: { year: { $gte: 2015 } } },
            
            
        // ]

//...................8th aggregation ...count on the basis of type............


        // let  pipeline = 
        //         [
        //             { $group: { _id: "$type", count: { $sum: 1 } } }
        //         ];
            
        
//......................9th aggregation....movies released in the USA with an IMDb rating above 9.0.......


        // let pipeline = [{

        //      $match: { "countries": "USA", "imdb.rating": { $gt: 9.0 } } 
        // }]

//..................10th aggregatiion ....top 5 movies with highest run time......


        // let pipeline = [

        //     {
         //  $sort: { runtime: -1 } },

        //     { $limit: 5 }
        // ]


//.....................11th aggregation....top 5 movies  by number of awards won............

        // let pipeline = [
        //     { $match: { "awards.wins": { $gt: 0 } } },

        //     { $sort: { "awards.wins": -1 } },

        //     {$limit:5}
        // ]

//...................12th aggregation....top 5 rated movies as per tomatoes  user ratings............

        // let pipeline = [
        //     { $match: { "tomatoes.viewer.rating": { $gt: 3.9 } } },

        //     {$sort: { "tomatoes.viewer.rating": -1}},

        //     {$limit: 5}

        // ]


//....................13th aggregation....grouping on the basis of cast and genre
        // let pipeline = [
        //     { $unwind: "$cast" },
        //     { $unwind: "$genres" },
        //     { $group: { _id: { actor: "$cast", genre: "$genres" } } },
        //     { $sort: { "_id.actor": 1, "_id.genre": 1 } }
        // ]


//................14th aggregation........average ratings.......

    // let pipeline = [
    //     { $group: { _id: "$type", avgRating: { $avg: "$imdb.rating" } } },
    //     { $sort: { avgRating: -1 } },
    
    // ]


//..................15th aggregation......grouping on the basis of directors and year......

        // let pipeline = [
        //     { $unwind: "$directors" },
        //     { $group: { _id: { director: "$directors", year: "$year" } } },
    
        // ]


    const movies = await db.collection("movies");
    const result = await movies.aggregate(pipeline).toArray();
    console.dir(result);
    
    // console.dir(movies);
}


run();



