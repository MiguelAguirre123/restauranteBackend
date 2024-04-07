require('express');
const city = require('../Models/city');
const department = require('../Models/department');

async function listCity(req, res){
    try{
        await city.findAll({
            where: { departmentId: req.params.departmentId },
            attributes: [
                ['cityId', 'value'],
                ['cityName', 'label']
            ],
            order: ['cityName'],
        }).then(function (data){
            return res.status(200).json({
                data: data
            });
        }).catch(error => {
            return res.status(400).json({
                error: error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}

module.exports = {
    listCity
}