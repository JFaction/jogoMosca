var altura = window.screen.height;
var largura = window.screen.width;
var imgMosca = document.getElementById("mosca")
var velocidade = 5000
var pontos = 0;
var segundos = 21
var vidas = 3




for(i=0;i < vidas; i++){ 
  InserirImagem();
}

  // pegar valor da url
  function verificarNivel(parameter) {  
    var loc = location.search.substring(1, location.search.length);   
    var param_value = false;   
    var params = loc.split("&");   
    for (i=0; i<params.length;i++) {   
        param_name = params[i].substring(0,params[i].indexOf('='));   
        if (param_name == parameter) {                                          
            param_value = params[i].substring(params[i].indexOf('=')+1)   
        }   
    }   
    if (param_value) {   
        return param_value;   
    }   
    else {   
        return undefined;   
    }   
  }

  verificarNivel()

  var nivel = verificarNivel("nivel");
  
  console.log(nivel)

  if(nivel == 'facil'){
    velocidade = 1500
  } else if(nivel == 'normal'){
    velocidade = 1000
  }else if(nivel == 'dificil'){
    velocidade = 660
  }else{
    velocidade = 400
  }
  console.log('Velocidade:' + velocidade)


  document.getElementById("mosca").addEventListener('click', () => {
    pegou();
    vidas += 1
    InserirImagem();
  });

  document.getElementById("ceu").addEventListener('click', () => {
    vidas -= 1
    document.getElementById('coracao').remove();
  });

var intervalo2 = window.setInterval(lerolero2, 1000);

function lerolero2(){

  if(vidas == 0){
    alert("Você errou a mosca 3 vezes, tente novamente!")
        window.location = "index.html"
        return
  }

    segundos -= 1
    document.getElementById("tempo").innerHTML = "Segundos restantes: " + segundos
    console.log('Segundos: ' + segundos)
    console.log('pontos: ' + pontos)


    if(segundos == 0){

      if(pontos > 4){
        alert("Você marcou 5 pontos ou mais, Parabens!")
        window.location = "index.html"
      }
      else if (pontos < 5) {
        alert("Você não chegou a marcar 5 pontos, tente novamente")
        window.location = "index.html"
      }
      
    }
}

var intervalo = window.setInterval(lerolero, velocidade);
function lerolero() {
  const gerar = Math.floor(Math.random() * 360 + 0)
  const tamanho = Math.random() * (4 - 1) + 1
  
  

    document.getElementById("mosca").style.marginLeft = aleatorioHorizontal(0,largura - 150) + "px";
    document.getElementById("mosca").style.marginTop = aleatorioVertical(0,altura - 300) + "px";

    //console.log('Aleatorio largura: ' + aleatorioHorizontal(0,largura) + ' / Aleatorio altura: ' + aleatorioVertical(0,altura))

    document.getElementById("mosca").style.transform = "scale("+ tamanho + ")" + " " +"rotate("+gerar+"deg)"

}
document.getElementById("pontos").innerHTML = 'Pontos: ' + 0
function pegou(){
    
    pontos = pontos + 1
    document.getElementById("pontos").innerHTML = "Pontos: " + pontos
    console.log(pontos)
}


function aleatorioVertical(min, max) {
    return Math.random() * (max - min);
  }

  function aleatorioHorizontal(min, max) {
    return Math.random() * (max - min);
  }


  function InserirImagem(url) {
    let img = document.createElement("img");
    img.id = "coracao"
    img.src="images/coracao.png";
    document.getElementById('campos').appendChild(img);
    /*document.body.appendChild(img);*/
    /*document.div.appendChild(img)*/
}
