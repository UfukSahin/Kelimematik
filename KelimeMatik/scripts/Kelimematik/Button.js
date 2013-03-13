$(".option_button").live("touchstart", function() {
    $(this).find(".option_button_image").toggleClass('option_button_default_image option_button_selected_image');
    
    $(this).animate({borderColor: "#691b49"}, 200);
    $(this).find(".option_button_image").animate({backgroundColor: "#691b49"}, 200);
    
}).live("touchend", function() {
    $(this).find(".option_button_image").toggleClass('option_button_default_image option_button_selected_image');
    
    $(this).animate({borderColor: "#3a3818"}, 200);
    $(this).find(".option_button_image").animate({backgroundColor: "#c9b792"}, 200);
}); 