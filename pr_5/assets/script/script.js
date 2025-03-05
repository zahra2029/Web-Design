document.addEventListener("DOMContentLoaded",() =>{

    const inputDay = document.querySelector(".date_box_text");
    const inputMonth = document.querySelector(".date_box_text");
    const inputYear = document.querySelector(".date_box_text");

    const button = document.querySelector(".btn_box");

    inputDay.addEventListener('input' , function(){

        if(inputDay.nextElementSibling.innerHTML=="must be a valied date"){
            inputDay.parentElement.classList.remove("error");
            inputMonth.parentElement.classList.remove("error");
            inputYear.parentElement.classList.remove("error");
        }

        if(inputDay.value >31){
            inputDay.nextElementSibling.innerHTML=="must be a valied date"
            inputDay.parentElement.classList.add("error");
        }else{
            inputDay.parentElement.classList.remove("error");
        }

    });

    inputMonth.addEventListener('input' , function(){

        if(inputMonth.nextElementSibling.innerHTML=="must be a valied mounth"){
            inputDay.parentElement.classList.remove("error");
            inputMonth.parentElement.classList.remove("error");
            inputYear.parentElement.classList.remove("error");
        }

        if(inputMonth.value >12){
            inputMonth.nextElementSibling.innerHTML=="must be a valied mounth"
            inputMonth.parentElement.classList.add("error");
        }else{
            inputMonth.parentElement.classList.remove("error");
        }

    });

    inputYear.addEventListener('input' , function(){

        if(inputYear.nextElementSibling.innerHTML=="must be a valied mounth"){
            inputDay.parentElement.classList.remove("error");
            inputMonth.parentElement.classList.remove("error");
            inputYear.parentElement.classList.remove("error");
        }

        let Data = new Date();
        if(inputYear.value > Data.getFullYear()){
            inputYear.nextElementSibling.innerHTML=" must in the past"
            inputYear.parentElement.classList.add("error");
        }

    });

});