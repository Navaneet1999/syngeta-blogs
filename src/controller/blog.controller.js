const express = require('express');
const router = express.Router();
var timeout = require('connect-timeout');
const Data = require('../models/blog.model')

//to post the all the data
router.post('', async(req,res)=>{
    try{
        const data = await Data.create(req.body);
        return res.status(201).send(data);
    } catch(e){
        return res.status(400).send({ message: e.message });
    }
});

//to get the data
router.get('', async(req,res)=>{
    try{
        const data = await Data.find().lean().exec();
        return res.status(202).send(data);
    } catch(e){
        return res.status(402).send({ message: e.message });
    }
});

// to sort by maximum likes
router.get('/maxlikes', async(req,res)=>{
    try{
        const data = await Data.find().sort({like:-1});
        return res.status(202).send(data);
    } catch(e){
        return res.status(402).send({ message: e.message });
    }
});

//to find by title
router.get('/findbytitle', async(req,res)=>{
    try{
        const data = await Data.find({title : req.body.location});
        return res.status(202).send(data);
    } catch(e){
        return res.status(402).send({ message: e.message });
    }
});

//to find by author
router.get('/findbyauthor', async(req,res)=>{
    try{
        const data = await Data.find({author : req.body.location});
        return res.status(202).send(data);
    } catch(e){
        return res.status(402).send({ message: e.message });
    }
});

//to updtate blog
router.patch('/:id', async(req,res)=>{
    try{
        const item = await Data.findByIdAndUpdate(req.params.id, req.body,{new:true}).lean().exec();
        return res.status(203).send(item);
    } catch(e){
        return res.status(403).send({message: e.message})
    }
})

// to view the blog
router.get('/:id', async(req,res)=>{
    try{
        const item = await Data.find(req.params.id);
        return res.status(204).send(item);
    } catch(e){
        return res.status(404).send({message: e.message})
    }
})


//to like the blog
router.patch('/:id/like', async(req,res)=>{
    try{
        const item = await Data.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(205).send(item);
    } catch(e){
        return res.status(405).send({message: e.message})
    }
})
module.exports = router;