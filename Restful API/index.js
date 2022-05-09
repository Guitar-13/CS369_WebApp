import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import routerProduct from './router/roomRouter.js';
import routerUser from './router/ownerRouter.js';

var app = express();
app.use(logger("short"))
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); 
 
// REST for products
app.use('/condo', routerProduct);
app.use('/owner', routerUser);


app.get('/', (req, res) => {  res.send('Welcome To Condo Management'); });
app.get('*', (req, res) => { 
    throw new Error("Not Found Page!"+ req.url)
})



var port = 3000;
app.listen(port, function() { console.log(`start http server on ${port}`); });
