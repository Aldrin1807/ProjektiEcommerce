const emri = document.getElementById('fname');
const mbiemri = document.getElementById('lname');
const username = document.getElementById('username');
const emaili =document.getElementById('email');
const passwordi = document.getElementById('password');

const userRegex =/^[a-zA-Z]+$/;
const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function signUp(){
    if(emri.value.trim()==''||emri.value.length<2){
        emri.style.border='2px solid red';
    }else{
        emri.style.border='2px solid green';
    }
    if(mbiemri.value.trim()==''||mbiemri.value.length<2){
        mbiemri.style.border='2px solid red';
    }else{
        mbiemri.style.border='2px solid green';
    }
    if(username.value.trim()==''||!userRegex.test(username.value)||username.value.length<8){
        username.style.border='2px solid red';
    }else{
        username.style.border='2px solid green';
    }
    if(emaili.value.trim()==''||!emailRegex.test(emaili.value)){
        emaili.style.border='2px solid red';
    }else{
        emaili.style.border='2px solid green';
    }
    if(passwordi.value.trim()==''||passwordi.value.length<8){
        passwordi.style.border='2px solid red';
      }else{
        passwordi.style.border='2px solid green';
    }
   // window.location.replace('../index.html');
};