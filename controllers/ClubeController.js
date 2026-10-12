import express from "express";
import Clube from "../models/Clube.js";

const route = express.Router();

route.get("/clubes", function(req, res) {
    Clube.findAll().then(clubes => {
        res.render("clubes", {
            clubes: clubes
        });
    }).catch(error => {
        console.log(`Ocorreu um erro ao listar os clubes. ERRO: ${error}`);
    });
});

// Rota de cadastro de clubes
route.post("/clubes/cadastrar", function(req, res) {
    // Capturando os dados vindos do formulário
    const { nome, pais, estadio, imagem } = req.body;

    // Chamando o model Clube para gravar no banco
    Clube.create({
        nome: nome,
        pais: pais,
        estadio: estadio,
        imagem: imagem,
    }).then(() => {
        res.redirect("/clubes");
    }).catch(error => {
        console.log(`Ocorreu um erro ao cadastrar o clube. ERRO: ${error}`);
    });
});

//ROTA EXCLUIR clube
//:id -> Cria um parâmetro na rota
route.get("/clubes/excluir/:id", (req, res)=> {
    //Criando uma variável p/ armazenar o parâmetro que chega pela URL
    const id = req.params.id;
    //Chamando o model e pedindo para exluir o clube
    Clube.destroy({
        where:{
            id: id,
        },
    }).then(()=>{
        res.redirect("/clubes");
    }).catch(error=>{
        console.log(`Ocorreu um erro ao excluir o clube. ERRO: ${error}`);
    });
});

//ROTA DE EDIÇÃO DE clube
route.get("/clubes/editar/:id", (req, res)=>{
    //Coletando o parâmetro do URL
    const id = req.params.id;
    //Buscando o clube no banco pelo ID
    Clube.findByPk(id).then(clube=>{
        res.render("clubeEditar",{
            //enviando um objeto com os dados do clube para a página
            clube: clube,
        })
    }).catch(error=>(`Ocorreu um erro ao buscar o clube. ERRO${error}`))
})

// rota que altera o clube

route.post("/clubes/alterar", (req,res) =>{
    //coletando os dados do formulário
    const id = req.body.id;
    const nome = req.body.nome;
    const pais = req.body.pais;
    const estadio = req.body.estadio;
    const imagem = req.body.imagem;
    //Chamando o model e pedindo para alterar no banco de dados
    Clube.update(
        {
            nome: nome,
            pais: pais,
            estadio: estadio,
            imagem: imagem,
            
        },
        {
            where: {id: id}

        }).then(()=>{
        res.redirect("/clubes");
    }).catch(error => {
        console.log(`Ocorreu um erro ao alterar o clube. ERRO: ${error}`);
    });    
});


export default route;