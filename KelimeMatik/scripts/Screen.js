var givePercentageHeight = {
    
    "option_buttons": 0.5,
    "question_text_area": 0.15,
    "header": 0.1,
    "progress_bar_holder": 0.1,
    
    //score screen
    
    "score_header": 0.2,
    "score_content": 0.6,
    "score_bottom": 0.2
    
}

$(document).ready(function() {

    for (var className in givePercentageHeight)
    {
        $("." + className).css("height", screen.height *  givePercentageHeight[className]);
    }
   
    
    $(document).ready(function() 
    {
        
        $(".option_button_image").css("margin-left", $(".option_button_image").css("height").replace("px", "")*-0.55);
        $(".option_button_image").css("width", $(".option_button_image").css("height"));
        
        $(".option-button-selection").css("font-size", $(".option-button-selection").css("height").replace("px", "")*0.5 + "px");
        $(".option_button").css("font-size", $(".option_button").css("height").replace("px", "")*0.4 + "px");
        
        
        $("#question_number").css("margin-left", $("#question_number").css("height").replace("px", "")*-0.55);
        $("#question_number").css("width", $("#question_number").css("height"));
        $("#question_number_text").css("font-size", $("#question_number_text").css("height").replace("px", "")*0.4 + "px");
        
        
        $(".question_text_inner").css("font-size", $(".question_text_inner").css("height").replace("px", "")*0.2 + "px");
        
        $(".header_center_img").css("height", $(".header_center_img").css("width"));
       
        $(".header_button").css("height", $(".header_button").css("width"));
       
        // score screen   
        
        $(".main_container").hide();
        $(".score_center_img").css("height", $(".score_center_img").css("width"));
        
        
        //ortak
        var that = this;
        $(".option_button_image").click(function(e){that.onMenuClick();});
        
    });
        
    this.onMenuClick = function(){
        
    };
    
    
});




