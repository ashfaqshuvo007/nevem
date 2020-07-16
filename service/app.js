// node Backend Server Entry
const userApi = require('./api/userApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Registered api routing
app.use('/api/user', userApi);

// Monitor port
app.listen(PORT);
console.log(`Backend Server is running on port ${PORT}`);