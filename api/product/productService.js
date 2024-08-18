const product = require("../../models/product");
const db = require("../../config/db");

//get all products
const allProducts = async (callBack) => {
  try {
    const products = await product.findAll();
    if (products.length === 0) {
      callBack(null, "There's no product available.");
    }
    return callBack(null, products);
  } catch (error) {
    callBack(error);
  }
};

const createProduct = async (body, callBack) => {
  try {
    const createdProduct = await product.create({
      name: body.name,
      price: body.price,
      description: body.description,
    });
    return callBack(null, createdProduct);
  } catch (error) {
    callBack(error.message);
  }
};
const getProduct = async (id, callBack) => {
  try {
    const productInfo = await product.findOne({
      where: {
        id: id,
      },
    });
    return callBack(null, productInfo);
  } catch (error) {
    callBack(error.message);
  }
};

const updateProduct = async (id, body, callBack) => {
  console.log(id, body);
  try {
    const updatedProduct = await product.update(
      {
        name: body.name,
        price: body.price,
        description: body.description,
      },
      {
        where: { id: id },
        limit: 1,
      }
    );
    const getUpdatedProduct = await product.findOne({
      where: { id: id },
      limit: 1,
    });
    return callBack(null, getUpdatedProduct);
    w;
  } catch (error) {
    callBack(error.message);
  }
};
const deleteProduct = async (id, callBack) => {
  try {
    const deletedProduct = await product.destroy({
      where: { id: id },
    });
    return callBack(null, deletedProduct);
  } catch (error) {
    callBack(error.message);
  }
};
const productService = {
  allProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};

module.exports = productService;
