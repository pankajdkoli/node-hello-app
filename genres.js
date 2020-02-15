const Joi = require('@hapi/joi');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const Genre = mongoose.model('Genre', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
    
}));

router.get('/', async (req, res)=>{
   const genres = await Genre.find().sort('name');
    res.send(genres);
});

router.post('/', async (req, res) => {
 
    const { error } = validateGenres(req.body);
  
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
     // const { error } = validateGenres(req.body);
    // if (error) return res.status(400)(error.details[0].messege); 
   
    let genre = new Genre({name: req.body.name});
    genre = await genre.save();

    res.send(genre);
});


router.put('/:id', (req, res)=>{
    const{ error } = validateGenres(req.body);
    if (error) return res.status(400).send(error.details[0].messege);   
    // res.status(400).send(error.details[0].messege);
   // const g = Genre.findByIdAndUpdate({_id: req.params.id}, {name: req.body.name});

    const genre = Genre.findByIdAndUpdate({_id: req.params.id}, {name: req.body.name});

    genre.then(r => {
        return res.status(200).send('The genre with the given ID has been updated');
    }).catch(err => {
        return res.status(404).send(err);
    })
});

function validateGenres(genre){
    const schema = Joi.object({
        name: Joi.string().min(5).required().max(50)
    });

    return schema.validate(genre);
}
module.exports = router;