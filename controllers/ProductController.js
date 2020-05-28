const Products = require('../models/ProductsModel.js');

exports.listProducts = function(req, res){
    Products.find({}, (err,results) => {
        if(err) return res.send(err);   
        res.send(results);
    });
 }
 