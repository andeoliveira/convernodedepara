
const familiaService = require('../services/familiaService');
        
module.exports = {

    async index(req, res) {
        const dados = await familiaService.carregarListaPessoas();
        return res.render('home', {pessoas:dados});
    },

    async carregarFamilias(req,res) {
        const dados = await familiaService.carregarListaPessoas();
        return res.json(dados);
    }
    
}





