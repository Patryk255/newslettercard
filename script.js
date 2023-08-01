'use strict';

const email = document.querySelector('#email');
const submit = document.querySelector('button');
const errorM = document.querySelector('#errorM');
const mainCard = document.querySelector('.inCardContent');
const Card = document.querySelector('#card');
const successMessage = document.querySelector('.successMessage');
const mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/



email.addEventListener('change', function() {
    if(email.value.match(mailRegex)){
        email.classList.remove('error');
        email.classList.add('correct');
        errorM.innerHTML = "";

        submit.addEventListener('click', function() {
            mainCard.classList.add('hide');
            mainCard.classList.remove('inCardContent');
            successMessage.classList.remove('hide');


            console.log("test");
            console.log(mainCard.classList);
        })
        
    }else{
        email.classList.add('error');
        email.classList.remove('correct');
        errorM.innerHTML = "Valid email required";
       
    }
})