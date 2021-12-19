function Verify(){
  let num = parseInt(document.getElementById('num').value);
  let verifyResult = document.getElementById('verify');

  if(isNaN(num)){
    alert('Por favor, informe um número válido!');    
  }else{
    let rest = num%2;
    let result = (rest==0)?"Par":"Ímpar";    
    let message = `O número ${num} é ${result} .`;
    verifyResult.innerHTML = message;
  } 
  return result;
}; 