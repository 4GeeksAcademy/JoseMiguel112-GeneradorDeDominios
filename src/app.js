let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

function generadorDeDominios(pronous, adjs, nouns){
  let dominios=[];
  
  for(let pron in pronous){

    for(let ad in adjs){

      for(let nou in nouns){
        //dominios.push(`www.${pron}${ad}${nou}.com`)
        dominios.push("www."+pron+ad+nou+".com")
      }
    }
    
  }
  return dominios;
}

function generadorDeDominios2(pronouns, adjs, nouns){
  let dominios=[];

  for(let i=0; i<pronouns.length;i++){
    for(let j=0; j<adjs.length;j++){
      for(let k=0; k<nouns.length;k++){
        dominios.push("www."+pronouns[i]+adjs[j]+nouns[k]+".com")
      }
    }
  }
  return dominios;
}

console.log(generadorDeDominios(pronoun, adj, noun));
console.log(generadorDeDominios2(pronoun, adj,noun));