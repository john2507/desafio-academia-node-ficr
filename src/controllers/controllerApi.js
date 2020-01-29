
    const apiGit = require('../services/serviceGit')




module.exports = async function get(req,res, next){

    try {
        let { data } = await apiGit.get('/users/john2507',{
            Authorizathion: "token d88b002b8e05cd582add1fb5fac730b1cafd3aa1"
        })

        res.json({ github_profile: {
            name: data.name,
            url: data.url,
            bio: data.bio,
        }})
    } catch (error) {
        console.log(error)
        res.send({haha:"Erro"})
    }

}

