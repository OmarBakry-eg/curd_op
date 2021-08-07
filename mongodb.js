// const mongodb = require("mongodb"); 
// const clinet = mongodb.MongoClient;
// const obj = mongodb.ObjectId;

const { MongoClient, ObjectId } = require("mongodb"); //destructring


const dbName = "task-manager"

MongoClient.connect(url,  function (err, client) {
   if(err){
       return console.log("Unable to connect to database")
   }
   console.log(" We in database")
 const db =   client.db(dbName)
//   db.collection("users").insertOne({
//      name : "Omar",
//      age : 22,
//  },(err,res)=>{
//      if(err) {
//          return console.log("Got am err while adding in the doc")
//      }
//  })

//   db.collection("users").insertMany([{
//      name : "Omar",
//      age : 22,
//  },
//  {
//     name : "Ahmed",
//     age : 21,
// },
// {
//     name : "Mohamed",
//     age : 20,
// }
// ],(err,res)=>{
//      if(err) {
//          return console.log("Got am err while adding in the doc")
//      }

//     console.log(res)
//  })

// db.collection("users").find().forEach((item,err)=>{          
//     console.log(item); 
// }) => all items

// db.collection("users").find({age : 22}).count((err,item)=>{
//     console.log(item);
// }) => print count

// db.collection("users").find({age : 22}).toArray((err,item)=>{
//     console.log(item);
// }) => return array<Object>

//  db.collection("users").findOne({'name' : 'Ahmed'},(err,res)=>{
//      if(err) return console.log("User not found "+err )

//      console.log(res);
//  })

// db.collection("users").updateOne({
//     _id: new ObjectId("610ee44aff28e5288a5028b2") //update what ?? you can put anything like name or age anything not just id ..
// },{
//     $set : {
//         name:"7amoda" //change name to 7amoda
//     },
//     $inc : {
//         age: 1 //it will increament age by 1
//     }
// }).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

db.collection("users").deleteMany({
    age:19
}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err);
})

  });

  //order pramaters is VVIIIII very Importaaanttt (item,err) => here item refere to the err not the data , 
  //(err,item)=> here item refer to the elements/documents
