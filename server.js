const path = require("path");
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const homeRoutes = require('./routes/homeRoutes');
const choisesRoutes = require('./routes/choisesRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
require("dotenv").config();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));

app.use( '/' , homeRoutes);
app.use( '/' , authRoutes);
app.use( '/' , choisesRoutes);
app.use( '/' , restaurantRoutes);
app.get('/*', (req, res) => {
    res.render('err', { title: "404 not found" });
})

mongoose
  .connect(process.env.MONGO_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(result => {
        app.listen(process.env.PORT, () => {
            console.log(`http://localhost:${process.env.PORT}`);
        });
    })
    .catch(err => {
        console.log(err);
    }); 

//     //   const hashedPassword = await bcrypt.hash(password, 12);



// app.get('/temp', (req, res) => {
//         user.find() 
//         .then( (result) => {
//             res.render('temp' , {title : "temp" , arrUsers : result})
//         })
//         .catch((err) => {err});
//     })
// app.get('/:id' , (req,res) => {
//     const id = req.params.id;
//     user.findById(id)
//     .then(result => {
//         res.render('temp1' , {title : 'rrr' , arrUsers : result})
//         console.log(result);
//     }) 
//     .catch(err => {console.log(err);})
// })
// app.delete('/:id' , (req,res) => {
//    const id = req.params.id
//    user.findByIdAndDelete(id)
//    .then((result) => {
//        res.json({link : "/temp"})
//    })
//    .catch((err) => {
//        console.log(err);
//    })
// })
