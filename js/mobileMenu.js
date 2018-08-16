$(function(){
    let menuVisible = false; 
    
    let menuOpen = $("#menuOpen");
    let menuClose = $("#menuClose"); 
    
    menuOpen.on("click", function(){
        if (!menuVisible) {
            $("#mobileMenu").animate({left:"0vw"}, "fast", function(){
                menuVisible = true; 
            });
        }
    });
    
    menuClose.on("click", function(){
        if (menuVisible) {
            $("#mobileMenu").animate({left:"-50vw"}, "fast", function(){
                menuVisible = false; 
            });
        }
    });
});