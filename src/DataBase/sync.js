const connection = require('./connection');

//Models
const restaurant = require('../Models/restaurant');
const product = require('../Models/product');
const department = require('../Models/department');
const city = require('../Models/city');

//JSON
const departmentjson = require('./JsonFiles/departmentjson');
const cityjson = require('./JsonFiles/cityjson');

function sync(){

    //Foreign Key restaurant - product
    restaurant.hasMany(product,{
        foreignKey: 'restaurantId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    product.belongsTo(restaurant,{
        foreignKey: 'restaurantId'
    })

    //Foreign Key department - city
    department.hasMany(city,{
        foreignKey: 'departmentId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    city.belongsTo(department,{
        foreignKey: 'departmentId'
    })

    //Foreign Key city - restaurant
    city.hasMany(restaurant,{
        foreignKey: 'cityId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    restaurant.belongsTo(city,{
        foreignKey: 'cityId'
    })

    //create json
    departmentjson.createDepartments();
    cityjson.createCities();
}

sync();