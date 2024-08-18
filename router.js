const route = require("express").Router();
const productController = require("./api/product/productController");

route.get("/products", productController.products);
route.post("/products/create", productController.createProduct);
route.get("/products/:id", productController.getProduct);
route.patch("/product/:id", productController.updateProduct);
route.delete("/product/:id", productController.deleteProduct);

module.exports = route;
