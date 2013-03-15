var givePercentageHeight = {
    
    "option_buttons": 0.5,
    "question_text_area": 0.15,
    "header": 0.1,
    "progress_bar_holder": 0.06,
    
    //score screen
    "score_container": 0.8
    
    /*
    "score_header": 0.2,
    "score_content": 0.6,
    "score_bottom": 0.2
    */
}

$(document).ready(function() {
 
    for (var className in givePercentageHeight)
    {
        $("." + className).css("height", screen.height *  givePercentageHeight[className]);
    }
        
    $(".option_button_image").css("margin-left", $(".option_button_image").css("height").replace("px", "")*-0.55);
    $(".option_button_image").css("width", $(".option_button_image").css("height"));
    
    $(".option-button-selection").css("font-size", $(".option-button-selection").css("height").replace("px", "")*0.5 + "px");
    $(".option_button").css("font-size", $(".option_button").css("height").replace("px", "")*0.4 + "px");
    
    
    $("#question_number").css("margin-left", $("#question_number").css("height").replace("px", "")*-0.55);
    $("#question_number").css("width", $("#question_number").css("height"));
    $("#question_number_text").css("font-size", $("#question_number_text").css("height").replace("px", "")*0.4 + "px");
    
    $("#header_center_true_text").css("font-size", $("#question_number_text").css("height").replace("px", "")*0.7 + "px");
    $("#header_center_false_text").css("font-size", $("#question_number_text").css("height").replace("px", "")*0.7 + "px");
    
    $(".question_text_inner").css("font-size", $(".question_text_inner").css("height").replace("px", "")*0.2 + "px");
    
    $("#progress_bar_value").css("font-size", $("#progress_bar_left").css("height").replace("px", "")*0.5 + "px");
    
    $(".header_center_img").css("height", $(".header_center_img").css("width"));
   
    $(".header_button").css("height", $(".header_button").css("width"));
    
    $("#progress_bar_left").css("width", $("#progress_bar_left").css("height"));
    $("#progress_bar_border, #progress_bar").css("border-width", Math.round(screen.height / 480));
   
    // score screen   
    $(".score_center_img").css("height", $(".score_center_img").css("width"));
    
    //ortak
    var that = this;
    $(".option_button_image").click(function(e){that.onMenuClick();});
    
    
    $(".main_container").hide();
        
        
    this.onMenuClick = function(){
        
    };
    
    
});




