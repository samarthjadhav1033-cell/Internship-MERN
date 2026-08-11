const express = require("express");
const router = express.Router();

const { addBook, getAllBooks, deleteBook ,updateBook} = require("../controller/bookController");


router.post("/addBook", addBook);

router.get("/getBook", getAllBooks);

router.delete("/deleteBook/:id", deleteBook);

router.put("/updateBook/:id", updateBook);


module.exports = router;