let quadro= captura() 
let primeiroQuadro
let ultimoQuadro
let total

function captura(){
    var videos = document.getElementById('corpo-videos').getElementsByClassName('videoStyle');
    return videos
}

function resolucaoTela(){
   
    function myFunction(x) {
    if (x.matches) { // If media query matches
        return 2
    } else {
        return 1
    }
}

var x = window.matchMedia("(max-width: 600px)")
return myFunction(x)
    

}



function posicionar(){
   // quadro = captura() 
    let posicao = 0
    
    var resolucao = resolucaoTela()
  
    if(resolucao == 1){
            for(var i = 4; i < quadro.length ; i++){
    
                quadro[i].style.display = 'none'
                 
              }
            primeiroQuadro = 0
            ultimoQuadro = 3
            total = quadro.length -1
    }
    if(resolucao == 2){
        for(var i = 1; i < quadro.length ; i++){
    
            quadro[i].style.display = 'none'
             
          }
        primeiroQuadro = 0
        ultimoQuadro = 0
        total = quadro.length -1
    }
}


function esquerda(){
    
   
    var proximo = ultimoQuadro + 1
    
    if (ultimoQuadro<total){
            
            quadro[primeiroQuadro].style.display = 'none'
            quadro[proximo].style.display = 'block'
    
            primeiroQuadro = primeiroQuadro + 1
            ultimoQuadro = ultimoQuadro + 1
    }
}

function direita(){
    var proximo = primeiroQuadro - 1
    
    if (primeiroQuadro>0){
            
            quadro[proximo].style.display = 'block'
            quadro[ultimoQuadro].style.display = 'none'
    
            primeiroQuadro = primeiroQuadro - 1
            ultimoQuadro = ultimoQuadro - 1
    }
}






