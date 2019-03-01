const { obterPessoas } = require('./service')
//dessa maneira a cima so extrai uma parte

Array.prototype.meuFilter = function(callback){
    const lista=[]
    for(index in this){
        item=this[index]
        const resultado = callback(item,index,this)
        if(!result)continue
        lista.push(item)
    }
    return lista
}

async function main() {
    try {
        const { results } = await obterPessoas('a')
/*         const familiaLars = results.filter(function (item){

            //retornar booleano para saber se remove ou mantem na lista
            //false remove da lista e true mantem mas nao da verdadeira lista
            const result = item.name.toLowerCase().indexOf('lars') !== -1
            return result
    }) */
    const familiaLars=result.meuFilter((item,index,lista)=>item.name.toLowerCase().indexOf('lars') !== -1)
    const names = familiaLars.map(pessoa=>pessoa.name)
    console.log(names)
    } catch (error) {
    console.error('deu ruim', error)
}
}
main()