import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import { Book } from '../models/bookModels.js'



const router = express.Router()

const app = express();



app.use(cors());







router.post("/", async (request, response) => {
    try {
        const { title, author, publisherYear } = request.body;

        if (!title || !author || !publisherYear) {
            return response.status(400).send({
                message: "Send all required fields: title, author, publisherYear"
            });
        }

        const newBook = { title, author, publisherYear };
        const book = await Book.create(newBook);

        return response.status(201).send(book);
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// GET all books from the database
router.get('/', async (request, response) => {
    try {
        const books = await Book.find({}).sort({ createdAt: -1 });

        //return count and data
        return response.status(200).json(
            {
                count: books.length,
                data: books
            }
        );
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: "Could not fetch books" });
    }
});


// GET a book from the database
router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params
        const book = await Book.findById(id)

        if(!mongoose.Types.ObjectId.isValid(id)){
            return response.status(404).json({error: "No such book"})
        }



        //return count and data
        return response.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: "Could not fetch the book" });
    }
});


// Update a book in the database using id

router.put('/:id', async(request, response) => {


    try {
        if (
          !request.body.title ||
          !request.body.author ||
          !request.body.publisherYear
        ) {
          return response.status(400).send({
            message: 'Send all required fields: title, author, publisherYear',
          });
        }
    
        const { id } = request.params;
    
        const result = await Book.findByIdAndUpdate(id, request.body);
    
        if (!result) {
          return response.status(404).json({ message: 'Book not found' });
        }
    
        return response.status(200).send({ message: 'Book updated successfully' });
      } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
      }
})


//Delete a book in the database using id

router.delete('/:id', async(request, response) => {


    try {
        const { id } = request.params

        const deleted = await Book.findByIdAndDelete(id)

        if(!deleted){

            return response.status(400).send({message: "Book not found"})
        }

        return response.status(200).send({message: "Book was deleted successfully"})
        
    } catch (error) {

        console.log(error.message);
        return response.status(500).send({message: "Book could not be deleted"})
        
    }
})


export default router;