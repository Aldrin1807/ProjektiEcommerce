const emri = document.getElementById('name');
const emailii = document.getElementById('email');

const subject = document.getElementById('c1');

const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function send(){
    if(emri.value.trim()==''||emri.value.length<=2||emailii.value.trim()==''||!emailRegex.test(emailii.value)||subject.value.trim()==''||subject.value.length<=10){
    if(emri.value.trim()==''||emri.value.length<=2){
        emri.style.border='2px solid red';
    }else{
        emri.style.border='2px solid green';
    }
    if(emailii.value.trim()==''||!emailRegex.test(emailii.value)){
        emailii.style.border='2px solid red';
    }else{
        emailii.style.border='2px solid green';
    }
    if(subject.value.trim()==''||subject.value.length<=10){
        subject.style.border='2px solid red';
    }else{
        subject.style.border='2px solid green';
    }
    }else{
        window.location.replace('contact.html');
    }
};