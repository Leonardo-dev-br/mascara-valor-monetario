
var valorInputado = document.getElementById("numform").value //Pegando valor Inputado pelo User
    valorInputado.addEventListener(valorInputado, formatarValor())
    
    function formatarValor(){

    //console.log(valorInputado.indexOf(',')) //Mostra a posição da virgula no Valor Inputado pelo User

    // Verifica se o valor é numérico
    if(!isNaN(valorInputado)) {
        var formattedNumber = parseFloat(valorInputado).toFixed(2).replace('.', ',');
        input.valorInputado = formattedNumber;
    }

   //Transforma o valor que vc recebeu do usuário em float
parseFloat(valorInputado)

//Deixa duas casas depois da vírgula 
.toFixed(2)

//Troca o . default do folat, pela vírgula que vc quer 
.replace('.', ',');   
   } 


        