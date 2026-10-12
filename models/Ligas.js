//Model Cliente
// Um model é a representação de uma entidade do sistema (tabela)

//importando o arquivo de conexão
import connection from "../config/sequelize-config.js";
//importando a biblioteca sequelize
import Sequelize from "sequelize";

//O método define() define a estrutura de uma tabela no banco
const Liga = connection.define('ligas', {
    //Atributos da tabela 'liga'
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pais:{
        type:Sequelize.STRING,
        allowNull: false
    },
    maiorCampeao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imagem:{
        type: Sequelize.STRING,
        allowNull: false
    }

});

//O método .sync() sicroniza a estrutura do model com a tabela do banco de dados 
//force:false sincroniza a tabela somente se não existir
Liga.sync({force: false});

//Exportando o módulo
export default Liga;