require('./DataBase/sync.js');

const connection = require('./DataBase/connection');
const express = require('express');
const app = express();
const port = process.env.PORT || 1337;

//routers
const restaurantrouter = require('./Routers/restaurantrouter');
const productrouter = require('./Routers/productrouter')
const departmentrouter = require('./Routers/departmentrouter')
const cityrouter = require('./Routers/cityrouter')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, ()=>{
    console.log('the app is running on port ' + port);
});

//api
app.use('/api', restaurantrouter);
app.use('/api', productrouter);
app.use('/api', departmentrouter);
app.use('/api', cityrouter);