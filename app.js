const express=require('express');
const bodyParser=require('body-parser');
const index=require('./models/index');
const mongoose=require('mongoose');
const app=express();


mongoose.connect('url', { useNewUrlParser: true, useUnifiedTopology:true, })

  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });

const PORT=process.env.PORT||3000;


app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const contactview=require('./router/router');
app.use(contactview);

app.use(express.static('public'));
app.use('/css',express.static(__dirname + 'public/css'));




app.listen(PORT,()=>{
    console.log('port is 3000');
});