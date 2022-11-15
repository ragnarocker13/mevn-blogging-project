// POSTS.JS file is where we declare our REST actions
// and initialize the mongodb connection, database and collection

// Declare express and mongodb variables
const express = require('express');
const mongodb = require('mongodb');

// declare the Router variable
const router = express.Router();

// SET THE ROUTES

// Get Posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

router.get('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({ _id: new mongodb.ObjectId(req.params.id) }).toArray());
});

// Add Post
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        title: req.body.title,
        body: req.body.body,
        author: req.body.author,
        category: req.body.category,
        createdAt: new Date()
    });
    res.status(201).send();
});

// Delete Post
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    res.status(200).send();
});


// connect to the mongodb collection

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://ragnarocker:Nandayo1@cluster0.njb7v.gcp.mongodb.net/test', { 
        useNewUrlParser: true 
    })

    return client.db('blog').collection('posts')
}



module.exports = router;