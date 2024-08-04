const express = require('express');
const axios = require('axios');
let books = require("./booksdb.js");
const public_users = express.Router();

// Base URL for your API (replace with the actual URL if different)
const API_BASE_URL = 'https://ezraearlsegu-5000.theianext-1-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai';

// Task 10: Get the list of books available in the shop using Promises
public_users.get('/books-promises', (req, res) => {
    axios.get(`${API_BASE_URL}/books`)
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            console.error("Error fetching books list:", error);
            res.status(500).json({ message: "Error fetching books list" });
        });
});

// Task 11: Get book details based on ISBN using Promises
public_users.get('/isbn-promises/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    axios.get(`${API_BASE_URL}/isbn/${isbn}`)
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            console.error(`Error fetching book details for ISBN ${isbn}:`, error);
            res.status(500).json({ message: `Error fetching book details for ISBN ${isbn}` });
        });
});

// Task 12: Get book details based on Author using Promises
public_users.get('/author-promises/:author', (req, res) => {
    const author = req.params.author;
    axios.get(`${API_BASE_URL}/author/${author}`)
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            console.error(`Error fetching books by author ${author}:`, error);
            res.status(500).json({ message: `Error fetching books by author ${author}` });
        });
});

// Task 13: Get book details based on Title using Promises
public_users.get('/title-promises/:title', (req, res) => {
    const title = req.params.title;
    axios.get(`${API_BASE_URL}/title/${title}`)
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            console.error(`Error fetching books with title ${title}:`, error);
            res.status(500).json({ message: `Error fetching books with title ${title}` });
        });
});

// Task 10: Get the list of books available in the shop using async-await
public_users.get('/books', async (req, res) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/books`);
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching books list:", error);
        res.status(500).json({ message: "Error fetching books list" });
    }
});

// Task 11: Get book details based on ISBN using async-await
public_users.get('/isbn/:isbn', async (req, res) => {
    const isbn = req.params.isbn;
    try {
        const response = await axios.get(`${API_BASE_URL}/isbn/${isbn}`);
        res.json(response.data);
    } catch (error) {
        console.error(`Error fetching book details for ISBN ${isbn}:`, error);
        res.status(500).json({ message: `Error fetching book details for ISBN ${isbn}` });
    }
});

// Task 12: Get book details based on Author using async-await
public_users.get('/author/:author', async (req, res) => {
    const author = req.params.author;
    try {
        const response = await axios.get(`${API_BASE_URL}/author/${author}`);
        res.json(response.data);
    } catch (error) {
        console.error(`Error fetching books by author ${author}:`, error);
        res.status(500).json({ message: `Error fetching books by author ${author}` });
    }
});

// Task 13: Get book details based on Title using async-await
public_users.get('/title/:title', async (req, res) => {
    const title = req.params.title;
    try {
        const response = await axios.get(`${API_BASE_URL}/title/${title}`);
        res.json(response.data);
    } catch (error) {
        console.error(`Error fetching books with title ${title}:`, error);
        res.status(500).json({ message: `Error fetching books with title ${title}` });
    }
});

module.exports.general = public_users;
