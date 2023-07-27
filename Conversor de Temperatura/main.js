function calculo(){

    var temp = document.querySelector(`#celsius`).value;
    fahrenheit=celsius*9/5+32
    var resultado = (temp * 9/5) + 32;
    alert(`fahrenheit:` + resultado);
    var resultado = parseFloat(temp) + 273.15;
    alert(`kelvin:` + resultado);

}