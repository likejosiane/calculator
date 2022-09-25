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
        alert('ERROR DE CÁLCULO');
    }
}
function Clear(){
    resultado.value = "";
} 

function sin(){
    resultado.value=Math.sin(resultado.value);
} 

function cos(){
    resultado.value=Math.cos(resultado.value);
} 

function tag(){
    resultado.value=Math.tan(resultado.value);
}

function elevadoDos(){
    resultado.value=Math.pow(resultado.value, 2);
}

function elevadoTres(){
    resultado.value=Math.pow(resultado.value, 3);
}

function raizCuadrada(){
    resultado.value=Math.sqrt(resultado.value,2);
} 


function raizCubica(){
    resultado.value = Math.pow(resultado.value, 1/3);
}

function log(){
    resultado.value=Math.log(resultado.value);
} 

function pi(){
    resultado.value=3.14159265359;
} 

function e(){
    resultado.value=2.71828182846;
}

function fact(){
    let i, num, f;
    f=1
    num=resultado.value;
    for(i=1; i<=num; i++){
        f=f*i;
    }
    i=i-1;
    resultado.value=f;

}

function elevadoN(){
    resultado.value= Math.pow(resultado.value,)
}


function backspc(){
    resultado.value=resultado.value.substr(0,resultado.value.length-1);
}

function e(){
    resultado.value=2.71828182846;
}

