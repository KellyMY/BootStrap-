function slide1(){
    document.getElementById("slide").src = "image/image1.jpg";
    setTimeout(slide2(), 3000);
}
function slide2(){
    document.getElementById("slide").src = "image/image2.jpg";
    setTimeout(slide3(), 3000);
}
function slide3(){
    document.getElementById("slide").src = "image/image3.jpg";
    setTimeout(slide1(), 3000);
}