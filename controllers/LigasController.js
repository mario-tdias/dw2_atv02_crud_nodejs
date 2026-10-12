import express from "express";
import Liga from "../models/Ligas.js";

const route = express.Router();

route.get("/ligas", function(req, res) {
    Liga.findAll().then(ligas => {
        res.render("ligas", {
            ligas: ligas
        });
    }).catch(error => {
        console.log(`Ocorreu um erro ao listar as ligas. ERRO: ${error}`);
    });
});

// Rota de cadastro de ligas
route.post("/ligas/cadastrar", function(req, res) {
    // Capturando os dados vindos do formulário
    const { nome, pais, maiorCampeao, imagem } = req.body;

    // Chamando o model Clube para gravar no banco
    Liga.create({
        nome: nome,
        pais: pais,
        maiorCampeao: maiorCampeao,
        imagem: imagem,
    }).then(() => {
        res.redirect("/ligas");
    }).catch(error => {
        console.log(`Ocorreu um erro ao cadastrar a liga. ERRO: ${error}`);
    });
});

//ROTA EXCLUIR a liga
//:id -> Cria um parâmetro na rota
route.get("/ligas/excluir/:id", (req, res)=> {
    //Criando uma variável p/ armazenar o parâmetro que chega pela URL
    const id = req.params.id;
    //Chamando o model e pedindo para exluir a liga
    Liga.destroy({
        where:{
            id: id,
        },
    }).then(()=>{
        res.redirect("/ligas");
    }).catch(error=>{
        console.log(`Ocorreu um erro ao excluir a liga. ERRO: ${error}`);
    });
});


//ROTA DE EDIÇÃO DE ligas
route.get("/ligas/editar/:id", (req, res)=>{
    //Coletando o parâmetro do URL
    const id = req.params.id;
    //Buscando a liga no banco pelo ID
    Liga.findByPk(id).then(liga=>{
        res.render("ligasEditar",{
            //enviando um objeto com os dados da liga para a página
            liga: liga,
        })
    }).catch(error=>(`Ocorreu um erro ao buscar a liga. ERRO${error}`))
})

// rota que altera a liga

route.post("/ligas/alterar", (req,res) =>{
    //coletando os dados do formulário
    const id = req.body.id;
    const nome = req.body.nome;
    const pais = req.body.pais;
    const maiorCampeao = req.body.maiorCampeao;
    const imagem = req.body.imagem;
    //Chamando o model e pedindo para alterar no banco de dados
    Liga.update(
        {
            nome: nome,
            pais: pais,
            maiorCampeao: maiorCampeao,
            imagem: imagem,
            
        },
        {
            where: {id: id}

        }).then(()=>{
        res.redirect("/ligas");
    }).catch(error => {
        console.log(`Ocorreu um erro ao alterar a liga. ERRO: ${error}`);
    });    
});


export default route;