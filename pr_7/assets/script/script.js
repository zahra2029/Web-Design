function sum(){
    number1= parseFloat(document.getElementById("number1").value);
    number2= parseFloat(document.getElementById("number2").value);

    if(isNaN(number1)|| isNaN(number2) || number1 <= 0 || number2<= 0){
        document.getElementById("result").innerText="ERROR:(";
        return;
    }
}