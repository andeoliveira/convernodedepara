//Dependências
const utils = require('../utils/utils');

// Transforma objetos/listas do banco origem em objeto/listas pessoa e filhos
const converterFamiliaPessoa = async(pessoa) => {

    const objFamilia = {};
    objFamilia.cod_livro = pessoa.lf_livro_cod;
    objFamilia.titulo = formatarTituloPost(pessoa);
    
    objFamilia.nome_completo = utils.formatarNome(pessoa.lf_nome, pessoa.lf_sobrenome);
    objFamilia.data_nascimento = pessoa.lf_dt_nas;
    objFamilia.data_morte = pessoa.lf_dt_mor;
    objFamilia.local_nascimento = pessoa.lf_nac_cidade ? utils.primeiraLetraMaiuscula(pessoa.lf_nac_cidade) : undefined;
    objFamilia.local_morte = pessoa.lf_morte_lugar ? utils.primeiraLetraMaiuscula(pessoa.lf_morte_lugar) : undefined;
    objFamilia.apelido = pessoa.lf_nick ? utils.primeiraLetraMaiuscula(pessoa.lf_nick) : undefined;
    
    objFamilia.observacao = pessoa.lf_livro_obs ? utils.capitalize(pessoa.lf_livro_obs.toLowerCase()) : undefined;

    objFamilia.nome_completo_conjuge = utils.formatarNome(pessoa.lf_conjugue_nome, pessoa.lf_conjugue_sobrenome);
    objFamilia.data_nascimento_conjuge = pessoa.lf_conjugue_nas;
    objFamilia.data_morte_conjuge = pessoa.lf_conjugue_morte;
    objFamilia.local_morte_conjuge = pessoa.lf_conjugue_morte_lugar ? utils.primeiraLetraMaiuscula(pessoa.lf_conjugue_morte_lugar) : undefined;
    objFamilia.local_nascimento_conjuge = pessoa.lf_conjugue_nac_cidade ? utils.primeiraLetraMaiuscula(pessoa.lf_conjugue_nac_cidade) : undefined;
    objFamilia.apelido_conjuge = pessoa.lf_conjugue_nick;

    objFamilia.local_casamento = pessoa.lf_conjugue_casamento_local ? utils.primeiraLetraMaiuscula(pessoa.lf_conjugue_casamento_local) : undefined;
    objFamilia.data_casamento = pessoa.lf_conjugue_casamento_dt;

    objFamilia.observacao_conjuge = pessoa.lf_conjugue_obs ? utils.capitalize(pessoa.lf_conjugue_obs.toLowerCase()) : undefined;

    objFamilia.pai_nome_conjuge = pessoa.lf_conjugue_pai_nome ? utils.primeiraLetraMaiuscula(pessoa.lf_conjugue_pai_nome) : undefined;
    objFamilia.pai_data_nascimento_conjuge = pessoa.lf_conjugue_pai_nas;
    objFamilia.pai_local_nascimento_conjuge = pessoa.lf_conjugue_pai_nac_cidade ? utils.primeiraLetraMaiuscula(pessoa.lf_conjugue_pai_nac_cidade) : undefined;
    objFamilia.pai_data_morte_conjuge = pessoa.lf_conjugue_pai_morte;
    objFamilia.pai_local_morte_conjuge = pessoa.lf_conjugue_pai_morte_cidade ? utils.primeiraLetraMaiuscula(pessoa.lf_conjugue_pai_morte_cidade) : undefined;
    
    objFamilia.mae_nome_conjuge = pessoa.lf_conjugue_mae_nome ? utils.primeiraLetraMaiuscula(pessoa.lf_conjugue_mae_nome) : undefined;
    objFamilia.mae_data_nascimento_conjuge = pessoa.lf_conjugue_mae_nas;
    objFamilia.mae_local_nascimento_conjuge = pessoa.lf_conjugue_mae_nac_cidade ? utils.primeiraLetraMaiuscula(pessoa.lf_conjugue_mae_nac_cidade) : undefined;
    objFamilia.mae_data_morte_conjuge = pessoa.lf_conjugue_mae_morte;
    objFamilia.mae_local_morte_conjuge = pessoa.lf_conjugue_mae_morte_cidade ? utils.primeiraLetraMaiuscula(pessoa.lf_conjugue_mae_morte_cidade) : undefined;

    objFamilia.pais_local_casamento_conjuge = pessoa.lf_conjugue_pais_casa_local ? utils.primeiraLetraMaiuscula(pessoa.lf_conjugue_pais_casa_local) : '';
    objFamilia.pais_data_casamento_conjuge = pessoa.lf_conjugue_pais_casa_dt;
    
    return objFamilia;
}

const formatarTituloPost = (pessoa) => {

    let titulo = pessoa.lf_livro_cod

    if (pessoa.lf_nome) {
        pessoa.lf_nome = utils.primeiraLetraMaiuscula(pessoa.lf_nome.toLowerCase());
        titulo = titulo + " " +pessoa.lf_nome
    }

    if (pessoa.lf_sobrenome) {
        pessoa.lf_sobrenome = utils.primeiraLetraMaiuscula(pessoa.lf_sobrenome.toLowerCase());
        titulo = titulo +" " + pessoa.lf_sobrenome
    }

    if (pessoa.lf_conjugue_nome) {
        pessoa.lf_conjugue_nome = utils.primeiraLetraMaiuscula(pessoa.lf_conjugue_nome.toLowerCase());
        titulo = titulo + " e " + pessoa.lf_conjugue_nome
    }

    if (pessoa.lf_conjugue_sobrenome) {
        pessoa.lf_conjugue_sobrenome = utils.primeiraLetraMaiuscula(pessoa.lf_conjugue_sobrenome.toLowerCase());
        titulo = titulo + " " + pessoa.lf_conjugue_sobrenome
    }

    return titulo
}


module.exports = {converterFamiliaPessoa}