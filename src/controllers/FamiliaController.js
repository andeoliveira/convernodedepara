
const familiaService = require('../services/familiaService');
        
module.exports = {

    async index(req, res) {
        const dados = await familiaService.carregarLista();
        return res.render('home', {pessoas:dados});
    },

    async carregarFamilias(req,res) {
        const dados = await familiaService.carregarLista();
        return res.json(dados);
    }
    
}





