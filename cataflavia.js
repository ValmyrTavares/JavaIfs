 

var botao = document.querySelector(".botao-necessario")

var valmyr = document.querySelectorAll(".valmyr")



function somar(){
   
    var soma = 0;
    valmyr.forEach(function(x, y){
        if (x.checked==true){
            console.log(x.value)
            soma+=parseInt(x.value);
        }else {
         x.value =  0;
         console.log(x.value)
         soma+=parseInt(x.value);
        }
      
     })
     console.log(soma);
}

          


botao.addEventListener("click",function(){
     leitura();
   
});
function leitura(){
    valmyr.forEach(function(x,y){
        if(x.checked==true){
            console.log("true "+ y)
            console.log(x.value)
        }if(x.checked==false)
        {console.log("false " + y)
        x.value=0;
        console.log(x.value)
    }
       
    })
}