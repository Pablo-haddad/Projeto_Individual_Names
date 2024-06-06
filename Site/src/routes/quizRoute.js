var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");


//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarDadosQuiz", function (req, res) {
    quizController.cadastrarDadosQuiz(req, res);
})
//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/exibirDashboard", function (req, res) {
    quizController.exibirDashboard(req, res);
})



module.exports = router;