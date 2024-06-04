var database = require("../database/config")

function cadastrarDadosQuiz(totalAcertos,idUsuarioQuiz) {   
    console.log('estou acessando o banco de dados porem sem sucesso, no cadastro')
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO quiz (pontosAcertos, fkusuario) VALUES ('${idUsuarioQuiz}', '${totalAcertos}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarDadosQuiz
};