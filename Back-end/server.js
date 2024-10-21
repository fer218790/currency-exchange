require("dotenv").config();

const sequelize = require('./db');
const express = require('express');
const server = express();
const cors = require('cors')


const PORT = 3001;
//Permite el intercomunicacion entre el json 
server.use(express.json());
server.use(express.urlencoded({extended:true}))
server.use(cors());
//Rutas :3
const {TipodeCanbio}=require("./models/TipodeCanbio");

//Respuesta de servidor atraves del puerto 3001
server.listen(PORT, () => {

    console.log(`Servidor iniciado en ${PORT} con exito`);
   
    sequelize.sync({ alter: true })
        .then((response) => {

            console.log('Db sincronizada mas na');
        })
        .catch((error) => {
            console.error(error);
        }

        )

})