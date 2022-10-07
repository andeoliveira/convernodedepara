
    require('dotenv/config');


    async function connect(tipoFonteBanco) {

        if (global.connection && global.connection.state !== 'disconnected')
            return global.connection;

        const mysql = require('mysql2/promise');
        const conn = await mysql.createConnection(montarURLConn(tipoFonteBanco));
        global.connection = conn;
        ("Conectado");
        
        return conn;

    };

    function montarURLConn(tipoFonteBanco) {
        if (tipoFonteBanco == 'origem') {
            return process.env.DB_ORIGEM_TIPO_BANCO+"://"+process.env.DB_ORIGEM_USUARIO+":"+process.env.DB_ORIGEM_USUARIO+
                "@"+process.env.DB_ORIGEM_SERVIDOR+":"+process.env.DB_ORIGEM_PORTA+"/"+process.env.DB_ORIGEM_NOME
        
        } else {

        }
    }

    module.exports = {connect};
   




