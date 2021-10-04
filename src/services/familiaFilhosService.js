//Dependências
const familiaRepo = require('../repositories/familiaRepository')
const utils = require('../utils/utils');

const carregar = async (req, res, cod_livro) => {

    const filhos = []
    let numero = 1

    for (let i = 1; i<=numero; i++) {

        let cod_filho = cod_livro + "."+numero
        let resPessoaSQL = {}

        resPessoaSQL = await familiaRepo.buscarPessoaFamiliaOrigem(req, res, cod_filho)

        if (resPessoaSQL && resPessoaSQL !== 'undefined' && resPessoaSQL.length > 0) {
            
            numero++;
            filhos.push(gerarLinkFilhos(resPessoaSQL[0]));

        } else {
            numero--
        }

    }
    
    return filhos
      
}

function gerarLinkFilhos(pessoaSQL) {

    if (pessoaSQL.lf_nome) {
        pessoaSQL.lf_nome = utils.primeiraLetraMaiuscula(pessoaSQL.lf_nome)
    }

    if (pessoaSQL.lf_sobrenome) {
        pessoaSQL.lf_sobrenome = utils.primeiraLetraMaiuscula(pessoaSQL.lf_sobrenome)
    }

    const reg = new RegExp("\\.","g")
    const codigoReplace = pessoaSQL.lf_livro_cod.replace(reg, "-")
    pessoaSQL.link = "https://familiamezzomo.com/"+codigoReplace

    return pessoaSQL

}

module.exports = {carregar}