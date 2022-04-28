const express = require('express');
const app = express();
const hbs = require('express-handlebars'); //allow us to craeate views in expreess application
const path = require('path');


//data parsing
app.use(express.json()); //allow us to post json data when we make post request
app.use(express.urlencoded({
    extended:false
}))

///serving static
app.use(express.static(path.join(__dirname, "public"))); //this method allow us to serve static files
//connect db
require('./server/database/database')();

//setup view engine
app.set('view engine','hbs');
app.engine('hbs',hbs.engine({
    extname:'hbs',
    defaultView:'default', //it refers to the main.hbs file. If we add index, we need to change default into 'index'
    layoutsDir:path.join(__dirname,'views'),
    partialsDir:path.join(__dirname,'views/partials')
}))
 app.use('/',require('./server/router/router'))



app.listen(3001,()=>{console.log("server started on http://localhost")})
