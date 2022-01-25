/*$("p").click(function () { 
  alert("Hello World");
  
});*/
/*$("#Home").hide();
$("#Forms").hide();
$("#About").hide();
$(document).ready(function () {
    $("#Home").fadeIn(2000);
    $("#Forms").fadeIn(2500);
    $("#About").fadeIn(3000);
});*/

$("#Home").hover(function () {
  $(this).addClass("boxShadow");
   
 }, function () {
   $(this).removeClass("boxShadow");
 }
); 

$("#Forms").hover(function () {
  $(this).addClass("boxShadow");
   
 }, function () {
   $(this).removeClass("boxShadow");
 }
); 

$("#About").hover(function () {
  $(this).addClass("boxShadow");
   
 }, function () {
   $(this).removeClass("boxShadow");
 }
); 

$("img").hover(function () {
    $(this).addClass("hvr-grow-shadow");
    $(this).addClass("hvr-border-fade");

    
  }, function () {
    $(this).removeClass("hvr-grow-shadow");
    $(this).removeClass("hvr-border-fade");
  }
);

$("#forms").hover(function () {
  $(this).addClass("hoverontext");
    
  }, function () {
    $(this).removeClass("hoverontext");
  }
);

$("#about").hover(function () {
  $(this).addClass("hoverontext");
    
  }, function () {
    $(this).removeClass("hoverontext");
  }
);
$("#general").hover(function () {
  $(this).addClass("hoverontext");
    
  }, function () {
    $(this).removeClass("hoverontext");
  }
);


$("#forms").click(function () { 
  alert("Answer our forms survey and part take in our research!");
  
});
$("#about").click(function () { 
  alert("Get to know more about the researchers");
  
});
$("#general").click(function () { 
  alert("Get to know about our paper");
  
});

$("#Home h2").hover(function () {
    $(this).addClass("ul");
    
  }, function () {
    $(this).removeClass("ul");
  }
);