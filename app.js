//Trocar cor background
var trocaCor = 0
function trocarCor(){
     if(trocaCor == 0){
          document.body.style.setProperty('--cor1', 'orangered');
          document.body.style.setProperty('--cor2', 'rgba(0, 0, 0, 0.932)');
          document.body.style.setProperty('--cor3', 'white');
          document.body.style.setProperty('--cor4', 'white');
          trocaCor = 1
     } else if(trocaCor == 1){
          document.body.style.setProperty('--cor1', '#2B292B');
          document.body.style.setProperty('--cor2', 'orangered');
          document.body.style.setProperty('--cor3', 'rgba(0, 0, 0, 0.932)');
          document.body.style.setProperty('--cor4', 'white');
          trocaCor = 2
     } else if(trocaCor == 2){
          document.body.style.setProperty('--cor1', 'orangered');
          document.body.style.setProperty('--cor2', 'white');
          document.body.style.setProperty('--cor3', '#2B292B');
          document.body.style.setProperty('--cor4', 'rgba(0, 0, 0, 0.932)');
          trocaCor = 0
     }
}


//Chamar conteúdo HOME
function irParaHome(){
     document.getElementById('conteudoProjetos').className = 'sai'
     document.getElementById('conteudoContato').className = 'sai'
    setTimeout(() => {
        document.getElementById('conteudoProjetos').style.display = 'none'
        document.getElementById('conteudoProjetos').classList.remove('sai')
        document.getElementById('conteudoContato').style.display = 'none'
        document.getElementById('conteudoContato').classList.remove('sai')
         
        document.querySelector("#menu > #projetos").style.cssText = `background-color:  var(--cor3);`
        document.querySelector("#menu > #contato").style.cssText = `background-color:  var(--cor3);`
        document.querySelector("#menu > #home").style.cssText = `background-color:  var(--cor1);`
          
         document.getElementById('conteudoHome').style.display = 'flex'

         //Sumir divs da parte de fotos na area projetos
         document.getElementById('fotos01').style.display = 'none'
         document.getElementById('fotos02').style.display = 'none'
         document.getElementById('fotos03').style.display = 'none'
         document.getElementById('fotos04').style.display = 'none'
    }, 800);
}





//Chamar conteúdo PROJETOS
function irParaProjetos(){
     document.getElementById('conteudoHome').className = 'sai'
     document.getElementById('conteudoContato').className = 'sai'
     setTimeout(() => {
          document.getElementById('conteudoHome').style.display = 'none'
          document.getElementById('conteudoHome').classList.remove('sai')
          document.getElementById('conteudoContato').style.display = 'none'
          document.getElementById('conteudoContato').classList.remove('sai')
 
          document.querySelector("#menu > #projetos").style.cssText = `background-color:  var(--cor1);`
          document.querySelector("#menu > #contato").style.cssText = `background-color:  var(--cor3);`
          document.querySelector("#menu > #home").style.cssText = `background-color:  var(--cor3);`
 
          document.getElementById('conteudoProjetos').style.display = 'flex'

          //Sumir divs da parte de fotos na area projetos
         document.getElementById('fotos01').style.display = 'none'
         document.getElementById('fotos02').style.display = 'none'
         document.getElementById('fotos03').style.display = 'none'
         document.getElementById('fotos04').style.display = 'none'
     }, 800);
}




//Chamar conteúdo CONTATO
function irParaContato(){
     document.getElementById('conteudoHome').className = 'sai'
     document.getElementById('conteudoProjetos').className = 'sai'
    setTimeout(() => {
        document.getElementById('conteudoHome').style.display = 'none'
        document.getElementById('conteudoHome').classList.remove('sai')
        document.getElementById('conteudoProjetos').style.display = 'none'
        document.getElementById('conteudoProjetos').classList.remove('sai')

        document.querySelector("#menu > #projetos").style.cssText = `background-color:  var(--cor3);`
        document.querySelector("#menu > #contato").style.cssText = `background-color:  var(--cor1);`
        document.querySelector("#menu > #home").style.cssText = `background-color:  var(--cor3);`

         document.getElementById('conteudoContato').style.display = 'block'

           //Sumir divs da parte de fotos na area projetos
          document.getElementById('fotos01').style.display = 'none'
          document.getElementById('fotos02').style.display = 'none'
          document.getElementById('fotos03').style.display = 'none'
          document.getElementById('fotos04').style.display = 'none'
    }, 800);
}





//MECHER OS NÚMEROS PROJETOS
function mecherNumeros(){
        var n1 = document.querySelector('#area1 > h1')
        var n2 = document.querySelector('#area2 > h1')
        var n3 = document.querySelector('#area3 > h1')
        var n4 = document.querySelector('#area4 > h1')

        n1.classList.add('mecher')

        setTimeout(() => {
           n1.classList.remove('mecher')
           n2.classList.add('mecher')
        }, 1500);

        setTimeout(() => {
          n2.classList.remove('mecher')
          n3.classList.add('mecher')
       }, 3000);

       setTimeout(() => {
          n3.classList.remove('mecher')
          n4.classList.add('mecher')
       }, 4000);
       
       setTimeout(() => {
          n4.classList.remove('mecher')
       }, 5000);
}

mecherNumeros();

setInterval(() => {
     mecherNumeros();
}, 6000);











//-------------------- PROJETOS IMAGENS ------------------


//01
function projeto01(){
         document.getElementById('conteudoHome').className = 'fade'
         document.getElementById('conteudoProjetos').className = 'fade'
         document.getElementById('conteudoContato').className = 'fade'

         setTimeout(() => {
             document.getElementById('conteudoHome').classList.remove('fade')
             document.getElementById('conteudoProjetos').classList.remove('fade')
             document.getElementById('conteudoContato').classList.remove('fade')

             document.getElementById('conteudoHome').style.display = 'none'
             document.getElementById('conteudoProjetos').style.display = 'none'
             document.getElementById('conteudoContato').style.display = 'none'
         }, 900);

         setTimeout(() => {
                 document.getElementById('fotos01').style.display = 'block'
         }, 1000);
}




//02
function projeto02(){
     document.getElementById('conteudoHome').className = 'fade'
     document.getElementById('conteudoProjetos').className = 'fade'
     document.getElementById('conteudoContato').className = 'fade'

     setTimeout(() => {
         document.getElementById('conteudoHome').classList.remove('fade')
         document.getElementById('conteudoProjetos').classList.remove('fade')
         document.getElementById('conteudoContato').classList.remove('fade')

         document.getElementById('conteudoHome').style.display = 'none'
         document.getElementById('conteudoProjetos').style.display = 'none'
         document.getElementById('conteudoContato').style.display = 'none'
     }, 900);


     setTimeout(() => {
          document.getElementById('fotos02').style.display = 'block'
     }, 1000);
}




//03
function projeto03(){
     document.getElementById('conteudoHome').className = 'fade'
     document.getElementById('conteudoProjetos').className = 'fade'
     document.getElementById('conteudoContato').className = 'fade'

     setTimeout(() => {
         document.getElementById('conteudoHome').classList.remove('fade')
         document.getElementById('conteudoProjetos').classList.remove('fade')
         document.getElementById('conteudoContato').classList.remove('fade')

         document.getElementById('conteudoHome').style.display = 'none'
         document.getElementById('conteudoProjetos').style.display = 'none'
         document.getElementById('conteudoContato').style.display = 'none'
     }, 900);


     setTimeout(() => {
          document.getElementById('fotos03').style.display = 'block'
     }, 1000);
}




//04
function projeto04(){
     document.getElementById('conteudoHome').className = 'fade'
     document.getElementById('conteudoProjetos').className = 'fade'
     document.getElementById('conteudoContato').className = 'fade'

     setTimeout(() => {
         document.getElementById('conteudoHome').classList.remove('fade')
         document.getElementById('conteudoProjetos').classList.remove('fade')
         document.getElementById('conteudoContato').classList.remove('fade')

         document.getElementById('conteudoHome').style.display = 'none'
         document.getElementById('conteudoProjetos').style.display = 'none'
         document.getElementById('conteudoContato').style.display = 'none'
     }, 900);


     setTimeout(() => {
          document.getElementById('fotos04').style.display = 'block'
     }, 1000);
}






//BACK ---------------
function back(){ 

       document.getElementById('fotos01').classList.add('fade')
       document.getElementById('fotos02').classList.add('fade')
       document.getElementById('fotos03').classList.add('fade')
       document.getElementById('fotos04').classList.add('fade')

       setTimeout(() => {
          document.getElementById('fotos01').classList.remove('fade')
          document.getElementById('fotos02').classList.remove('fade')
          document.getElementById('fotos03').classList.remove('fade')
          document.getElementById('fotos04').classList.remove('fade')

          document.getElementById('fotos01').style.display = 'none'
          document.getElementById('fotos02').style.display = 'none'
          document.getElementById('fotos03').style.display = 'none'
          document.getElementById('fotos04').style.display = 'none'

          document.getElementById('conteudoProjetos').style.display = 'flex'
       }, 1000);
}