
const produkti1 = document.getElementsByClassName("produkti")[0];
const produkti2 = document.getElementsByClassName("produkti")[1];
const produkti3 = document.getElementsByClassName("produkti")[2];
const produkti4 = document.getElementsByClassName("produkti")[3];
const produkti5 = document.getElementsByClassName("produkti")[4];
const produkti7 = document.getElementsByClassName("produkti")[6];
const produkti6 = document.getElementsByClassName("produkti")[5];
const produkti8 = document.getElementsByClassName("produkti")[7];

//Elementet qe duhet te ndryshohen ne faqen produkti.html
var h1shi = document.getElementById('h1shi');
var h3shi = document.getElementById('h3shi');
var paragrafi = document.getElementById('paragrafi');
var imgs = document.getElementById('fotoja');

//Fotot per secilin produkt
var img1= '../images/1.jpg';
var img2= '../images/2.jpg';
var img3= '../images/3.jpg';
var img4= '../images/4.jpg';
var img5= '../images/5.jpg';
var img6= '../images/6.jpg';
var img7= '../images/7.jpg';
var img8= '../images/8.jpg';


//Funksioni qe i ndryshon elementet varesisht prej parametrit
function produktiNR(n){
    if(n==1){
        imgs=img1;
        h1shi.innerHTML= 'Produkti 1';
        h3shi.innerHTML='500 Euro';
        paragrafi.innerHTML = 'Ky produkt eshte bla bla bla ';  
        }else if(n==2){
            imgs=img2;
            h1shi.innerHTML= 'Produkti 2';
            h3shi.innerHTML='500 Euro';
            paragrafi.innerHTML = 'Ky produkt eshte bla bla bla ';
        }else if(n==3){
            imgs=img3;
            h1shi.innerHTML= 'Produkti 3';
            h3shi.innerHTML='500 Euro';
            paragrafi.innerHTML = 'Ky produkt eshte bla bla bla ';
        }else if(n==4){
            imgs=img4;
            h1shi.innerHTML= 'Produkti 4';
            h3shi.innerHTML='500 Euro';
            paragrafi.innerHTML = 'Ky produkt eshte bla bla bla ';
        }else if(n==5){
            imgs=img5;
            h1shi.innerHTML= 'Produkti 5';
            h3shi.innerHTML='490 Euro';
            paragrafi.innerHTML = 'Ky produkt eshte bla bla bla ';
        }else if(n==6){
            imgs=img6;
            h1shi.innerHTML= 'Produkti 6';
            h3shi.innerHTML='500 Euro';
            paragrafi.innerHTML = 'Ky produkt eshte bla bla bla ';
        }else if(n==7){
            imgs=img7;
            h1shi.innerHTML= 'Produkti 7';
            h3shi.innerHTML='500 Euro';
            paragrafi.innerHTML = 'Ky produkt eshte bla bla bla ';
        }else if(n==8){
            imgs=img8;
            h1shi.innerHTML= 'Produkti 8';
            h3shi.innerHTML='500 Euro';
            paragrafi.innerHTML = 'Ky produkt eshte bla bla bla ';
        }
    };

    class VStatic{
        static n = 1;
        static updateStatic(newValue){
            this.n=newValue;
            localStorage.setItem("myStaticVariable", newValue);
        }
    }

    function redirectTo(num){
        console.log('clicked');
        VStatic.updateStatic(num);
        window.location.href = 'produkti.html';
        console.log(VStatic.n);
        
    }
    console.log(VStatic.n);
    function change(){
        VStatic.n = localStorage.getItem("myStaticVariable");
        produktiNR(VStatic.n);
    }
    













    //Nqs e thirrim jasht funksionit te addeventlistenerit funksionon per me ndrru kontentin
    // produktiNR(8);

    // produkti1.addEventListener('click',function(){
    //     // produktiNR(1);
    //     //Nqs e kem para nuk e ndrron faqen hiq
    //     window.location.href = 'produkti.html';
    //     produktiNR(1);
    //     //Nqs osht mbrapa vetem e ndrron faqen se ekzekuton funksionin hiq.
        
    // });





















