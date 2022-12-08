const emri = document.getElementById('nname');
const emailii = document.getElementById('nemail');
const number = document.getElementById('nnumber');
const subject = document.getElementById('subject');

const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function login(){
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
    if(number.value.trim()==''||number.value.length<=8){
        number.style.border='2px solid red';
    }else{
        number.style.border='2px solid green';
    }
    if(subject.value.trim()==''||subject.value.length<=10){
        subject.style.border='2px solid red';
    }else{
        subject.style.border='2px solid green';
    }
    
}