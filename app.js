const express = require('express');
//const mysql = require('mysql');

const app = express();
// app.use(express.json);

app.set('view engine', 'ejs');

app.use('/', require('./router.js'));




// var conexion = mysql.createConnection({
//     host:'CE2020052117001.dnssw.net',
//     user:'adm7882',
//     password:'d@qaKUyvT8',
//     database:'portal_db',
// });

// Provem la connexió
// conexion.connect(function(error){
//     if(error){
//         throw error;
//     }else{
//         console.log('Connexió correcte a la DB');
//     }    
// })



// Mostra tots els articles
app.get('/api/articulos', (req, res)=>{
        conexion.query('SELECT * FROM articulos', (error, filas) =>{
            if(error){
                throw error;  
            }else{
                res.send(filas);
            }
        })
});

//Mostrar UN article en particular
app.get('/api/articulos/:id', (req, res)=>{
    conexion.query('SELECT * FROM articulos WHERE id = ?', [req.params.id], (error, fila) =>{
        if(error){
            throw error;  
        }else{
            // res.send(fila); //Ens retorna tota la fila
            res.send(fila[0].descripcion); //Ens retorna només el camp descripcion
        }
    })
});

//Crear UN article
app.post('/api/articulos', (req,res)=>{
    let data = {descripcion:req.body.descripcion, precio:req.body.precio, stock:req.body.stock};
    let sql = 'INSERT INTO articulos SET ?'
    conexion.query(sql, data, function(error, results){
        if(error){
            throw error;  
        }else{
            // res.send(fila); //Ens retorna tota la fila
            res.send(results); //Ens retorna només el camp descripcion
        }
    });
});

app.listen('3000', ()=>{
    console.log('Server Up!');
});