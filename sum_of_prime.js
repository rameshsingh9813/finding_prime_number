  function prime(num){
     let nvar=[2,3,5,7];
     let sumvar=17;
     for(let i=8;i<=num;i++){
         if(Number.isInteger(i/2)){
         }
         else if(Number.isInteger(i/3)){
         }
         else if(Number.isInteger(i/5)){
         }
         else if(Number.isInteger(i/7)){
         }
         else{
             nvar.push(i)
         }
 }
 
  let nnvar=[];
 for(let k in nvar){
  for(let j in nvar){
             if (nvar[k]==nvar[j]){
                
         }
         else if(Number.isInteger(nvar[j]/nvar[k])){
               nvar.splice(k,1);
         }
         else{
         }
      }
 }

 return nvar
  }
 console.log(prime(170))