const express=require('express');
const Contact=require('../models/index');
const router=express.Router();

router.get('/',(req,res)=>{
    res.render('contact');
});

router.post('/ad', (req, res,next) => {
    var contact = new Contact(req.body);
  
    contact.save()
      .then(() => {
        res.send('Your message has been saved to the database.');
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send('Error saving message to database.');
      });
  });


module.exports=router;