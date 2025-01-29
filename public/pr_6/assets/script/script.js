function calculateBMI(){
    const weight= parseFloat(document.getElementById("weight").value);
    
    const height= parseFloat(document.getElementById("height").value);

    if(isNaN(weight)|| isNaN(height) || weight <= 0 || height<= 0){
        document.getElementById("result").innerText="ERROR:(";
        return;
    }

    const bmi = (weight / (height ** 2));

    let message ;

    if (bmi < 18.5){
        message = " Light weight ";
    }else if(bmi >= 18.5 && bmi < 24.9){
        message = " Normal weight ";
    }else if(bmi >= 25 && bmi < 29.9){
        message = " Over weight ";
    }else{
        message = "  Obesity ";
    }
    

    document.getElementById("result").innerHTML= `
        BMI : <strong>${bmi.toFixed(2)}</strong><br>
        STATUS : <strong>${message}</strong>
    `;
}

/*function calculateBMI() {
    // دریافت مقادیر قد و وزن از کاربر
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
  
    // اگر قد یا وزن وارد نشده باشد، پیغام خطا نمایش دهید
    if (isNaN(height) || isNaN(weight)) {
      alert("Please enter valid height and weight.");
      return;
    }
  
    // محاسبه BMI
    const bmi = weight / ((height / 100) * (height / 100));
  
    // نمایش BMI به کاربر
    const resultElement = document.getElementById("result");
    alert(resultElement.textContent = `Your BMI is: ${bmi.toFixed(2)}`);
  
   
  }*/
  