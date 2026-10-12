
import express from 'express';

import connection from './config/sequelize-config.js';

const app = express();

import Clube from "./models/Clube.js";
import Ligas from "./models/Ligas.js";
import Jogadores from "./models/Jogadores.js";
import Estadios from "./models/Estadios.js";

app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');

app.use(express.static("public"));

connection.authenticate().then(()=>{

    console.log("Conexão com o Banco de Dados realidzada com sucesso!");

}).catch((error)=>{
    console.log(`Ocorreu um erro ao se conectar ao banco de dados. Erro: ${error}`)
})

const DB_NAME = "futebol_infos";
connection.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME};`).then(()=>{
    console.log(`O banco de dados ${DB_NAME} está criado!`)
}).catch((error)=>{
    console.log(`Ocorreu um erro ao criar o banco de daods. Erro: ${error}`);
});


import ClubeController from './controllers/ClubeController.js';
import LigasController from './controllers/LigasController.js';
import JogadoresController from './controllers/JogadoresControllers.js';
import EstadiosController from './controllers/EstadiosController.js';

app.use("/",ClubeController);
app.use("/",LigasController);
app.use("/", JogadoresController);
app.use("/", EstadiosController);


app.get("/", (req, res) =>{
    res.render('index');
});



const port = 8080;
app.listen(port, (error) => {

    if(error){
        console.log(`Ocorreu um erro ao iniciar o servidor. Erro: ${error}`)

    } else {
        console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
    }
})