const mongoose = require("mongoose");
//const uri = 'mongodb+srv://DylanElih:dydypazo@cluster0.rqu5q3u.mongodb.net/PFE'
const uri = 'mongodb://0.0.0.0:27017/PFE'
mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useCreateIndex: true,
        //useFindAndModify: false,
       
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log("failed to connect to MongoDB", err)); 