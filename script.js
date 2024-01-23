function esDiferente(a,b,c){
    var diferente= false;
    if(a!=b && b!=c && a!=c){
        diferente=true;
    }
return diferente;
}
function esIgual(a,b,c){
    var igual= false;
    if(a==b && b==c && a==c){
        igual=true;
    }
return igual 
}

function mayor(a,b) {
    var mayor;
    if(a>b){
        mayor=a;
    }else{
        mayor=b;
    }  
    return mayor;  
}
function menor(a,b) {
    var menor;
    if(a<b){
        menor=a;
    }else{
        menor=b;
    }  
    return menor;  
}

function mayorDeTresNumeros(a,b,c) {
        var m;
        var elMayor;
   if(a!=b)  {
    m=mayor(a,b);
    if(m!=c){
        elMayor=mayor(m,c)
    }else{
        elMayor=m;
    }
   } else{
    elMayor=mayor(a,c);
   }    
return elMayor;    
}

function menorDeTresNumeros(a,b,c) {
    var m
    var elMenor;
if(a!=b){
    m=menor(a,b);
    if(m!=c){
        elMenor=menor(m,c);
    }else{
        elMenor=m
    }
}else{
    elMenor=menor(a,c);
}
  return elMenor;  
}

function media(a,b,c) {
    return (a+b+c)/3;
    
}

function principal() {
var n1=parseInt(prompt("ingresa primer numero"));
var n2=parseInt(prompt("ingresa segundo numero"));
var n3=parseInt(prompt("ingresa tercer numero"));

if(esIgual(n1,n2,n3))
    {
    alert("Son todos iguales")
    }else{
        if(esDiferente(n1,n2,n3))
           {
              alert("todos son diferentes"); 
              alert("El menor de tres Numeros es: " + menorDeTresNumeros(n1,n2,n3));    
              alert("El mayor de tres Numeros es: "+ mayorDeTresNumeros(n1,n2,n3)) ;   
           }else{
            alert("El menor de tres Numeros es: " + menorDeTresNumeros(n1,n2,n3));    
            alert("El mayor de tres Numeros es: "+ mayorDeTresNumeros(n1,n2,n3)) ;
                }
        }
alert("La media es "+media(n1,n2,n3))
}

principal();