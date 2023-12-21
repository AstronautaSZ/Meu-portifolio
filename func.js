
const email=document.getElementById('email')
const nome=document.getElementById('nome')
const btn_enviar=document.getElementById('btn_enviar')
const ideia=document.getElementById('ideia');

btn_enviar.addEventListener('click', (envet)=>{
  fetch(`https://meu-portifolio-vert-five.vercel.app/send/${email.value}/${ideia.value}/${nome.value}`)
  .then(res=>{
    if(res.status==200){
      alert(res.status)
      console.log('resoltou')
    }else{
        alert(res.status)
        console.log('nao')
    }
  })
    
 })