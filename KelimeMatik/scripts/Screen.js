var givePercentageHeight = {
    
    "option_buttons": 0.5,
    "question_text_area": 0.2
}

$(document).ready(function() {

    for (var className in givePercentageHeight)
    {
        $("." + className).css("height", screen.height *  givePercentageHeight[className]);
    } 
    
});