const axios = require ('axios')


axios.get("https://github.com/john2507?tab=repositories").then((resposta)=>{
    console.log(resposta.headers);
}).catch(function(error){
    if(error){
        console.log(error);
    };
});


