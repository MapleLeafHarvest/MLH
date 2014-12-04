$(document).ready(function(){
//$(this).scrollTop(0);
headingHeight();

videoPos();
buttonPos();
centerSlogan();
//logoSizeTop(); //
//displayDrop();
var temp;
logoSize();

temp= $(window).height();
document.getElementById('headline').height= temp+"px";
logoVerify();
navBar();
navDisplay();
navDisplay2();
alignLogo();
//logoM();
videoPos();
buttonPos();

$(window).scroll(function (event) {
		var test =$('#logo').offset().top- $(window).scrollTop();
		var test2 =$('#other').offset().top;
//otherEffect();		
navBar();
navDisplay();
navDisplay2();
logoM();
logoVerify();
logoSize();
//logoSizeTop(); //

buttonH();
videoH();

	 if ( $(window).scrollTop() < 222)
    {
	    var scroll = $(window).scrollTop()/3;
			    var scroll2 = $(window).scrollTop()/100;

				if ($(window).scrollTop() <=2){
				             document.getElementById('logo').style.top = 50+"px";
							 				             

				}
        else if( test < 50){
             document.getElementById('logo').style.top = $('#logo').offset().top- $(window).scrollTop() + 2+"px";
            document.getElementById('logo').style.height= 150-scroll+"px";
	       document.getElementById('logo').style.width= 150-scroll+"px";
		   	      // document.getElementById('other').style.top= $('#other').offset().top-$(window).height() -scroll2+'px';

	alignLogo();

	    }
		
	
	   else {
	
	      document.getElementById('logo').style.height= 150-scroll+"px";
	     document.getElementById('logo').style.width= 150-scroll+"px";
		 	//	   	       document.getElementById('other').style.top= $('#other').offset().top-$(window).height() -scroll2+'px';

		 alignLogo();

	}
	}
	 
	else if ($(window).scrollTop() > 222 &&  test > 10 ){
	  
	
                    document.getElementById('logo').style.top = $('#logo').offset().top- $(window).scrollTop() - 2+"px";
				//			   	       document.getElementById('other').style.top= $('#other').offset().top-$(window).height() -scroll2+'px';

					alignLogo();
				

	}




});


});


function logoM(){
 var pos =$(window).scrollTop();
 var windowH = $(window).height();
 if (pos > windowH){

     document.getElementById('logo').top= 5+"px";
}
}
function navBar(){
 var pos = $(window).scrollTop();
 var widthW =$(window).width();
 var heightW = $(window).height();
var splitter= heightW - (heightW * 0.12389380530973451);
 if ( pos > splitter && widthW >900){
document.getElementById('navTest').style.display= "block"; 


 }
 
 else if ( pos< splitter && widthW>900)
 document.getElementById('navTest').style.display= "none"; 
 
 else if ( pos> splitter && widthW<900)
 document.getElementById('navTest').style.display= "none"; 


    
}

function logoVerify(){

var pos = $(window).scrollTop();
var windowH =$(window).height();
if (pos > windowH){
  document.getElementById('logo').style.height= 78.6667+"px";
    document.getElementById('logo').style.width= 78.6667+"px";
    document.getElementById('logo').style.top= 10+"px";
   // document.getElementById('logo').style.left= 231+"px";

}

}

/*function otherEffect(){
var increment=1;
var pos = $(window).scrollTop();
var getOtherPos = $('#other').offset().top;
if (pos < 495 && getOtherPos > 20){
document.getElementById('other').style.marginTop = -(getOtherPos - increment) +"px";
}


}
*/
function logoSize(){

var pos = $(window).scrollTop();
var windowH = 495;
if (pos > 495){
  document.getElementById('logo').style.height= 78.6667+"px";
    document.getElementById('logo').style.width= 78.6667+"px";
   

}

}
/*function displayDrop(){
$( "#about" ).click(function() {
document.getElementById('dropTest').style.display ="none"
});


} */

function logoSizeTop(){
var pos = $(window).scrollTop();

if (pos ==0){
document.getElementById('logo').style.height=150+"px";
document.getElementById('logo').style.width=150+"px";
}
} 
function navDisplay(){
 var pos = $(window).scrollTop();
 var widthW =$(window).width();
var heightW = $(window).height();
var splitter= heightW - (heightW * 0.12389380530973451);
 if ( pos > splitter && widthW >900){
document.getElementById('headliner2').style.display= "none"; 

 }
 
 else if ( pos< splitter && widthW > 900)

document.getElementById('headliner2').style.display= "block"; 

else if ( pos< splitter && widthW < 900)

document.getElementById('headliner2').style.display= "none"; 
    
} 

function navDisplay2(){
 var pos = $(window).scrollTop();
 var widthW =$(window).width();
var heightW = $(window).height();
var splitter= heightW - (heightW * 0.12389380530973451);

 if ( pos > splitter && widthW > 900){
document.getElementById('headliners').style.display= "block"; 

 }
 
 else if ( pos< splitter && widthW > 900)

document.getElementById('headliners').style.display= "none"; 
    
	 else if ( pos> splitter && widthW < 900)

document.getElementById('headliners').style.display= "none"; 
  
}

function videoH(){
 var pos = $(window).scrollTop();
var windowH = $(window).height();
 if ( pos > 495){
document.getElementById('vid').style.display= "none"; 

 }
 
 else if ( pos< 495)
 document.getElementById('vid').style.display= "block"; 


}

function headingHeight(){
var heightH= $(window).height();

document.getElementById('headline').style.height=heightH+"px";
}
function videoPos(){

var windowW = $(window).width()/2;
var sloganTop = $('#sloganW').offset().top;
var sloganHeight = $('#sloganW').height();
var windowH =$(window).height();

var posL = windowW - 250;
document.getElementById('vid').style.left= posL+"px";
document.getElementById('vid').style.top= sloganHeight+sloganTop+ (windowH * 0.04424778761061947)+"px";



}
function displayMobile(){

var windowW = $(window).width();

if ( windowW <900 )
document.getElementById('headliners').style.display ="none";

else if (windowW > 900)
document.getElementById('headliners').style.display ="block";



}

function buttonPos(){
var windowW = $(window).width()/2;
var vidTop= $('#vid').offset().top;
var vidH = $('#vid').height();
var windowH =$(window).height();
var posL = windowW - 62.2;
document.getElementById('supportB1').style.left= posL+"px";
document.getElementById('supportB1').style.top= vidTop+vidH+ (windowH * 0.04424778761061947)+"px"; 

}



function buttonH(){
 var pos = $(window).scrollTop();
 var windowH = $(window).height();

 if ( pos > (windowH-10)){
document.getElementById('supportB1').style.display= "none"; 

 }
 
 else if ( pos< (windowH-10))
 document.getElementById('supportB1').style.display= "block"; 


}

function centerSlogan(){
var w= $('#sloganW').width()/2;
 var windowW= $(window).width()/2;
 var windowH= $(window).height();
 
 var leftR = (windowW- w) +10;
var topR = 0.17699115044247787 * windowH;
 document.getElementById('sloganW').style.left= leftR+"px";
  document.getElementById('sloganW').style.top= topR+"px";

}

function alignLogo(){
var windowS= $(window).width();
var logoW= $('#logo').width();
var slo = $('#sloganW').width()/2;
var offs= $('#logo').offset().left;
var leftL= windowS- (logoW+(0.05304829770387965*windowS)+ (windowS/2) + slo);
  
  document.getElementById('logo').style.left= leftL+"px";
   
}

$(document).ready(function(){
$( window ).resize(function() {
centerSlogan();
alignLogo();
videoPos();
buttonPos();
displayMobile();
});
 });
 
 




