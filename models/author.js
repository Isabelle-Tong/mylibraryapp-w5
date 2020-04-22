// Some static data, an array of objects representing each author
// const authors = [
//   {
//     id: "10001",
//     first_name: "Jennifer",
//     last_name: "Robbins"
//   },
//   {
//     id: "10002",
//     first_name: "Evan",
//     last_name: "Hahn"
//   }
// ];
//
// module.exports = authors;


const mongoose = require("mongoose");
const authorSchema = new mongoose.Schema({
  id: String,
  first_name: String,
  last_name: String
});
const Author = mongoose.model("author", authorSchema, "author");
module.exports = Author;
