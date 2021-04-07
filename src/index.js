const express = require("express");
const { Book } = require("./app/models");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log(`- ${req.method} ${req.path}`);
  next();
});

app.get("/listAll", async (req, res) => {
  Book.findAll()
    .then((books) => {
      res.status(200).json(books);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: "Algo deu errado" });
    });
});

app.get("/listAll/:authorName", async (req, res) => {
  Book.findOne({
    where: {
      author: req.params.authorName,
    },
  })
    .then((books) => {
      res.status(200).json(books);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: "Algo deu errado" });
    });
});

app.get("/books", async (req, res) => {
  Book.findAll({
    order: [
      ["title", "DESC"],
      ["createdAt", "DESC"],
    ],
  })
    .then((books) => {
      res.status(200).json(books);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: "Algo deu errado" });
    });
});
app.listen(3001, () => console.log("port 3001"));
