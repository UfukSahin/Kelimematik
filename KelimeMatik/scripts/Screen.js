var givePercentageHeight = {
    "ad-placeholder" : 0.1,
    "option_buttons": 0.48,
    "question_text_area": 0.12,
    "header": 0.1,
    "header_button": 0.15,
    "header_center_img": 0.13,
    "progress_bar_holder": 0.06,
    "option-button-text": 0.03,
    
    //score screen
    "score_container": 0.8,
    "score_header": 0.01,
    "score_content_border": 0.65,
    "score_bottom": 0.2,
    "score_content": 0.3,
    "publish_buttons": 0.11,
    "repeat_button": 0.2,
    "score_content_images": 0.04,
    "start_sceen_container": 1
}

$(document).ready(function() {
    
    var element;
    document.addEventListener('touchstart', function(event) {
        var touch = event.touches[0];
        element = document.elementFromPoint(touch.pageX,touch.pageY);
    }, false);
    
    document.addEventListener('touchmove', function(event) {
        event.preventDefault();
        var touch = event.touches[0]; 
        if (element !== document.elementFromPoint(touch.pageX,touch.pageY)) {
            DeselectAll();
        } 
    }, false);
    
    for (var className in givePercentageHeight)
    {
        $("." + className).css("height", window.innerHeight *  givePercentageHeight[className]);
    }
        
    $(".option_button_image").css("margin-left", $(".option_button_image").css("height").replace("px", "")*-0.7);
    $(".option_button_image").css("width", $(".option_button_image").css("height"));
    $(".option_button_image").css("height", $(".option_button").css("height") * 0.8);
    
    $(".option_button_border").css("width", $(".option_button_border").css("width").replace("px", "")*0.8);
    
    
    $(".option_button").css("font-size", $(".option_button").css("height").replace("px", "")*0.36  + "px");
    
    
    $("#question_number").css("margin-top", $("#question_number").css("height").replace("px", "")*-0.5);
    $("#question_number").css("margin-left", $("#question_number").css("height").replace("px", "")*-1);
    $("#question_number").css("width", $("#question_number").css("height").replace("px", "")*2 + "px");
    $("#question_number_text").css("font-size", $("#question_number_text").css("height").replace("px", "")*0.7 + "px");
    
    $("#header_center_true_text").css("font-size", $(".header").css("height").replace("px", "")*0.5 + "px");
    $("#header_center_false_text").css("font-size", $(".header").css("height").replace("px", "")*0.5 + "px");
    
    $(".question_text_inner").css("font-size", $(".question_text_inner").css("height").replace("px", "")*0.3 + "px");
    
    $("#progress_bar_value").css("font-size", $("#progress_bar_left").css("height").replace("px", "")*0.5 + "px");
    
    $(".header_center_img").css("width", $(".header_button").css("height"));
    $(".header_button").css("width", $(".header_button").css("height"));
    
    $("#progress_bar_left").css("width", $("#progress_bar_left").css("height"));
    $("#progress_bar_border, #progress_bar").css("border-width", Math.round(screen.height / 480));
   
    // score screen   
    $(".score_center_img").css("height", $(".score_center_img").css("width"));
    $(".score_content").css("margin-top", $("#score_time").css("height"));
    $(".score_content").css("width", $(".score_content").css("height").replace("px", "")*1.5);
    
    $(".publish_buttons").css("width", $("#score_publish_facebook").css("height"));
    $("#score_publish").css("width", $("#score_publish").css("width").replace("px", "")*2.5);
    
    $("#score_publish").css("margin-top", $("#score_publish").css("height").replace("px", "")*0.1);
   
    $("#repeat_button").css("width", $("#repeat_button").css("height"));
    $("#repeat_button").css("margin-top", $("#repeat_button").css("height").replace("px", ""));
    
    $(".score_content_images").css("margin-top", $(".score_content_images").css("height").replace("px", "")*-0.03);
    
    $(".score_font_size").css("font-size", $(".score_center_img").css("height").replace("px", "")*0.3 + "px");
    $("#score_text").css("font-size", $(".score_content").css("height").replace("px", "")*0.15 + "px");
    
    $(".play_button_inner").css("font-size", $(".play_button_inner").css("height").replace("px", "")*0.5 + "px");
    $(".start_screen_connection_fail").css("font-size", $(".play_button_inner").css("height").replace("px", "")*0.212 + "px");
    
    $("#skip_button_text").css("font-size", $("#skip_button_inner").css("height").replace("px", "")*0.4 + "px");
    
    $("#repeat_button_text").css("font-size", $("#repeat_button_inner").css("height").replace("px", "")*0.3 + "px");
    
    //ortak
    var that = this;
    $(".option_button_image").click(function(e){that.onMenuClick();});
    
    $(".score_container").hide();
});






