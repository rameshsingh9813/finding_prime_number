  function prime(num){
     let nvar=[2,3,5,7];
     let sumvar=0;
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
 for(let k in nvar){
  for(let j in nvar){
             if (nvar[k]==nvar[j]){
                
         }
         else if(Number.isInteger(nvar[j]/nvar[k])){
               nvar.splice(j,1);
         }
         else{
         }
      }
    sumvar+=nvar[k];
 }
 return sumvar;
  }
 console.log(prime(1000))
