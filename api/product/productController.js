const productService = require("./productService");
const responseService = require("../response/responseHelper");

const products = (req, res) => {
  productService.allProducts((error, response) => {
    responseService(res, error, response);
  });
};
const createProduct = (req, res) => {
  const body = req.body;
  productService.createProduct(body, (error, response) => {
    responseService(res, error, response);
  });
};
const getProduct = (req, res) => {
  const id = req.params.id;
  productService.getProduct(id, (error, response) => {
    responseService(res, error, response);
  });
};
const updateProduct = (req, res) => {
  const body = req.body;
  const id = req.params.id;
  productService.updateProduct(id, body, (error, response) => {
    responseService(res, error, response);
  });
};
const deleteProduct = (req, res) => {
  const id = req.params.id;
  productService.deleteProduct(id, (error, response) => {
    responseService(res, error, response);
  });
};
const productController = {
  products,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};

module.exports = productController;
