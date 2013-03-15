$(".option_button").live("touchstart", function(e) {
    ButtonSelected($(this));
}).live("touchend", function(e) {
    //alert(e.target.innerHTML);
});

var ButtonSelected = function(jqueryObj)
{
    if (!QuestionsAreSelectable) return;
    
    jqueryObj.css({borderColor: "#691b49"});
    jqueryObj.find(".option_button_image").css({backgroundColor: "#691b49"});
}

var WrongSelection = function(jqueryObj)
{
    jqueryObj.css({borderColor: "#bd2626"});
    jqueryObj.find(".option_button_image").css({backgroundColor: "#bd2626"});
}

var TrueSelection = function(jqueryObj)
{
    TotalBlinkCount = 3;
    BlinkCount = 0;
    Delay = 200;
    
    TurnOnButton(jqueryObj);
}

var TurnOnButton = function(jqueryObj)
{    
    jqueryObj.css({borderColor: "#1e8d46"}); 
    jqueryObj.find(".option_button_image").css({backgroundColor: "#1e8d46"});
    window.setTimeout(function() {TurnOffButton(jqueryObj)}, Delay);
}

var TurnOffButton = function(jqueryObj)
{
    if (BlinkCount >= TotalBlinkCount - 1) return;
    
    jqueryObj.css({borderColor: "#3a3818"});
    jqueryObj.find(".option_button_image").css({backgroundColor: "#c9b792"});
    
    window.setTimeout(function() {TurnOnButton(jqueryObj)}, Delay);
    BlinkCount++;
}

var RevertButtonsToDefault = function()
{
    $(".option_button").stop().css("border-color", "#3a3818");
    $(".option_button").find(".option_button_image").stop().css("background-color", "#c9b792");
}