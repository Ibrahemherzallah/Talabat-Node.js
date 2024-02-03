const user = require('../models/user');
const express = require('express');
const router = express.Router();
const fs = require("fs");


router.get('/logIn', (req, res) => {
    res.render('auth/logIn', { title: "logIn Page" })
})
router.post('/logIn' , (req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    const arrChoises = ['coffeeShop' , "Restaurants" , "FruitCocktail"];
    const arrImg = ['/images/coffie.jpg' , '/images/restorant.jpg' , '/images/mixed.jpg'];
    let flag = 0;
    const User = user.find()
    .then((result) => { 
    result.forEach(element => {
                  if (element.email == email) {
                    if (element.password == password) {
                        flag =1;
                        const profData = element;
                        req.session.profData = profData;
                        res.render('choises2' , {title : "choises page" , profData, choisesName : arrChoises , choisesImg : arrImg })
                    }
                    if(flag == 0){
                        res.redirect('logIn')               
                    }
                }
                })
})
})
router.get('/signUp', (req, res) => {
    res.render('auth/signUp', { title: "signUp Page" })
})


router.post('/singUp', (req, res) => {
        const User = new user(req.body);
        User.save() 
        .then(result => { 
            console.log("THe data saved")
            res.redirect('logIn/') })
        .catch(err => {
            console.log(err)})
})






router.get('/authCoises', (req, res) => {
    res.render('choises', { title: "Choises page" })
})
router.get('/guest', (req, res) => {
    res.render('guest', { title: "Guest Page" })
})
module.exports = router 


