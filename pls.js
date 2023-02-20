let contador = 0;
let contadorNao = 0


function sim() {
    var btn1 = document.querySelector('.btn1');
    btn1.classList.remove('btn1-posicao-inicial');
    btn1.classList.add('btn1-posicao-final');
  
    var btn2 = document.querySelector('.btn2');
    btn2.classList.remove('btn2-posicao-final');
    btn2.classList.add('btn2-posicao-inicial');
contador++
    
if (contador >= 2 && contador <= 5){
    alert("Ebaaaa (ɔ◔‿◔)ɔ ♥");
}
else if(contador >= 6){
    alert("Eu já entendi  Minhocaaaaa 👺")
}
  }
  
  function nao() {
    var btn1 = document.querySelector('.btn1');
    btn1.classList.remove('btn1-posicao-final');
    btn1.classList.add('btn1-posicao-inicial');
  
    var btn2 = document.querySelector('.btn2');
    btn2.classList.remove('btn2-posicao-inicial');
    btn2.classList.add('btn2-posicao-final');
contadorNao++

if(contadorNao >= 20){
    alert("To chuchinho Agora ;-;")
}
}
  