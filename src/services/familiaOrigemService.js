//Dependências
const familiaRepo = require('../repositories/familiaRepository')
const familiaDestino = require('./familiaDestinoService')
const familiaFilhos = require('./familiaFilhosService')
const wpServicePost = require('./geradorInserPostWP')

//Busca no repositorio as familias cadastradas na base origem
const carregarListaPessoas = async (req, res) => {
    
    const resSQL = await familiaRepo.buscarFamiliasOrigem(req, res);

    if (resSQL && resSQL.length > 0) {
        const arrObjFamilia = await gerarFamiliaPessoa(resSQL, req, res);
        return arrObjFamilia
    }

}

//Após obtenção do resultado da busca SQL nos percore item a item para transformar os objetos.
const gerarFamiliaPessoa = async(resSQL, req, res) => {
    
    const arrPessoaFamilia = []

    for (let item of resSQL) {
        
        try {

            let pessoa = await familiaDestino.converterFamiliaPessoa(item)
            let filhos = await familiaFilhos.carregar(req, res, pessoa.cod_livro)
            pessoa.filhos = filhos 
            await wpServicePost.gerarScriptInsertPost(req, res, pessoa);
            arrPessoaFamilia.push(pessoa);
            
        } catch (error) {
            console.log('error:' +error);
        }
        
    }

    return arrPessoaFamilia
}

module.exports = {carregarListaPessoas}