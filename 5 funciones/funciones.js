var fdexey = function(x,y){
    return 3*x - 2*y;
};
//document.write(fdexey (6,6));




var cuentaVuelta = function (hasCuando){
    for (var contador = 0;contador< hasCuando; contador++){
        document.write(contador +" ");
    }
};

var doble= function (numero){
    return numero *2;
}
//document.write("Comienza a ejecutar un comando for "+ cuentaVuelta (15) + " Dejo de contar ...");
document.write("Comienza a ejecutar un comando for ");
cuentaVuelta (15);
document.write( " Dejo de contar ...");

//nuemro randon
Math.random(); 
//redondea numeros
Math.floor(57.7);
//se pueden convinar 
Math.floor(Math.random()*100);

var porazar = function(num){
    return (Math.random()*num);
}
