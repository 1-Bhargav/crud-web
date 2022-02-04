var express = require('express');
const books = require('./Models/books');
var router = express.Router();
var book = require('./Models/books')

router.get('/books',async(req,res)=>{
   
    const ibook = await book.find()
    res.send(ibook)

})

router.post('/books', async(req,res) => {
    
    const ibook = new book({
        name: req.body.name,
        author: req.body.author
    })

    await ibook.save((err,msg)=>{

        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "message":msg
            })
        }
    })
})

router.patch('/books/:id', async(req,res) => {
    console.log("dsdfs")
    
    const ibook = await book.findOne({_id:req.params.id})
    ibook.name = req.body.name
    ibook.author = req.body.author

    await ibook.save((err,msg) => {
        
        if(err){
            res.status(500).json({
                "error":err
            })
        }

        else{
            res.status(200).json({
                "message":msg
            })
        }
    })
})

router.delete("/books/:id",async(req,res)=>{
    const _id = req.params.id;
    const DATA = await books.findByIdAndDelete(_id);
    res.send(DATA);
  });

module.exports = router