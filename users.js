const {User, validate}= require('/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.get('/', async(req, res)=>{
    const { error } = validateGenres(req.body);
    console.log('error');
  
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
 
    let genre = new Genre({name: req.body.name});
    genre = await genre.save();

    res.send(genre);
});

module.exports = router; 