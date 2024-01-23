var n1,n2,n3,mayor,menor,media;
    n1 = parseInt (prompt("ingrese un numero entero"));
    n2 = parseInt (prompt("ingrese otro numero entero"));
    n3 = parseInt (prompt("ingrese un ultimo numero entero"));
 
        if(n1!=n2 && n1!=n3 && n2!=n3){
            alert("son todos diferentes")
            }else{
                if(n1=n2 && n1===n3 && n2===n3 ){
                    alert("son todos iguales")
                }
            }

        if(n1>=n2 && n1>=n3){
            alert("El mayor es "+n1);
            }else if(n2>=n1 && n2>=n3){
                    alert("El mayor es "+n2);
                    }else{
                        alert("El mayor es "+n3);
            }
    
        if(n1<=n2 && n1<=n3){
            alert("El menor es "+n1);
            }else if(n2<=n1 && n2<=n3){
                    alert("El menor es "+n2);
                    }else{
                        alert("El menor es "+n3);
            }
    
            
     var media = (n1+n2+n3)/3;{
            alert("la media de los numeros es: "+media);
    }
