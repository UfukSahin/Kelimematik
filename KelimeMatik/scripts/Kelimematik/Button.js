$(".option_button").live("touchstart", function(e) {
    ButtonSelected($(this));
});
$(".play_button_container").live("touchstart", function(e) {
    $(".play_button_inner").css("background-color", "#7d594c");
});



  var toObjectSource = function(obj)   {
     if(obj === null)   {
        return "[null]";
     }
     if(obj === undefined) {
        return "[undefined]";
     }

     var str = "[";
     var member = null;
     for(var each in obj)   {
        try   {
           member = obj[each];
           str += each + "=" + member + ", ";
        }catch(err) {
           alert(err);
        }
     }
     return str + "]";
  }

var DeselectAll = function()
{
    $(".option_button").removeClass("option_button_selected");
    $(".option-button-image-common").removeClass("option-button-image-selected");
    $(".play_button_inner").css("background-color", "#c9a28f");
}

var ButtonSelected = function(jqueryObj)
{
    if (!QuestionsAreSelectable) return;
    
    jqueryObj.addClass("option_button_selected");
    jqueryObj.find(".option_button_image div").addClass("option-button-image-selected");
}

var ButtonDeselected = function(jqueryObj)
{
    jqueryObj.removeClass("option_button_selected");
    jqueryObj.find(".option_button_image div").removeClass("option-button-image-selected");
}

var WrongSelection = function(jqueryObj)
{
    jqueryObj.removeClass("option_button_selected");
    jqueryObj.find(".option_button_image div").removeClass("option-button-image-selected");
    
    jqueryObj.addClass("option_button_false");
    jqueryObj.find(".option_button_image div").addClass("option-button-image-false");
}

var TrueSelection = function(jqueryObj)
{    
    ButtonDeselected(jqueryObj);
    
    TotalBlinkCount = 5;
    BlinkCount = 0;
    Delay = 200;
    TurnOnButton(jqueryObj);
}

var TurnOnButton = function(jqueryObj)
{    
    jqueryObj.addClass("option_button_true");
    jqueryObj.find(".option_button_image div").addClass("option-button-image-true");
    
    window.setTimeout(function() {TurnOffButton(jqueryObj)}, Delay);
}

var TurnOffButton = function(jqueryObj)
{
    jqueryObj.removeClass("option_button_true");
    jqueryObj.find(".option_button_image div").removeClass("option-button-image-true");

    if (BlinkCount >= TotalBlinkCount-1) return;
    
    window.setTimeout(function() {TurnOnButton(jqueryObj)}, Delay);
    BlinkCount++;
}

var RevertButtonsToDefault = function()
{
    $(".option_button").removeClass("option_button_false");
    $(".option_button").find(".option_button_image div").removeClass("option-button-image-false");
}