const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../public')))

app.listen(3000, '127.0.0.1');
