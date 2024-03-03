const express = require ('express');

// init app 
const PORT =400 ;
const app = express();
// demmarer le serveur pour accepter lles requtes entrante du port 400

app.get('/',(req , resp) => resp.send('<h1> hello latiiiffaaaa how are you</h1>'));
app.listen(PORT, ()=> console.log('app is up and running on port 400'));
