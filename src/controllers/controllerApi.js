const apiGit = require('../services/serviceGit');
const apiFace = require('../services/serviceFace');

const _ = require('lodash')


module.exports = async function get(req,res, next){
    let repoDefault = [];

    try {
        
        let { name } = req.params
        let { data } = await apiGit.get(`/users/${name}`,{

            Authorizathion: "token d88b002b8e05cd582add1fb5fac730b1cafd3aa1"
        })

        let { data: repos } = await apiGit.get(`/users/${name}/repos`)

        repos.map(r => {
            repoDefault.push({
                size: r.size,
                name: r.name,
                url: r.url,
            })
        })


        repoDefault.sort((a, b) => {
            return b.size - a.size
        })

        const repoArr = _.chunk(repoDefault, 3)


        return res.json({ github_profile: {
            name: data.name,
            url: data.url,
            bio: data.bio,
            company: data.company,
            repositorios: [...repoArr[0]]
        }})


    } catch (error) {
        console.log(error)
        res.send({haha:"Erro"})
    }
}