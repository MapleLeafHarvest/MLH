0.0791765637371338

$(document).ready(function(){
//headerLeft();
displayMobile();
$(window).scroll(function (event) {




});


});

/*function headerLeft(){
var headL = $(window).width() * 0.0791765637371338;

document.getElementById('headR').style.left= headL +"px";

}*/
function navBar(){
 var pos = $(window).scrollTop();
 
 if ( pos > 495){
document.getElementById('navTest').style.display= "block"; 

 }
 
 else if ( pos< 495)
 document.getElementById('navTest').style.display= "none"; 


    
}

function videoH(){
 var pos = $(window).scrollTop();

 if ( pos > 495){
document.getElementById('vid').style.display= "none"; 

 }
 
 else if ( pos< 495)
 document.getElementById('vid').style.display= "block"; 


}

function videoPos(){

var windowW = $(window).width()/2;
var posL = windowW - 250;
document.getElementById('vid').style.left= posL+"px";



}

function displayMobile(){

var windowW = $(window).width();

if ( windowW <800 )
document.getElementById('originalNav').style.display ="none";

else if (windowW > 800)
document.getElementById('originalNav').style.display ="block";



}




$(document).ready(function(){
$( window ).resize(function() {
//headerLeft();
displayMobile();


});
 });