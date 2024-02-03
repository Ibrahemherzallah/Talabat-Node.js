// const express = require('express');
// const router = express.Router();
// const sessions = require('express-session');
// const sessionCookieLifeTime = 1000 * 60 * 60; 
// const cookieParser = require("cookie-parser");
// router.use(cookieParser());
// router.use(express.urlencoded({ extended: false }));
// router.use(cookieParser());
// var session;
// router.use(
//     sessions({
//       secret: "7Eo9yVFTl3GduuVnNjQuy0U9dLWjlA3x",
//       saveUninitialized: true,
//       cookie: { maxAge: sessionCookieLifeTime },
//       resave: false,
//     })
// );
// const createProfDataSession = (req, profData) => {
//     console.log("HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII" , profData);
//     session = req.session;
//     session.profData = profData;
// };
// const createJsonResDataSession = (req, jsonResData) => {
//     console.log(jsonResData);
//     req.session.jsonResData = jsonResData;
// };
// const loggedIn = (req, res, next) => {
//     if (req.session.profData) {
//         next();
//     } else {
//         res.redirect('/logIn');
//     }
// };



// module.exports = {
//     router,
//     createProfDataSession,
//     createJsonResDataSession,
//     loggedIn
//   };