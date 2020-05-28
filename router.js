const ProductController = require('./controllers/ProductController.js');

module.exports = function(app){
    app.get('/getproducts', function(req, res){ ProductController.listProducts(req, res); });
}