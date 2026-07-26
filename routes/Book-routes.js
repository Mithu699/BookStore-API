const express = require("express");
const {
  getAllBooks,
  getSingleBookbyId,
  updateBook,
  deleteBook,
  addNewBook,
} = require("../controllers/book-controller");

// create express router

const router = express.Router();

// get all the routes that are related to books only

router.get("/get", getAllBooks);
router.get("/get/ : id",getSingleBookbyId);
router.post("/add",addNewBook);
router.put("/update/:id",updateBook);
router.delete("/delete/:id",deleteBook);


module.exports = router