var mongoose = require('mongoose')
var express = require('express')
var route = require('./routes')
var bodyParser =require('body-parser')

const port = process.env.PORT || 3000

const db = 'mongodb+srv://Bhargav:<password>@cluster0.zlqm5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


mongoose.connect(db).then(()=>{
    console.log('DB Connected')

    app = express();
    app.use(bodyParser.urlencoded({extended:false}))
    app.use('/api',route)
    
    app.listen(port,()=>{
        console.log('Server Started At Port 3000')
    })
}).catch((e)=>{
    console.log(e.toString())
})
