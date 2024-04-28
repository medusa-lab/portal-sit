const mysql = require('mysql');

//Establim els paràmetres de connexió
var conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'portal_db' 
});

conexion.connect((error)=>{
    if (error){
        console.error('Error de connexió: '+error);
        return
    }
    console.log('Connexió correcte a la DB :-)');
})

module.exports = conexion;