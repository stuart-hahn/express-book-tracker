const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

// initialize express app
const app = express();
const PORT = 3000;

// middleware
app.use(bodyParser.json());

// load books from books.json
function loadBooks() {
  const data = fs.readFileSync("books.json", "utf8");
  return JSON.parse(data);
}

// save updated books data back to books.json
function saveBooks(books) {
  fs.writeFileSync("books.json", JSON.stringify(books, null, 2));
}

app.get("/books", (req, res) => {
  const books = loadBooks();
  res.json(books);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
