
const email=document.getElementById('email')
const nome=document.getElementById('nome')
const btn_enviar=document.getElementById('btn_enviar')
const ideia=document.getElementById('ideia');
let LGButton=document.getElementById('LGButton')
const spinner=document.getElementById('animacao')
const resetar=()=>{
  email.value="";
  nome.value="";
  ideia.value="";
  LGButton.innerText="Enviado"
  spinner.classList.add("ocultar")
}
btn_enviar.addEventListener('click',async (envet)=>{
  envet.preventDefault();
  if(nome.value=="" || ideia.value=="" || email.value=="")
  return;

  else{
  LGButton.innerText="A enviar..."
  spinner.classList.remove("ocultar")

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


  const servidor='https://api-email-six.vercel.app';
  fetch(`${servidor}/send`,cabecalho)
  

  .then(res=>{
    if(res.status==200){
      resetar();
    }else{
      alert("Erro")
    }
})
}
 })