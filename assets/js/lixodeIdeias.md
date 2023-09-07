
function accordion(i) {
   var ElementoPai = document.getElementsByClassName('accordion-header')[i].lastElementChild
   var ElementoDeVerificacao = ElementoPai.classList.contains('accordion-hidden');
   var SegundaVerificacao = ElementoPai.classList.contains('accordion-show');
   
   
if(ElementoDeVerificacao == true) {
    ElementoPai.classList.toggle('accordion-hidden')
} else {
    ElementoPai.classList.toggle('accordion-hidden')
} if( SegundaVerificacao == true ) {
    ElementoPai.classList.toggle('accordion-show')
}else {
    ElementoPai.classList.toggle('accordion-show')
}  



}




function accordion(i) {
    var ElementoPai = document.getElementsByClassName('accordion-header')[i].lastElementChild;

    if (ElementoPai.classList.contains('accordion-hidden')) {
      ElementoPai.classList.toggle('accordion-hidden');
      ElementoPai.classList.toggle('accordion-show');
    } else {
      ElementoPai.classList.toggle('accordion-hidden');
      ElementoPai.classList.toggle('accordion-show');
    }

  }

