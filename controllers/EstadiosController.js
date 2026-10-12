import express from "express";
import Estadio from "../models/Estadios.js";

const route = express.Router();

route.get("/estadios", function(req, res) {
    Estadio.findAll().then(estadios => {
        res.render("estadios", {
            estadios: estadios,
        });
    }).catch(error => {
        console.log(`Ocorreu um erro ao listar os estádios. ERRO: ${error}`);
    });
});



// Rota de cadastro de estádios
route.post("/estadios/cadastrar", function(req, res) {
    // Capturando os dados vindos do formulário
    const { nome, clube, cidade, fundacao, imagem } = req.body;

    // Chamando o model Estadio para gravar no banco
    Estadio.create({
        nome: nome,
        clube: clube,
        cidade: cidade,
        fundacao: fundacao,
        imagem: imagem,
    }).then(() => {
        res.redirect("/estadios");
    }).catch(error => {
        console.log(`Ocorreu um erro ao cadastrar o estádio. ERRO: ${error}`);
    });
});

//ROTA EXCLUIR estádio
//:id -> Cria um parâmetro na rota
route.get("/estadios/excluir/:id", (req, res)=> {
    //Criando uma variável p/ armazenar o parâmetro que chega pela URL
    const id = req.params.id;
    //Chamando o model e pedindo para exluir o estádio
    Estadio.destroy({
        where:{
            id: id,
        },
    }).then(()=>{
        res.redirect("/estadios");
    }).catch(error=>{
        console.log(`Ocorreu um erro ao excluir o clube. ERRO: ${error}`);
    });
});

//ROTA DE EDIÇÃO DE estádios
route.get("/estadios/editar/:id", (req, res)=>{
    //Coletando o parâmetro do URL
    const id = req.params.id;
    //Buscando o estádio no banco pelo ID
    Estadio.findByPk(id).then(estadio=>{
        res.render("estadiosEditar",{
            //enviando um objeto com os dados do estádio para a página
            estadio: estadio,
        })
    }).catch(error=>(`Ocorreu um erro ao buscar o estádio. ERRO${error}`))
})

// rota que altera o estádio

route.post("/estadios/alterar", (req,res) =>{
    //coletando os dados do formulário
    const id = req.body.id;
    const nome = req.body.nome;
    const clube = req.body.clube;
    const cidade = req.body.cidade;
    const fundacao = req.body.fundacao;
    const imagem = req.body.imagem;
    //Chamando o model e pedindo para alterar no banco de dados
    Estadio.update(
        {
            nome: nome,
            clube: clube,
            cidade: cidade,
            fundacao: fundacao,
            imagem: imagem,
            
        },
        {
            where: {id: id}

        }).then(()=>{
        res.redirect("/estadios");
    }).catch(error => {
        console.log(`Ocorreu um erro ao alterar o estádio. ERRO: ${error}`);
    });    
});


export default route;