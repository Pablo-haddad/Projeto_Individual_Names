var quizModel = require("../models/quizModel");

function cadastrarDadosQuiz(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idUsuarioQuiz = req.body.id_UsuarioServer;
    var totalAcertos = req.body.totalAcertosServer;

    // Faça as validações dos valores
    if (idUsuarioQuiz == undefined) {
        res.status(400).send("Seu idUsuario está undefined!");
    } else if (totalAcertos == undefined) {
        res.status(400).send("Seu totalAcertos está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.cadastrarDadosQuiz(idUsuarioQuiz, totalAcertos)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrarDadosQuiz
}