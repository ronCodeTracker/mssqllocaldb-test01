



import express from 'express';
//const express = require('express');

//import { default as sql } from 'msnodesqlv8';
//import sql from 'msnodesqlv8';
//import sql from 'mssql';







const app = express();




var config2 = {
    "server": "(localdb)\\localDBDemo",
    "database": "notes",
    "driver": "msnodesqlv8",
    "options": {
        "trustedConnection": true
    }
};




sql.connect(config2, function (err) {
    //if (err) debug(err);
    if (err) console.log(err);
    var request = new sql.Request();
    request.query('select * from notes', function (err, recordset) {
        if (err) console.log(err)
        //debug(recordset);
        console.log(recordset);
    });

});





app.get('/', (req, res) => {
    res.send('Hello World!');
});








app.listen(3000, () => {
    console.log('Server is listening on port 3000!');
});






