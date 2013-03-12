$(".option_button").live("touchstart", function() {
    $(this).addClass("option_button_selected");
    $(this).find(".option_button_image").toggleClass('option_button_default_image option_button_selected_image');
}).live("touchend", function() {
    $(this).removeClass("option_button_selected");
    $(this).find(".option_button_image").toggleClass('option_button_default_image option_button_selected_image');
});