const express = require('express');
const router = express.Router();
const fs = require('fs');




router.get('/Restaurants' , (req,res) => {
    fs.readFile('ResData.json', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          return;
        }
      const jsonResData = JSON.parse(data);
      const profData = req.session.profData;
      if(profData){
      res.render('RestaurantPage', { title: "profile page", profData , jsonResData});
    }
    else{
      res.redirect('/logIn')
    }
      });
})
router.get('/FruitCocktail'  , (req,res) => {
    const arrFruit = ["هم هم" , "اخر المشوار" , "فخفينا جنين" ];
    const arrImg = ["/images/tazaj.jpg" , "/images/arabFride.png" , "/images/huny.png" , "/images/kfc.jpg" , "/images/sheefMjd.jpg" , "/images/alaqsa.jpg"]
    const profData = req.session.profData;
    if(profData){
      res.render('FruitCocktailPage', { title: "profile page",  arrFruit , profData:profData , arrImg : arrImg });
    }
    else{
      res.redirect('/logIn')
    }

})
router.get('/coffeeShop'  , (req,res) => {
  const arrCoffie = ["دمشق" , "بلدنا" , "السينما" , "ميرمية" ];
  const arrImg = ["/images/tazaj.jpg" , "/images/arabFride.png" , "/images/huny.png" , "/images/kfc.jpg" , "/images/sheefMjd.jpg" , "/images/alaqsa.jpg"]
  const profData = req.session.profData;
  if(profData){
    res.render('coffeeShopPage', { title: "profile page", arrCoffie , profData:profData , arrImg : arrImg });
  }
  else{
    res.redirect('/logIn')
  }
})

module.exports = router;
