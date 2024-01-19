



import express from 'express';
//const express = require('express');
// const sql = require('mssql/msnodesqlv8');




//import { default as sql } from 'msnodesqlv8';
//import sql from 'msnodesqlv8';
//import sql from 'mssql';


import  * as sql  from 'mssql';






const app = express();




var config2 = {
    "server": "COMPDEWO03",
    "database": "ch7db",
    
    
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


function getEmployees() {
    var dbConn = new sql.Connection(dbConfig);
    dbConn.connect().then(function () {
        var request = new sql.Request(dbConn);
        request.query("select * from notes").then(function (resp) {
            console.log(resp);
            dbConn.close();
        }).catch(function (err) {
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
}


app.get('/', (req, res) => {
    res.send('Hello World!');
});








app.listen(3000, () => {
    console.log('Server is listening on port 3000!');
});






