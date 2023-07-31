'use strict';

const email = document.querySelector('#email');
const submit = document.querySelector('button');
const errorM = document.querySelector('#errorM');
const mainCard = document.querySelector('#card');


email.addEventListener('change', function() {
    if(email.value.includes('@') && email.value.includes('.')){
        email.classList.remove('error');
        email.classList.add('correct');
        errorM.innerHTML = "";

        submit.addEventListener('click', function() {
            mainCard.classList.add('hide');
            console.log("test");
        })
        
    }else{
        email.classList.add('error');
        email.classList.remove('correct');
        errorM.innerHTML = "Valid email required";
       
    }
})