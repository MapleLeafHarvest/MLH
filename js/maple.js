$(document).ready(function(){
$(window).scroll(function (event) {
		var test =$('#logo').offset().top- $(window).scrollTop();
		var test2 =$('#other').offset().top;


	 if ( $(window).scrollTop() < 222)
    {
	    var scroll = $(window).scrollTop()/3;
			    var scroll2 = $(window).scrollTop()/100;

        if( test < 50){
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
	else if ($(window).scrollTop() > 222 &&  test >= 10 ){
                    document.getElementById('logo').style.top = $('#logo').offset().top- $(window).scrollTop() - 2+"px";
				//			   	       document.getElementById('other').style.top= $('#other').offset().top-$(window).height() -scroll2+'px';

					alignLogo();

	}
	
	
	



});


});

function centerSlogan(){
var w= $('#sloganW').width()/2;
 var windowW= $(window).width()/2;
 
 var leftR = (windowW- w) +10;

 document.getElementById('sloganW').style.left= leftR+"px";
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
});
 });
 
 




