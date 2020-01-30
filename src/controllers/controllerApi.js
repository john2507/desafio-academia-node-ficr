
const {obterPessoais} = require('../services/serviceGit')

module.exports = async function get(req, res, next){

    try {
        
        let { name } = req.params
        
        const gitres = await obterPessoais(name); 

        return res.json({ github_profile: gitres })
    } catch (error) {
        console.log(error)
        res.send({haha:"Erro"})
    }

}

