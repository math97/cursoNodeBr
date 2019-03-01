const service=require('./service');

async function main(){
    try {
        const result = await service.obterPessoas('a');
        const names=[];
/*         for (let index = 0; index < result.length; index++) {
            const pessoa = result.results[i];
            names.push(pessoa.name)
            
        } */
/*         for (let i in result.results) {
            
                const pessoa = result.results[i];
                names.push(pessoa);
                
            
        } */

            for(pessoa of result.results){
                names.push(pessoa.name)
            }

    } catch (error) {
        console.error(`Erro interno`,error);
    }
}

main()