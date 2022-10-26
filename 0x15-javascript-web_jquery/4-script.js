$("#toggle_header").click(()=>{
   $('header').hasClass("red") == false ?  $('header').removeClass("green").addClass("red") : $('header').removeClass("red").addClass("green"); 
})