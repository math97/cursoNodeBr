/*
0-obter um usuario
1-obter telefone a partir de um usuario
2-obter endereco a partir de um usuario

*/

function obterUsuario(callback){
    setTimeout(()=>{
        return callback(null,{
            id:1,
            nome:'Alladin',
            dataNascimento: new Date
        })

    },1000)
}

function obterTelefone(idUsuario,callback){
    setTimeout(function(){
        return callback(null,{
            telefone:'88888',
            ddd:'11'
        })

    },2000);
}

function obterEndereco(idUsuario,callback){
    setTimeout(()=>{
        return callback(null,{
            rua:'Maestro',
            numero:'80',
        })
    },3000);


}

/* function resolverUsuario(erro,usuario){
    console.log(usuario)
    funcao callback chamado em o9utra linha.nesse caso executaria 
    obterUsuario(resolverUsuario)
} */

//abaixo foi tudo sincronizado uma dentro da outra usando funcoes com o nome Resolver referenciando os callback
obterUsuario(function resolverUsuario(error,usuario){
    //em js null || "" || 0 = false
    if(error){
        console.log('Deu ruim em usuário',error);
        return;
    }
    obterTelefone(usuario.id,function resolverTelefone(error1,telefone){
        if(error1){
            console.log('Deu ruim em telefone',error1);
            return;    
        }
        obterEndereco(usuario.id,function resolverEndereco(error2,endereco){
            if(error2){
                console.log('Deu ruim em endereco',error2);
                return; 
            }
            console.log(`
                Nome: ${usuario.nome},
                Endereco: ${endereco.rua},${endereco.numero}
                Telefone:(${telefone.ddd})${telefone.telefone}
            `);
            
        })
    })

})
// const telefone=obterTelefone(usuario.id);


//console.log('usuario',usuario);
// console.log('telefone',telefone);

