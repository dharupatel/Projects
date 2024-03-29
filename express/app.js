const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use(`/static`, express.static(`static`))

//PUG SPECIFIC STUFF
app.set('view engine', 'pug')// set the template engine as pug
app.set('views', path.join(__dirname, 'views'))// Set the views directory
 
//ENDPOINTS
app.get('/', (req, res)=>{
    res.status(200).render('index.pug');
})


// START THE SEVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});