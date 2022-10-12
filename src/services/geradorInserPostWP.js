const fs = require('fs');

const gerarScriptInsertPost = async(req, res, pessoa) => {
    
    let htmlWP = "'" 
    htmlWP += await gerarPrimeiroParagrafoHTML(pessoa); 
    htmlWP += await gerarSegundoParagrafoHTML(pessoa); 
    
    if (pessoa.filhos != null && pessoa.filhos.length > 0) {
        htmlWP += await gerarTerceiroParagrafoHTML(pessoa.filhos); 
    }
    
    htmlWP += "'"
    
    stringSQL = 
    "#----------------------------------INSERT WP_POSTS----------------------------\n"+
    "INSERT INTO oarticoc_wp809.wpst_posts(post_author,post_date,post_date_gmt,post_content,post_title,post_excerpt,post_status,comment_status,ping_status,post_name,to_ping,pinged,post_modified,post_modified_gmt,post_content_filtered,post_parent,guid,menu_order,post_type,comment_count) \nVALUES "+
    "(1, '2022-10-10 21:30:00', '2022-10-10 21:30:00', "+htmlWP+", '"+pessoa.titulo+"', '', 'publish', 'closed', 'closed','"+replaceDot(pessoa.cod_livro)+"', '', '', '2022-10-10 21:30:00', '2022-10-10 21:30:00', '', 0, '', 0, 'post', 0);\n"+
    
    "#----------------------------------INSERT WP_TERM_RELATIONSHIPS----------------------------\n"+
    "INSERT INTO oarticoc_wp809.wpst_term_relationships (object_id,term_taxonomy_id,term_order) \nVALUES"+
    "((select max(id) from wpst_posts), 4, 0);\n"
    "                                                                                           \n";


    console.log(stringSQL);
    
    await gerarScript(stringSQL)
    return stringSQL;
}

const gerarPrimeiroParagrafoHTML = async(pessoa) => {
    //Informações da pessoa
    let pInicio = "<!-- wp:paragraph -->"+"\n"+"<p>"
    let pConteudo = "<strong>"+pessoa.nome_completo+"</strong> ★ "
    let pFim = "</p>"+"\n"+"<!-- /wp:paragraph -->\n"
    
    if (pessoa.data_nascimento != null && pessoa.data_nascimento != '') {
        pConteudo += pessoa.data_nascimento;
    } else {
        pConteudo += "00/00/00";
    }
    
    if (pessoa.local_nascimento != null && pessoa.local_nascimento != '') {
        pConteudo += " - "+pessoa.local_nascimento;
    } 
    
    if (pessoa.data_morte != null && pessoa.data_morte != '') {
        pConteudo +=' ✟ '+pessoa.data_morte;
    } 
    
    if (pessoa.local_morte != null && pessoa.local_morte != '') {
        pConteudo += " - "+pessoa.local_morte;
    } 

    if ( (pessoa.apelido != null && pessoa.apelido != '') || (pessoa.observacao != null && pessoa.observacao != '')) {
        pConteudo += "<br>";
        if (pessoa.apelido !=null && pessoa.apelido !='') {
            pConteudo += 'Apelido '+pessoa.apelido +' ';
        } 
        if (pessoa.observacao !=null && pessoa.observacao != '') {
            pConteudo += pessoa.observacao;
        }
    }

    return pInicio + pConteudo + pFim
}

const gerarSegundoParagrafoHTML = async(pessoa) => {
    //Informações do conjuge
    let pInicio = "<!-- wp:paragraph -->"+"\n"+"<p>"
    let pConteudo = ""
    let pFim = "</p>"+"\n"+"<!-- /wp:paragraph -->\n"
    
    if (pessoa.nome_completo_conjuge !=null && pessoa.nome_completo_conjuge !='' ) {
        pConteudo += "Casado(a)";
    } 
    
    if (pessoa.data_casamento != null && pessoa.data_casamento != '') {
        pConteudo += " em "+ pessoa.data_casamento;
    } 

    if (pessoa.local_casamento != null && pessoa.local_casamento != '') {
        pConteudo += " em "+ pessoa.local_casamento;
    }  
    
    if (pessoa.nome_completo_conjuge !=null && pessoa.nome_completo_conjuge !='' ) {
        pConteudo += " com:<br>"+
        "<strong>"+pessoa.nome_completo_conjuge+"</strong>";
    } 
    
    if (pessoa.data_nascimento_conjuge !=null && pessoa.data_nascimento_conjuge !='' && pessoa.nome_completo_conjuge != null) {
        pConteudo += ' ★ ' + pessoa.data_nascimento_conjuge;
    } else if(pessoa.nome_completo_conjuge != null && pessoa.nome_completo_conjuge != '') {
        pConteudo +=' ★ 00/00/0000 ';
    } 
    
    if (pessoa.local_nascimento_conjuge !=null && pessoa.local_nascimento_conjuge !='') {
        pConteudo += ' - ' + pessoa.local_nascimento_conjuge;
    }

    if (pessoa.data_morte_conjuge !=null && pessoa.data_morte_conjuge !='') {
        pConteudo += '✟ ' + pessoa.data_morte_conjuge;
    }
    
    if (pessoa.local_morte_conjuge !=null && pessoa.local_morte_conjuge !='') {
        pConteudo += " - "+ pessoa.local_morte_conjuge;
    } 
    
    if (pessoa.pai_nome_conjuge !=null && pessoa.pai_nome_conjuge !='') {
        pConteudo += '<br>Pais dele(a): ' + pessoa.pai_nome_conjuge;
    }
    
    if (pessoa.pai_data_nascimento_conjuge !=null && pessoa.pai_data_nascimento_conjuge !='') {
        pConteudo += ' ★ '+pessoa.pai_data_nascimento_conjuge;
    }

    if (pessoa.pai_local_nascimento_conjuge !=null && pessoa.pai_local_nascimento_conjuge !='') {
        pConteudo += ' - '+pessoa.pai_local_nascimento_conjuge;
    }

    if (pessoa.pai_data_morte_conjuge !=null && pessoa.pai_data_morte_conjuge !='') {
        pConteudo += ' ✟ '+pessoa.pai_data_morte_conjuge;
    }

    if (pessoa.pai_local_morte_conjuge !=null && pessoa.pai_local_morte_conjuge !='') {
        pConteudo += ' - '+pessoa.pai_local_morte_conjuge;
    }

    if (pessoa.mae_nome_conjuge !=null && pessoa.mae_nome_conjuge !='') {
        pConteudo += ' e ' + pessoa.mae_nome_conjuge;
    }

    if (pessoa.mae_data_nascimento_conjuge !=null && pessoa.mae_data_nascimento_conjuge !='') {
        pConteudo +=' ★ '+pessoa.mae_data_nascimento_conjuge;
    }

    if (pessoa.mae_local_nascimento_conjuge !=null && pessoa.mae_local_nascimento_conjuge !='') {
        pConteudo += ' - '+pessoa.mae_local_nascimento_conjuge;
    }

    if (pessoa.mae_data_morte_conjuge !=null && pessoa.mae_data_morte_conjuge !='') {
        pConteudo += ' ✟ '+pessoa.mae_data_morte_conjuge;
    }

    if (pessoa.mae_local_morte_conjuge !=null && pessoa.mae_local_morte_conjuge !='') {
        pConteudo += ' - '+pessoa.mae_local_morte_conjuge;
    }

    if ((pessoa.pais_local_casamento_conjuge !=null && pessoa.pais_local_casamento_conjuge !='') || 
        (pessoa.pais_data_casamento_conjuge !=null && pessoa.pais_data_casamento_conjuge !='')) {
        pConteudo += ' casados';
        if (pessoa.pais_data_casamento_conjuge !=null && pessoa.pais_data_casamento_conjuge !='') {
            pConteudo += ' em '+pessoa.pais_data_casamento_conjuge;
        }
        if (pessoa.pais_local_casamento_conjuge !=null && pessoa.pais_local_casamento_conjuge !='') {
            pConteudo += ' em '+pessoa.pais_local_casamento_conjuge;
        }
    }
    
    return pInicio + pConteudo + pFim

}

const gerarTerceiroParagrafoHTML = async(filhos) => {
    //Informações dos filhos
    let pInicio = "<!-- wp:paragraph -->"+"\n"+"<p>"
    let pConteudo = "Filhos:<br>"
    filhos.forEach(filho => {
        pConteudo += "<a href=\"https://familiamezzomo.com.br/"+replaceDot(filho.lf_livro_cod)+"\">"+filho.lf_livro_cod +" - " +filho.lf_nome +" "+ filho.lf_sobrenome+"</a><br>"
    });
    let pFim = "</p>"+"\n"+"<!-- /wp:paragraph -->"

    return pInicio + pConteudo + pFim
}

const gerarScript = async(dataSQL) => {
    fs.appendFile('insert.sql', dataSQL, (err) => {
        if (err)  throw err;
        console.log("Arquivo criado com sucesso")
    })
}

const replaceDot = (cod_livro) => {
    const res = cod_livro.toString().split('.').join('-')
    return res
}

module.exports = {gerarScriptInsertPost}