
    const db = require('../db');
    const urlDBOrigem = "mysql://root:root@localhost:3306/fa";
    const urlDBDestino = "mysql://root:root@ipdahostgator:3306/biahua";

    async function buscarFamiliasOrigem(req, res, url) {
        const pagInd = req.params.pag > 1 ? 20 * req.params.pag : 0
        const conn = await db.connect('origem');
        const query = await conn.query("select lf_livro_cod, lf_nome, lf_sobrenome, lf_dt_nas, lf_dt_mor, lf_nac_cidade, lf_morte_lugar, lf_nick, lf_livro_obs,lf_conjugue_nome, lf_conjugue_sobrenome, lf_conjugue_nas, lf_conjugue_morte, lf_conjugue_morte_lugar, lf_conjugue_nac_cidade, lf_conjugue_nick, lf_conjugue_casamento_local, lf_conjugue_casamento_dt,lf_conjugue_obs, lf_conjugue_pai_nome, lf_conjugue_pai_nas, lf_conjugue_pai_nac_cidade, lf_conjugue_pai_morte,lf_conjugue_pai_morte_cidade,lf_conjugue_mae_nome, lf_conjugue_mae_nas, lf_conjugue_mae_nac_cidade, lf_conjugue_mae_morte,lf_conjugue_mae_morte_cidade, lf_conjugue_pais_casa_local, lf_conjugue_pais_casa_dt from tbl_cli where lf_livro_cod is not null and lf_livro_cod <> '' order by cod_livro_1, cod_livro_2, cod_livro_3, cod_livro_4, cod_livro_5, cod_livro_6, cod_livro_7 limit 20 offset "+pagInd);
        
        return query[0];

    } 
    
    async function buscarPessoaFamiliaOrigem(req, res, cod_livro_pessoa) {

        const conn = await db.connect('origem');
        const query = await conn.query("select lf_livro_cod, lf_nome, lf_sobrenome from tbl_cli where lf_livro_cod = ?", [cod_livro_pessoa]);
        return query[0];

    }  

    async function insertTblPostFamilia(req, res, familiaSQL) {

        const conn = await db.connect('origem');
        const query = await conn.query("select lf_livro_cod, lf_nome, lf_sobrenome from tbl_cli where lf_livro_cod = ?", [cod_livro_pessoa]);
        return query[0];

    }  

    module.exports = {buscarFamiliasOrigem, buscarPessoaFamiliaOrigem, insertTblPostFamilia}