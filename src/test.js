
const apiGit = require('../services/serviceGit')

module.exports = async function get(req,res, next){

    try {
        let { name } = req.params


        
        // let { data } = await apiGit.get(`/users/${name}`,{
            
        //     Authorizathion: "token d88b002b8e05cd582add1fb5fac730b1cafd3aa1"
        // })

        // res.json({ github_profile: {
        //     name: data.name,
        //     url: data.url,
        //     bio: data.bio,
        //     company: data.company,
            
               
        // }})
            

    } catch (error) {
        console.log(error)
        res.send({haha:"Erro"})
    }

}

