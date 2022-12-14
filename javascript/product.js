
const produkti1 = document.getElementsByClassName("produkti")[0];
// const produkti2 = document.getElementsByClassName("produkti")[1];
// const produkti3 = document.getElementsByClassName("produkti")[2];
// const produkti4 = document.getElementsByClassName("produkti")[3];
// const produkti5 = document.getElementsByClassName("produkti")[4];
// const produkti7 = document.getElementsByClassName("produkti")[6];
// const produkti6 = document.getElementsByClassName("produkti")[5];
// const produkti8 = document.getElementsByClassName("produkti")[7];

var h1shi = document.getElementById('h1shi');
var h3shi = document.getElementById('h3shi');
var paragrafi = document.getElementById('paragrafi');
// var div = document.getElementById('foto');
var imgs = document.getElementById('fotoja');
var img1= '/images/1.jpg';
var img2= '/images/2.jpg';
var img3= '/images/3.jpg';
var img4= '/images/4.jpg';
var img5= '/images/5.jpg';
var img6= '/images/6.jpg';
var img7= '/images/7.jpg';
var img8= '/images/8.jpg';
function produktiNR(n){
    if(n==1){
        imgs.src=img1;
        h1shi.innerHTML= 'Produkti 1';
        h3shi.innerHTML='500 Euro';
        paragrafi.innerHTML = 'Ky produkt eshte bla bla bla ';  
        }else if(n==2){
            imgs.src=img2;
            h1shi.innerHTML= 'Produkti 2';
            h3shi.innerHTML='500 Euro'
            paragrafi.innerHTML = 'Ky produkt eshte bla bla bla ';
        }else if(n==3){
            imgs.src=img3;
            h1shi.innerHTML= 'Produkti 3';
            h3shi.innerHTML='500 Euro'
            paragrafi.innerHTML = 'Ky produkt eshte bla bla bla ';
        }else if(n==4){
            imgs.src=img4;
            h1shi.innerHTML= 'Produkti 4';
            h3shi.innerHTML='500 Euro'
            paragrafi.innerHTML = 'Ky produkt eshte bla bla bla ';
        }else if(n==5){
            imgs.src=img5;
            h1shi.innerHTML= 'Produkti 5';
            h3shi.innerHTML='490 Euro'
            paragrafi.innerHTML = 'Ky produkt eshte bla bla bla ';
        }else if(n==6){
            imgs.src=img6;
            h1shi.innerHTML= 'Produkti 6';
            h3shi.innerHTML='500 Euro'
            paragrafi.innerHTML = 'Ky produkt eshte bla bla bla ';
        }else if(n==7){
            imgs.src=img7;
            h1shi.innerHTML= 'Produkti 7';
            h3shi.innerHTML='500 Euro'
            paragrafi.innerHTML = 'Ky produkt eshte bla bla bla ';
        }else if(n==8){
            imgs.src=img8;
            h1shi.innerHTML= 'Produkti 8';
            h3shi.innerHTML='500 Euro'
            paragrafi.innerHTML = 'Ky produkt eshte bla bla bla ';
        }
    };

produktiNR(3);



// function produkti1(){
//     window.location.href = 'produkti.html'
//     imgs.src=img1;
//     h1shi.innerHTML= 'Produkti 1';
//     h3shi.innerHTML='500 Euro';
//     paragrafi.innerHTML = 'Ky produkt eshte bla bla bla ';  
// }   
// var n=1;
// function redirectToPage(nr){
//     window.location.href='produkti.html';
//     n=nr;
// }
// produktiNR(n);





















