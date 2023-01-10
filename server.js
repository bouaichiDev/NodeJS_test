const express=  require('express');
const app =express();
const mongoose = require('mongoose');
const uri = "mongodb+srv://DB_badr:5ZLLZ8rT37GrQ@cluster0.eaam1vq.mongodb.net/stock?retryWrites=true&w=majority";
mongoose.connect(uri).then(()=> console.log("connected"))
                   .catch(err=>console.log(err));
 const Contact = mongoose.model('Contact', { name: String });
 const contact = new Contact({ name: 'Zildjian' });
 contact.save().then(() => console.log('meow'));
console.log("ok");