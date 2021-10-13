const gerarScriptInsertPost = async (req, res, pessoa) => {
    stringSQL = 
    "INSERT INTO oarticoc_wp809.wpst_posts(ID,post_author,post_date,post_date_gmt,post_content,post_title,post_excerpt,post_status,comment_status,ping_status,post_name,to_ping,pinged,post_modified,post_modified_gmt,post_content_filtered,post_parent,guid,menu_order,post_type,comment_count) VALUES "+
    "(748,1,'"+pessoa.titulo+"',"+gerarParagrafoHTML()+")";

    console.log(stringSQL);
}

const gerarParagrafoHTML = async(pessoa) => {
    //gerar HTML wp:paragraph
}

module.exports = {gerarScriptInsertPost}