let peso = 9;

let miVariable = "hola";

console.log(peso);

let mibooleano;

mibooleano = "false"

console.log(4 == 5);

let n1 = 10;
let n2 = 20;
let n3 = 30;
if(n1 > n2 && n1 > n3){
    console.log(n1);
}  else if(n2 > n1 && n2 > n3) {
  console.log(n2)
}
else if(n3 > n1 && n3 > n2) {
  console.log(n3)
} 

function mensaje(){
  console.log("hola desde la funcion");
}

mensaje();

function saludo(nombre = "mauro") {
  console.log ("Hola", nombre);
}
saludo("dani");

function mayor (n1,n2,n3){
  if(n1>=n2 && n1 >= n3)
  {
    return n1;
  } else {
    return "nada";
  }
}

console.log(mayor(111,23,15) * 2);

function suma(n1, n2){
  let resultado = n1 + n2;
  return resultado;
}
let variable;
variable = suma(5, 10);
console.log(variable);


let peso_var = document.getElementById("input")
document.getElementById("button").addEventListener("click", ()=>{
  console.log()
})

function holliday (peso){
  if(peso>=20){
    let aux = (peso - 20) * 20
    let resultado = 1500 + aux
    return resultado
  } else if (peso < 20 && peso > 10){
    let aux = (peso - 10) * 50
    let resultado = 1000 + aux
    return resultado
  } else if (peso < 10 && peso > 0){
    let aux = (peso - 10) * 10
    let resultado = 100 + aux
    return resultado
  }
}

  function superficie(valor){
    let resultado = (valor * 4 + 7) / (valor + 90);
    return resultado;
  }

    console.log(superficie(peso));