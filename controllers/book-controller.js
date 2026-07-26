const Book = require("../models/Book");

// Get All Books
const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});

    if (allBooks.length > 0) {
      return res.status(200).json({
        success: true,
        message: "Books fetched successfully",
        data: allBooks,
      });
    }

    res.status(404).json({
      success: false,
      message: "No books found",
    });
  } catch (e) {
    console.log(e);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

// Get Single Book
const getSingleBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (e) {
    console.log(e);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

// Add Book
const addNewBook = async (req, res) => {
  try {
    const newlyCreatedBook = await Book.create(req.body);

    res.status(201).json({
      success: true,
      message: "Book added successfully",
      data: newlyCreatedBook,
    });
  } catch (e) {
    console.log(e);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

// Update Book
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (e) {
    console.log(e);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

// Delete Book
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
    });
  } catch (e) {
    console.log(e);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBook,
  deleteBook,
};