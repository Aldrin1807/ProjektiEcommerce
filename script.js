// function validate(){
//     firstN = document.getElementById("fname").value;
//     lastN = document.getElementById("lname").value;
//     userName = document.getElementById("uName").value;
//     Email = document.getElementById("email").value;
//     passW = document.getElementById("pass").value;
//     if(firstN==''||lastN==''||userName==''||Email==''||passW==''){
//         document.getElementById("fname").style.borderColor = "red";
//         document.getElementById("lname").style.borderColor = "red";
//         document.getElementById("uName").style.borderColor = "red";
//         document.getElementById("email").style.borderColor = "red";
//         document.getElementById("pass").style.borderColor = "red";
//     }else{
//         document.getElementById("fname").style.borderColor = "black";
//         document.getElementById("lname").style.borderColor = "black";
//         document.getElementById("uName").style.borderColor = "black";
//         document.getElementById("email").style.borderColor = "black";
//         document.getElementById("pass").style.borderColor = "black";
//     }
// }
// const slides = document.querySelectorAll(".slide");
// var counter=0;
// // console.log(slides);
// slides.forEach(
//     (slide,index) =>{
//         slide.style.left = `${index*100}%`
//     }
// )
// const goPrev = () =>{
//     counter--
//     slideImage();
// }
// const goNext = () =>{
//     counter++
//     slideImage();
// }

// const slideImage = () => {
//     slides.forEach(
//         (slide)=>{
//             slide.style.transform = `translateX(-${counter*100}%)`
//         }
//     )
// }
// var i=0;
// var images = []
// var time =3000;

// images[0] = ";
// images[1] = "";

// function changeImg(){
//     document.slide.src = images[i];
//     if(i < images.length -1){
//         i++;
//     }else{
//         i=0;
//     }
//     setTimeout("changeImg()",time);
// }
// window.onload = changeImg;