const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const port = 7000;

const DB_NAME = "Exam"
const uri = "mongodb+srv://homehunter:csis@cluster0.hcs7q1d.mongodb.net/" + DB_NAME;

app.use(bodyParser.json());

mongoose.connect(uri, { useNewUrlParser: true });
const db = mongoose.connection;
db.once('open', function() {
  console.log('open. connected to mongo db');
});


app.get('/', (req,res)=>{
    const entry = {
        name: 'Jennifer Macaranas',
        sid: '300352913'
      };
    db.collection('quizes').insertOne(entry, function(err, result) {

        if (err) throw err;
        res.send({entry, result});
    });
})

app.listen(port, ()=>{
    console.log(`This app is listening at ${port}`)
})