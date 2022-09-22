let resultado = document.getElementById("result");
function display(num){
    resultado.value += num;
}
function Calculate(){
    try{
        resultado.value = eval(resultado.value);
    }
    catch(err)
    {
        alert('ERROR DE CÁLCULO')
    }
}
function Clear(){
    resultado.value = "";
}