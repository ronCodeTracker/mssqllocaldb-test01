



import express from 'express';
//const express = require('express');

//import { default as sql } from 'msnodesqlv8';
//import sql from 'msnodesqlv8';
import sql from 'mssql';







const app = express();






app.get('/', (req, res) => {
    res.send('Hello World!');
});








app.listen(3000, () => {
    console.log('Server is listening on port 3000!');
});






