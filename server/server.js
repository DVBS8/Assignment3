const express = require('express');
const path = require('path');
const app = require('./app'); 
const morgan = require('morgan');
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
// Serve static files
app.use(express.static(path.join(__dirname, '../public')));
// Export the app for testing
module.exports = app;

if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
};

