

const url = "https://api.github.com/users"
const client_id = "d6794b7ab1b45541cab0"
const client_secret = "79123e72cf42bdc25496b976c5e7bf4d56803bf4"
const count = 2;
const sort = "created: asc"


async function getUser(user){


    try {
        
        const userResponse = await fetch(
    `${url}/${user}?client_id=${client_id}$client_secret=${client_secret}`
        
    
        );
        
        const reposResponse = await fetch(
        `${url}/${user}/repos?per_page=${count}&sort=${sort}&client_id=${client_id}$client_secret=${client_secret}`
        
        );
        
        const profile = await userResponse.json();
        const repos = await reposResponse.json();
    
        return {profile, repos}

    } catch (error) {
        consolo.log(error)
        
    }

    GetUser("franciscoMarinh")


}


