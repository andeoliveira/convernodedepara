const gerarScriptInsertPost = async(req, res, pessoa) => {
    let paragrafoHTML = await gerarParagrafoHTML(pessoa); 
    stringSQL = 
    "INSERT INTO oarticoc_wp809.wpst_posts(ID,post_author,post_date,post_date_gmt,post_content,post_title,post_excerpt,post_status,comment_status,ping_status,post_name,to_ping,pinged,post_modified,post_modified_gmt,post_content_filtered,post_parent,guid,menu_order,post_type,comment_count) VALUES "+
    "(select (max(id) +1) from wpst_posts,1,'"+pessoa.titulo+"',"+paragrafoHTML+");\n"+
    "              \n"+
    "INSERT INTO oarticoc_wp809.wpst_term_relationships (object_id,term_taxonomy_id,term_order) VALUES"+
    "(select (max(id) +1) from wpst_term_relationships,4,0);\n";

    console.log(stringSQL);
}

const gerarParagrafoHTML = async(pessoa) => {
    let htmlWP =  "'<!-- wp:paragraph -->"+
        "<p><strong>"+pessoa.nome_completo+"</strong> ★ ";
    if (pessoa.data_nascimento != null && pessoa.data_nascimento != '') {
        htmlWP += pessoa.data_nascimento
    } else {
        htmlWP += "00/00/00";
    }
    if (pessoa.local_nascimento != null && pessoa.local_nascimento != '') {
        htmlWP += " - "+pessoa.local_nascimento
    } else {
        htmlWP += "";
    }
    if (pessoa.data_morte != null && pessoa.data_morte != '') {
        htmlWP +=' ✟ '+pessoa.data_morte
    } else {
        htmlWP += "<!-- /wp:paragraph -->'"
    }
    return htmlWP;
}

module.exports = {gerarScriptInsertPost}