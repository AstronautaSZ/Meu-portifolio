require('dotenv').config()
const nodemailer=require('nodemailer');
let transporter=nodemailer.createTransport({
    host: "gmail",
    port:465,
    secure:true,
    service:'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.SENHA }});
const sendTestEmail=(email_clinent,ideia,nome)=>{
transporter.sendMail({
    from:process.env.EMAIL,
    to:process.env.EMAIL,
    subject:`Novo Email de:${email_clinent}`,
    text:``,
    html:`<h2>${nome}</h2>   
      <p>${ideia}</p>`
}).then(msg=>{
console.log(msg)
}).catch(err=>{
    console.log(`erro ao enviar`+err)
})
}
module.exports = { sendTestEmail };