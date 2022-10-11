#----------------------------------INSERT WP_POSTS----------------------------
INSERT INTO oarticoc_wp809.wpst_posts(ID,post_author,post_date,post_date_gmt,post_content,post_title,post_excerpt,post_status,comment_status,ping_status,post_name,to_ping,pinged,post_modified,post_modified_gmt,post_content_filtered,post_parent,guid,menu_order,post_type,comment_count) 
VALUES (select (max(id) +1) from wpst_posts,1,'1.2.1.2 Angelina Assunta Zanandrea e João Valentini','<!-- wp:paragraph -->
<p><strong>Angelina Assunta Zanandrea</strong> ★ 06/08/1932 - Lagoa Vermelha</p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p>Casado(a) em 03/02/1951 em São Valentim com:<br><strong>João Valentini</strong> ★ 01/02/1930 - Encantado<br>Pais dele(a): Antônio Valentini ★ 01/04/1901 e Terezinha Bertoldi ★ 25/01/1904</p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p>Filhos:<br><a href="https://familiamezzomo.com.br/1.2.1.2.1">1.2.1.2.1 - Teresinha Valentini</a><br><a href="https://familiamezzomo.com.br/1.2.1.2.2">1.2.1.2.2 - Rosa Valentini</a><br><a href="https://familiamezzomo.com.br/1.2.1.2.3">1.2.1.2.3 - Francisco Irineu Valentini</a><br><a href="https://familiamezzomo.com.br/1.2.1.2.4">1.2.1.2.4 - Tercisio Valentini</a><br><a href="https://familiamezzomo.com.br/1.2.1.2.5">1.2.1.2.5 - José Maximino Valentini</a><br></p>
<!-- /wp:paragraph -->');
#----------------------------------INSERT WP_TERM_RELATIONSHIPS----------------------------
INSERT INTO oarticoc_wp809.wpst_term_relationships (object_id,term_taxonomy_id,term_order) 
VALUES(select (max(id) +1) from wpst_term_relationships, 4, 0);
