module.exports = (app) => {
    

    const service = require('../servicos')


    async function main(){
    
        try{
            
            const results =  await service.obterPessoais('a')
            // const names=[]
            // results.results.forEach((item)=>{ 
            //     names.push(item.name)            
            // })
            // const names = results.results.map((pessoa)=>{
            //         return pessoa.name
            // })
            const names = results.results.map(pessoa => pessoa.name)
    
            console.log('names ', names)
    
        }catch (error){
            console.error("error", error)
    
        }
    }
    main()
    
}


