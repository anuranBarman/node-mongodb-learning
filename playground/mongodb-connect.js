const MongoClient=require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Successfully connected to MongoDB Server');
  db.collection('Todos').insertOne({
    text:'Finish MongoDB Course',
    completed:false
  },(err,result)=>{
    if(err){
      return console.log('Unable to insert new data');
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });
  db.close();
})
