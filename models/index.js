// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  through: {
    model: Category,
    unique: false,
  },
  as: "category_products",
});

// Categories have many Products
Category.hasMany(Products, {
  through: {
    model: 
  }
})

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
