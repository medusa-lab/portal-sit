const express = require('express');
const router = express.Router();

const conexion = require('./database/db.js');

// Ruta a la pàgina per MOSTRAR tots els registres de la taula users => 'localhost:3000'
router.get('/', (req, res)=>{
    conexion.query('SELECT * FROM users', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('dashboard-admin.ejs', {results:results});
        }
    })
})

// Ruta a la pàgina per CREAR registres =>'localhost:3000/create'
router.get('/create', (req, res)=>{
    res.render('create.ejs');
})

module.exports = router;