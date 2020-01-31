const apiGit = require('../services/serviceGit');

const axios = require('axios');


module.exports = async function get(req, res, next){
    
    let repoDefault = [];
    let face = []

    try {
        
        //let { name } = req.params
        let { data } = await apiGit.get('/users/john2507',{

            Authorizathion: "token d88b002b8e05cd582add1fb5fac730b1cafd3aa1"

        })

        let { data: repos } = await apiGit.get(`/users/john2507/repos`)

        
        const apiFace = await axios.get(`https://graph.facebook.com/v5.0/me?fields=name%2Clast_name%2Caddress%2Cgender%2Cbirthday%2Cemail&access_token=EAAIlDuHv2RsBAIEMHWk9DZACZB2QWtFaelD563i4uiKZADXtJDl40Pl9kNMsmXaki2HPGIVFx0NkD3JkpKzee5Xi0nZC7mOlGPkEm6KJilHIU1GVb5CMS1BbnH7nrbfDo1TWNDPSMAPPrfihrz0t0kZCYNO7RjOQArpo7bWZBAwRDv81aum3LAsJaBZClXIhZBJr5HZAv9ltKCqSTmBALH9znjyDogxIlPuJbC4LxkiWaegZDZD`);

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



        return res.json({ facebook_profile:[profile],
            github_profile: {
            name: data.name,
            url: data.url,
            bio: data.bio,
            company: data.company,
            repositorios: [repoDefault],
            
        }})


    } catch (error) {
        console.log(error)
        res.send({haha:"Erro"})
    }
}