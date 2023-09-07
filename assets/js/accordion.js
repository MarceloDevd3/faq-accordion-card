

function accordion(i) {
  var ElementoPai = document.getElementsByClassName('accordion-header')[i].lastElementChild
  var sessoes = document.getElementsByClassName('accordion-item')

  var ElementoDeVerificacao = ElementoPai.classList.contains('accordion-hidden');
  var arrowMove = document.getElementsByClassName('arrow')[i];

  if(ElementoDeVerificacao == true) {
   for(var s = 0; s < sessoes.length; s++) {
    sessoes[s].className = 'accordion-item accordion-hidden'
   }
   ElementoPai.className = 'accordion-item accordion-show'
   arrowMove.classList.add('active')
  } 
   else {
    ElementoPai.className = 'accordion-item accordion-hidden'
    arrowMove.classList.remove('active')
  }


  var ses = document.getElementsByClassName('txt-black') 
  var Elemento1 = document.getElementsByClassName('txt-black')[i]
  if(ElementoDeVerificacao == true) {
    for(var s = 0; s < ses.length; s++) {
      ses[s].className = 'txt-black normal'
     }
     Elemento1.className = 'txt-black active'
  }else {
    Elemento1.className = 'txt-black normal'
  }


  var arrowsess = document.getElementsByClassName('arrow');
  var arrow = document.getElementsByClassName('arrow')[i];
  if(ElementoDeVerificacao == true) {
    for(var s = 0; s < arrowsess.length; s++) {
      arrowsess[s].className = 'arrow normal'
     }
     arrow.className = 'arrow active'
  }else {
    arrow.className = 'arrow normal'
  }

}




  


 