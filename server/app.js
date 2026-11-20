const express = require('express');
const path = require('path');
const app = express();
const db = require('./db'); // importing singleton
// middleware
app.use(express.json()); // parse json bodies 
// deliver static files from 'public folder'
app.use(express.static(path.join(__dirname, '../public')));
app.get('/FoodItems', async (req, res) => {
    try {
        const FoodItems = await db.getAll();
        res.json(FoodItems);
    } catch (error) {
        console.error('Error fetching FoodItems:', error);
        res.status(500).json({error: 'failed to fetch FoodItems' });
    }
    console.log();
});
//id validation
app.get('/FoodItems/:id', async (req, res, next) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) ) {
        return res.status(400).json({error: 'Invalid FoodItem ID'})
    }
    next();
});
app.use((req, res) => {
    res.status(404).json({error: 'FoodItem not found'});
});
module.exports = app;