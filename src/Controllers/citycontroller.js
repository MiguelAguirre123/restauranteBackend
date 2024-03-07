require('express');
const city = require('../Models/city');
const department = require('../Models/department');

async function listCity(req, res){
    try{
        await city.findAll({
            attributes: [
                'cityId',
                'cityName'
            ],
            order: ['cityName'],
            include: {
                model: department,
                where: { departmentId: req.params.departmentId },
                attributes: ['departmentName']
            }
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