const user = require('../models/user');
const express = require('express');
const router = express.Router();
const fs = require("fs");
const {createProfDataSession} = require('../middleware/testMiddleware');


router.get('/logIn', (req, res) => {
    res.render('auth/logIn', { title: "logIn Page" })
})
router.post('/logIn' , (req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    const arrChoises = ['coffeeShop' , "Restaurants" , "FruitCocktail"];
    const arrImg = ['/images/coffie.jpg' , '/images/restorant.jpg' , '/images/mixed.jpg'];
    
    const User = user.find()
    .then((result) => { 
    result.forEach(element => {
                  if (element.email == email) {
                    if (element.password == password) {
                        const profData = element;
                        createProfDataSession(req , profData);
                        res.render('choises2' , {title : "choises page" , profData, choisesName : arrChoises , choisesImg : arrImg })
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




// const firstName = req.body.firstName;
    // const lastName = req.body.lastName;
    // const email = req.body.email;
    // const password = req.body.password;
    // const register = async (req, res) => {
    //     await body("firstName")
    //     .notEmpty()
    //     .withMessage("First name is required")
    //     .isLength({ min: 2, max: 20 })
    //     .withMessage("First name must be between 2 and 20 characters")
    //     .matches(/^[\u0621-\u064Aa-zA-Z\s]+$/)
    //     .withMessage(
    //     "First name must contain only Arabic and English letters and spaces"
    //     )
    //     .run(req);
    // await body("lastName")
    //     .notEmpty()
    //     .withMessage("Last name is required")
    //     .isLength({ min: 2, max: 20 })
    //     .withMessage("Last name must be between 2 and 20 characters")
    //     .matches(/^[\u0621-\u064Aa-zA-Z\s]+$/)
    //     .withMessage(
    //     "Last name must contain only Arabic and English letters and spaces"
    //     )
    //     .run(req);
    //         await body("email")
    //         .notEmpty()
    //         .withMessage("Email is required ")
    //         .isEmail()
    //         .withMessage("Email must be a valid email address")
    //         .custom(async (value) => {
    //         const existingUser = await User.findOne({ email: value });
    //         if (existingUser) {
    //             return Promise.reject("Email is already registered");
    //         }
    //         })
    //         .run(req);
    //     await body("password")
    //         .notEmpty()
    //         .withMessage("Password is required")
    //         .isLength({ min: 8, max: 24 })
    //         .withMessage("Password must be between 8 and 24 characters")
    //         .matches(
    //         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
    //         )
    //         .withMessage(
    //         " Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
    //         )
    //         .run(req);
    //     }
