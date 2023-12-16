
const email=document.getElementById('email')
const nome=document.getElementById('nome')
const btn_enviar=document.getElementById('btn_enviar')
const ideia=document.getElementById('ideia');

btn_enviar.addEventListener('click', (envet)=>{
  fetch(`http://127.0.0.1:3000/send/${email.value}/${ideia.value}/${nome.value}`)
  .then(res=>{
    if(res.status==200){
      alert(res.statusText)
    }else{
        alert(res.statusText)
    }
  })
    
 })