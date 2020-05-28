const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    Name : String,
    Message : String,
    url : String, 
    Types : []
}, { collection : 'Products' });


const Products = mongoose.model('Products', productSchema);
module.exports = Products;