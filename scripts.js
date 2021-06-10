function setup(){
    document.getElementById('circulo').style.display = "none";
    document.getElementById('cuadrado').style.display = "none";
    document.getElementById('triangulo').style.display = "none";

}


function p1() {
    //console.log(document.getElementById('input1').value);    
    let altura = document.getElementById('input1').value;
    result = []
    for (let i = 1; i <= altura; i++) {
        result [i] = "";
        for (let j = 0; j < i; j++) {
            result [i] =result[i] + ('*');                                
        }        
    }

    for (let index = 1; index < result.length; index++) {
        console.log(result[index]);
        
    }


}

function p2() {
    //console.log(document.getElementById('input2').value);    
    let altura = document.getElementById('input2').value;
    result = []
    
    for (let i = 1; i <= altura; i++) {
        result [i] = "";
        for (let j = 0; j < i; j++) {
            result [i] =result[i] + ('*');                                
        }        
    }
    for (let index = result.length - 1; index > 0; index--) {
        console.log(result[index]);        
    }

}

function p3(){

    let altura = document.getElementById('input3').value;
    
    result = [];
    for (let i = 1; i <= altura; i++){
        result[i] = "";
        for (let j = 0; j < i; j++){
            result[i] = result[i]+""+(j+1);
        }
    }       

    for (let i = 1; i < altura+1; i++) {
        console.log(result[i]);        
    }
}

function p4 (){
    let seleccion = document.getElementById('figuras').value;

    if (seleccion === "1"){
        document.getElementById('circulo').style.display = "block";
        document.getElementById('cuadrado').style.display = "none";
        document.getElementById('triangulo').style.display = "none";
    }else if (seleccion === "2"){
        document.getElementById('circulo').style.display = "none";
        document.getElementById('cuadrado').style.display = "block";
        document.getElementById('triangulo').style.display = "none";
    }else{
        document.getElementById('circulo').style.display = "none";
        document.getElementById('cuadrado').style.display = "none";
        document.getElementById('triangulo').style.display = "block";
    }

}

function area_circulo() {
    console.log("llegue al area del circulo");
    let radio = Number(document.getElementById('inputcirculo').value);
    console.log(radio);
    let r2 = Math.pow(radio,2);
    console.log(r2);
    let area = r2*(Math.PI);    
    console.log(area);    
    console.log("El area del circulo es: "+area.toString());    
}

function area_cuadrado(){
    let lado = Number(document.getElementById('inputcuadrado').value);
    console.log("El area del cuadrado es: "+(lado*lado));
}

function area_triangulo(){
    let altura = Number(document.getElementById('t_altura').value);
    let base = Number(document.getElementById('t_base').value);
    console.log("El area del triangulo es: "+(altura*base)/2);
}