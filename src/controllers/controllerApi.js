const apiGit = require('../services/serviceGit');

const axios = require('axios');

const _ = require('lodash')


module.exports = async function get(req, res, next){
    
    let repoDefault = [];
    let face = []

    try {
        
        //let { name } = req.params
        let { data } = await apiGit.get('/users/john2507',{

            Authorizathion: "token d88b002b8e05cd582add1fb5fac730b1cafd3aa1"

        })

        let { data: repos } = await apiGit.get(`/users/john2507/repos`)

        
        const apiFace = await axios.get(`https://graph.facebook.com/v5.0/me?access_token=EAAIlDuHv2RsBADtsjNBrOhi1gO1pAHZAkPRxqlSCpbHBsFW77LjApLyOrB5ibQym8R9rjKucFZBJkVfJkeF9e4hr4yZB3HCnrmu1OpQwb4Ut7muUlJHgDo1Ed9R7iSl3yMwizeI3eHZAtyxYIJDDbuHfZCySId5nVwKbq4qPa8wZDZD&debug=all&fields=name%2Clast_name%2Caddress%2Cgender%2Cbirthday%2Cemail&format=json&method=get&pretty=0&suppress_http_code=1&transport=cors`);

        const { name, last_name, address,gender, birthday, email} = apiFace.data;
       
        const profile = {
            name,
            last_name,
            address,
            gender,
            birthday,
            email,
          };
    
        repos.map(repositorio => {
            repoDefault.push({
                size: repositorio.size,
                name: repositorio.name,
                url: repositorio.url,
            })
        })
        
        repoDefault.sort((a, b) => {
            return b.size - a.size
        })

        const repoArr = _.chunk(repoDefault, 3)


        return res.json({ facebook_profile:[profile],
            github_profile: {
            name: data.name,
            url: data.url,
            bio: data.bio,
            company: data.company,
            repositorios: [...repoArr[0]],
            
        }})


    } catch (error) {
        console.log(error)
        res.send({haha:"Erro"})
    }
}