const con = document.getElementById('contact');
const adr=document.getElementById('address');
const cityy=document.getElementById('city');
const zipp=document.getElementById('zip');
const tel=document.getElementById('phone');

const conRegex= /^[A-Za-z]{3,}$/;
const adrRegex= /^[A-Za-z0-9\ \.]+$/;
const cityRegex=/^[A-Za-z]+$/;
const zipRegex=/^[A-Za-z0-9\ \.]{3,}$/;
const telRegex=/^[0-9]{3}-[0-9]{3}-[0-9]{3}$/;

function order(){
    if(!conRegex.test(con.value)){
        con.style.border='2px solid red';
        alert("Emri duhet te permbaje vetem Shkronja dhe minimumi i karaktereve eshe 3");
      }
      else{
        con.style.border='2px solid green';
      }
      if(!adrRegex.test(adr.value)){
        adr.style.border='2px solid red';
        alert("Adresa nuk eshte ne rregull");
      }else{
        adr.style.border='2px solid green';
      }
      if(!cityRegex.test(cityy.value)){
        cityy.style.border='2px solid red';
        alert("Qyteti duhet te pembaje vetem shkronja");
      }else{
        cityy.style.border='2px solid green';
      }
      if(!zipRegex.test(zipp.value)){
        zipp.style.border='2px solid red';
        alert("Ju lutem plotesoni ne menyre te rregullt fushene kodit postar");
      }else{
        zipp.style.border='2px solid green';
      }
      if(!telRegex.test(tel.value)){
        tel.style.border='2px solid red';
        alert("Numri juaj duhet te jete ne kete forme(04x-xxx-xxx)");
      }else{
        tel.style.border='2px solid green';
      }
   
   
}