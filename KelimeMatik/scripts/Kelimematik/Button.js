$(".option_button").live("touchstart", function(e) {
    ButtonSelected($(this));
}).live("touchend", function(e) {
});

var ButtonSelected = function(jqueryObj)
{
    jqueryObj.animate({borderColor: "#691b49"}, 200);
    jqueryObj.find(".option_button_image").animate({backgroundColor: "#691b49"}, 200);
}

var WrongSelection = function(jqueryObj)
{
    jqueryObj.animate({borderColor: "#bd2626"}, 200);
    jqueryObj.find(".option_button_image").animate({backgroundColor: "#bd2626"}, 200);
}

var TrueSelection = function(jqueryObj)
{
    jqueryObj.animate({borderColor: "#1e8d46"}, 200);
    jqueryObj.find(".option_button_image").animate({backgroundColor: "#1e8d46"}, 200);
}

var RevertButtonsToDefault = function()
{
    $(".option_button").stop().css("border-color", "#3a3818");
    $(".option_button").find(".option_button_image").stop().css("background-color", "#c9b792");
}