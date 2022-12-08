const emaili = document.getElementById('Lemail');
const passwordi = document.getElementById('Lpassword');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function login(){
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
}