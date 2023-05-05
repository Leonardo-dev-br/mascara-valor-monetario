
function formatarValor(){
    var valorInputado = document.getElementById("numform").value
    console.log(valorInputado.indexOf(','))
    if(valorInputado === 1 || valorInputado === 2){
        valorInputado.value += ',00'   
    } 
}

