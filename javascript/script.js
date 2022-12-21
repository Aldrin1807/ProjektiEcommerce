var vargu = ['/images/bg.webp','/images/bg1.webp','/images/bg2.webp'];

var i=0;
const koha = 2500;
elementi = document.getElementById('mbajtesi');
elementi.style.transition = 'background 0.5s ease-in-out';
function krijoSlider(){
    elementi.style.backgroundImage = `url(${vargu[i]})`;
    i++;
    if(i==vargu.length){
        i=0;
    }
    setTimeout('krijoSlider()',koha);
};
