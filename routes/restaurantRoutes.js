const express = require('express');
const router = express.Router();
const fs = require("fs");


router.get('/restaurant/:id' , (req,res) => {
    fs.readFile('mealsData.json', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          return;
        }
      const jsonMealsData = JSON.parse(data);
      const id = parseInt(req.params.id);   
      const restaurant = jsonMealsData[id - 1];
      const jsonResData = req.session.jsonResData;
        // console.log(jsonResData.name);
        if (!restaurant) {
            res.status(404).send('Restaurant not found');
            return;
        }
        res.render('restaurantDetails', {title : "ff" ,  restaurant });
}) 
}) 






module.exports = router;