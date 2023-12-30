class Cxmsg{
    static titulo=null;
    static texto=null;
    // static cor="#480";
    static destino=null;
    static divmsg=null; 
    //static tipo=null;
    static comando=null;
    static textos=null 
        static mostrar=(config,titulo,texto)=>{
        //    this.cor=config.cor;
            this.tipo=config.tipo;
          //  this.comando=()=>{config.comandoSN()};
            this.destino=document.body
            this.titulo=titulo;
            this.texto=texto;
            this.textos=config.textos
            this.divmsg=document.createElement('div')
          
        this.divmsg.setAttribute("id","divmg")
        this.divmsg.setAttribute("class",'cxmsg_fundo')
        this.destino.prepend(this.divmsg)
    
 
    
        const div_area_Cxmsg=document.createElement('div')
        div_area_Cxmsg.setAttribute("class",'cxmsg')
        this.divmsg.appendChild(div_area_Cxmsg)
    
        const div_titulo_Cxmsg=document.createElement('div')
        div_titulo_Cxmsg.setAttribute("class",'titulo_cxmsg font')
        // div_titulo_Cxmsg.setAttribute('style',`background-color:#${config.cor} !important`)
        div_titulo_Cxmsg.innerHTML=this.titulo;
        div_area_Cxmsg.appendChild(div_titulo_Cxmsg)
    
       
        const div_corpo_Cxmsg=document.createElement('div')
        div_corpo_Cxmsg.setAttribute("class",'corpo_cxmsg font')
        div_corpo_Cxmsg.innerHTML=this.texto;
        const icon_Check=document.createElement("i")
        icon_Check.setAttribute("class"," bi bi-check-circle-fill coll mx-10 social fs-5x");
        div_corpo_Cxmsg.appendChild(icon_Check)
        div_area_Cxmsg.appendChild(div_corpo_Cxmsg)
    
    
       
        const div_rodape_Cxmsg=document.createElement('div')
        div_rodape_Cxmsg.setAttribute("class","rodape_cxmsg")
        div_area_Cxmsg.appendChild(div_rodape_Cxmsg)
            if(this.tipo=="ok"){
          
                            const botao_oK=document.createElement('button')
                            botao_oK.setAttribute('class','btncxmsg')
                        //    botao_oK.setAttribute('style',`background-color:#${config.cor} !important`)
                            botao_oK.innerHTML='OK'
                           botao_oK.addEventListener('click',(evet)=>{
                                    this.ocultar()
                           })
                            div_rodape_Cxmsg.appendChild(botao_oK)
    
         }else if(this.tipo=="sn"){
            const botao_sim=document.createElement('button')
            botao_sim.setAttribute('class','btncxmsg')
            // botao_sim.setAttribute('style',`background-color:#${config.cor} !important`)
            botao_sim.innerHTML=this.textos[0]
           botao_sim.addEventListener('class',(evet)=>{
                 
                 this.comando()
                 this.ocultar( )
           })
            div_rodape_Cxmsg.appendChild(botao_sim)
    
            
            const botao_nao=document.createElement('button')
            botao_nao.setAttribute('class','btncxmsg')
        //   botao_nao.setAttribute('style',`background-color:#${config.cor} !important`)
            botao_nao.innerHTML=this.textos[1]
           botao_nao.addEventListener('click',(evet)=>{
                   this.ocultar();
           })
            div_rodape_Cxmsg.appendChild(botao_nao)
    
    
    
        
        }
        
        }
     static   ocultar=()=>{
            this.divmsg.remove()
        }
    }
    export {Cxmsg} 