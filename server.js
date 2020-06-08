const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.json({ limit: '1mb' }));
app.listen('3001', () => {
    console.log('Server Started on port 3001');
});



app.use((req, res, next) => {
    var allowedOrigins = ['http://localhost:3000', 'http://192.168.2.83:3000', 'http://127.0.0.1:3000'];
    var origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    //res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    //res.header('Access-Control-Allow-Origin', 'http://192.168.2.83:3000')
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Option, Authorization')
    return next()
})

//Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'scrim3'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Mysql Connected...');
});



app.get('/get', (req, res) => {
   

    //job_status
    //let sql = `SELECT sum(job_qty) from job where conf_job_type1_id = ${job_type} and job_appointed BETWEEN '${date_start}' and '${dat_end}' `
    let sql = " SELECT * from hero"
    console.log(sql);
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        /*console.log(result);
        let type_check = typeof (result);
        console.log("TYPE")
        console.log(type_check)
        console.log('log get : API');
        res.send(result);

        rawdata = JSON.stringify(result);
        console.log(typeof (rawdata));
        console.log(rawdata);
        console.log(result[0])
            */

    });
});
