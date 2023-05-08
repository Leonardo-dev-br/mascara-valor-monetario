
function formatarValor(){
    var valorInputado = document.getElementById("numform").value //Pegando valor Inputado pelo User
    console.log(valorInputado.indexOf(',')) //Mostra a posição da virgula no Valor Inputado pelo User

    //Autocomplemento para valor Inputado ,00
    if(valorInputado === 1){
        comprimento.value += '00'   
   } 
}

           