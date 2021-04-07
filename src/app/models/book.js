
const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define("Book", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    page_quantity: DataTypes.INTEGER
  });

  return Book;
};

module.exports = Book;



// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Book extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Book.init({
//     title: DataTypes.STRING,
//     author: DataTypes.STRING,
//     page_quantity: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Book',
//   });
//   return Book;
// };




// const { Model, DataTypes } = require("sequelize");

// class Book extends Model {
//   static init(sequelize) {
//     super.init(
//       {
//         title: DataTypes.STRING,
//         author: DataTypes.STRING,
//         pageQuantity: DataTypes.INTEGER,
//       },
//       { sequelize }
//     );
//   }
// }

// module.exports = Book;

