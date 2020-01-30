const axios = require ('axios')
const URL = `https://api.github.com`


async function obterPessoais(nome){

    const userurl  = `${URL}/${nome}`
    const repourl = `${userurl}/repos`

    const repositores = []

    const gitresposta = await axios.get(userurl);
    
    const gitrepos = await axios.get(repourl);

    const user = gitresposta.data
    const repos = gitrepos.data

   // console.log(user)

    return {
        name: user.name,
        url: user.html_url,
        bio: user.bio,
        company: user.company,
    }

}

module.exports = {
    obterPessoais
}







// module.exports = axios.create({
//     baseURL: "https://api.github.com/"
    
        
// });