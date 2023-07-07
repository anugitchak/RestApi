const Product = require('../models/product');

const getAllProducts = async (req, res) => {
  const { product, name, sort, featured } = req.query;

  const queryObject = {}; // Declare queryObject before using it

  if (product) {
    queryObject.product = product;
  }
  if (featured) {
    queryObject.featured = featured;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: 'i' };
  }
  
  let apiData = Product.find(queryObject);

  if (sort) {
    const sortFix = sort.replace(",", " ");
    apiData = apiData.sort(sortFix);
  }

  if (select) {
    const sortFix = select.replace(",", " ");
    apiData = apiData.select(sortFix);
  }

  console.log(queryObject);

  const myData = await apiData;
  res.status(200).json({ myData });
};

const getAllProductsTesting = async (req, res) => {
  const myData = await Product.find(req.query).select("name");
  res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTesting };
