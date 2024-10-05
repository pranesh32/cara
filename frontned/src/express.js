const express = require("express");
const app = express();
const fs = require('fs');
const path = require('path');
const PORT = 3003;

app.use(bodyParser.urlencoded({extended: false}));

app.get('/home', (req, res) => {
    // Read the content of the JavaScript file
    fs.readFile('home.js', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Internal Server Error');
        }

        // Send the content as the response
        res.send(data);
    });
});

app.get('/about', (req, res) => {
    // Read the content of the JavaScript file
    fs.readFile('about.js', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Internal Server Error');
        }

        // Send the content as the response
        res.send(data);
    });
});

app.get('/contact', (req, res) => {
    // Read the content of the JavaScript file
    fs.readFile('contact.js', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Internal Server Error');
        }

        // Send the content as the response
        res.send(data);
    });
});

// Fix: Add the missing closing parenthesis
app.post("/contact",(req,res) => {
    res.send('<h1>done</h1>'); // Wrap HTML content in quotes
    console.log("name");
});

app.listen(PORT, () => console.log("Server started on port", PORT));
