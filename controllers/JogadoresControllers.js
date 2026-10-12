import express from "express";
import Jogador from "../models/Jogadores.js";

const route = express.Router();


route.get("/jogadores", function(req, res) {
    Jogador.findAll().then(jogadores => {
        res.render("jogadores", {
            jogadores: jogadores
        });
    }).catch(error => {
        console.log(`Ocorreu um erro ao listar os jogadores. ERRO: ${error}`);
    });
});

// Rota de cadastro dos jogadores
route.post("/jogadores/cadastrar", function(req, res) {
    // Capturando os dados vindos do formulário
    const { nome, clube, posicao, nacionalidade,  imagem } = req.body;

    // Chamando o model Clube para gravar no banco
    Jogador.create({
        nome: nome,
        clube: clube,
        posicao: posicao,
        nacionalidade: nacionalidade,
        imagem: imagem,
    }).then(() => {
        res.redirect("/jogadores");
    }).catch(error => {
        console.log(`Ocorreu um erro ao cadastrar o jogador. ERRO: ${error}`);
    });
});

//ROTA EXCLUIR jogador
//:id -> Cria um parâmetro na rota
route.get("/jogadores/excluir/:id", (req, res)=> {
    //Criando uma variável p/ armazenar o parâmetro que chega pela URL
    const id = req.params.id;
    //Chamando o model e pedindo para exluir o jogador
    Jogador.destroy({
        where:{
            id: id,
        },
    }).then(()=>{
        res.redirect("/jogadores");
    }).catch(error=>{
        console.log(`Ocorreu um erro ao excluir o jogador. ERRO: ${error}`);
    });
});



//ROTA DE EDIÇÃO DE jogadores
route.get("/jogadores/editar/:id", (req, res)=>{
    //Coletando o parâmetro do URL
    const id = req.params.id;
    //Buscando o jogador no banco pelo ID
    Jogador.findByPk(id).then(jogador=>{
        res.render("jogadoresEditar",{
            //enviando um objeto com os dados do jogador para a página
            jogador: jogador,
        })
    }).catch(error=>(`Ocorreu um erro ao buscar o jogador. ERRO${error}`))
})

// rota que altera o jogador

route.post("/jogadores/alterar", (req,res) =>{
    //coletando os dados do formulário
    const id = req.body.id;
    const nome = req.body.nome;
    const clube = req.body.clube;
    const posicao = req.body.posicao;
    const nacionalidade = req.body.nacionalidade;
    const imagem = req.body.imagem;
    //Chamando o model e pedindo para alterar no banco de dados
    Jogador.update(
        {
            nome: nome,
            clube: clube,
            posicao: posicao,
            nacionalidade: nacionalidade,
            imagem: imagem,
            
        },
        {
            where: {id: id}

        }).then(()=>{
        res.redirect("/jogadores");
    }).catch(error => {
        console.log(`Ocorreu um erro ao alterar o jogador. ERRO: ${error}`);
    });    
});


export default route;