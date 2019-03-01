const EventEmitter = require('events')

class MeuEmissor extends EventEmitter{


}
const meuEmissor = new MeuEmissor();
const nomeDoEvento = 'usuario:click';

meuEmissor.on(nomeDoEvento,function(click){
    console.log('um usuario clicou',click)
})

/* meuEmissor.emit(nomeDoEvento,'na barra');
meuEmissor.emit(nomeDoEvento,'no ok');

let count = 0;
setInterval(function(){
    meuEmissor.emit(nomeDoEvento,'no ok'+(count++))
},1000)
 */