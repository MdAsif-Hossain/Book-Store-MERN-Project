const Book = require("./book.model");

const postABook = async(req,res)=>{
    try{
        const newBook = await Book({...req.body});
        await newBook.save();
        res.status(200).send({message: "Book posted Successfully", book: newBook})
    } catch(error){
        console.error("error creating book",error);
        res.status(500).send({message: "Faild to create a book"})
    }
}


const  getAllBooks = async(req,res)=>{
    try {
        const books = await Book.find().sort({createAt:-1});
        res.status(200).send(books)
        
    } catch (error) {
        console.error("error fetching books",error);
        res.status(500).send({message: "Faild to fetch a book"})
    }

}

const getSingleBook = async(req,res)=>{
    try {
        const {id} = req.params;
        const book = await Book.findById(id);
        if(!book){
            res.status(404).send({message: "Book not Found "})
        }
        res.status(200).send(book)
        
    } catch (error) {
        console.error("error fetching books",error);
        res.status(500).send({message: "Faild to fetch a book"})
    }
}
const updateBook = async(req,res)=>{
    try {
        const {id} = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id,req.body,{new:true});
        if(!updateBook){
            res.status(404).send({message: "Book not Found "})
        }
        res.status(200).send({
            message:"Nook update successfully",
            book: updateBook
        })
        
        
    } catch (error) {
        console.error("Error Updating books",error);
        res.status(500).send({message: "Faild to update a book"})
    }
}

const deleteABook = async(req,res)=>{
    try {
        const{id} = req.params;
        const deleteABook = await Book.findByIdAndDelete(id);
        if(!deleteABook){
            res.status(404).send({message: "Book not Found "})
        }
        res.status(200).send({
            message:"Nook deleted successfully",
            book: deleteABook
        })
        
    } catch (error) {
        console.error("Error deleting books",error);
        res.status(500).send({message: "Faild to delete book"})
    }

}

module.exports = {
    postABook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteABook
}