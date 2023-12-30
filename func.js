
const email=document.getElementById('email')
const nome=document.getElementById('nome')
const btn_enviar=document.getElementById('btn_enviar')
const ideia=document.getElementById('ideia');

btn_enviar.addEventListener('click',async (envet)=>{
  envet.preventDefault();
  
 const  Dados={
  email_clinent:email.value,
  nome:nome.value,
  ideia:ideia.value
  }
  const cabecalho = {
    method: 'post',
    body: JSON.stringify(Dados),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  }

  const servidor='https://api-email-five.vercel.app';
  fetch(`${servidor}/send`,cabecalho)
  
  .then(res=>{
    if(res.status==200){
      alert(res.status)
      console.log(Dados)
    }else{
        alert(res.status)
        console.log('nao')
    }
})

 })