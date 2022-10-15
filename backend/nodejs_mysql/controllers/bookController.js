
const Book = require('../models/bookModel.js')

const addBook = async (req, res) => {
    const { title, category, description} = req.body
    const  newBook=  Book.build({
        "title": title,
        "category": category,
        "description": description
      
    })
    try {
        await newBook.save()
        res.status(200).json(newBook)
    }catch (error){
        res.json(error)
    }

}

const getAllBooks = async (req, res) => {
    const books = await Book.findAll()
    res.status(200).json(books)
    
}

const getOneBook = async (req, res) => {
    let id = req.params.id
    let book = await Book.findOne({ where: {id: id}})
    res.status(200).json(book)
}

const updateBook = async (req, res) => {
    let id = req.params.id
    const book = await Book.findOne({where: { id: id}})
    const {title, category, description} = req.body

    await book.set({
        'title': title,
        'category':category,
        'description':description
    })
    try {
        await book.save()
        res.status(201).send(book)

    }catch(error){
        res.json(error)
    }
   
}

const delateBook = async (req, res) => {
    let id = req.params.id
    const book = await Book.findOne({where: { id: id}})

    await book.destroy()

    res.status(200).json({"message": `book with ${id} has been deleted`})

}

module.exports = {
    addBook, getAllBooks, getOneBook, updateBook, delateBook
}