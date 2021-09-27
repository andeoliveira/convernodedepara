
const familiaOrigemService = require('../services/familiaOrigemService');
        
module.exports = {

    async index(req, res) {
        const dados = await familiaOrigemService.carregarListaPessoas();
        return res.render('home', {pessoas:dados});
    },

    async carregarFamilias(req,res) {
        const dados = await familiaOrigemService.carregarListaPessoas();
        return res.json(dados);
    }
    
}





