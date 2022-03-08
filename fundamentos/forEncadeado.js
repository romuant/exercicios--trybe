let n1 =  Math.ceil(Math.random()*60);
let n2 =  Math.ceil(Math.random()*60);
let n3 =  Math.ceil(Math.random()*60)
let n4 =  Math.ceil(Math.random()*60)
let n5 =  Math.ceil(Math.random()*60)
let n6 =  Math.ceil(Math.random()*60)
let numerosMegaSena =[n1, n2, n3, n4, n5, n6];
let meusNumeros= [6,15,22,38,42,57];
for(let i=0; i<numerosMegaSena.length;i+=1){
      for(let z=0; z<meusNumeros.length; z+=1){
    if(numerosMegaSena[i] === meusNumeros[z]){
        console.log('Parabéns, você acertou o número: ',meusNumeros[z]);
        }
    }
}