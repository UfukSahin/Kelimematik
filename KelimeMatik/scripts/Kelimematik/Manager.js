var QuestionsAreSelectable = true;

var InitializeManager = function()
{
    Questions = [];
    Results = [];
    Score = 0
    QuestionCountInTest = 20;
    QuestionDefaultDuration = 20;
    
    GetQuestions(20, QuestionsLoaded);
}

var QuestionsLoaded = function(data)
{
    // Questions are loaded
    Questions = data;
    Start();
}

var Start = function()
{
    AnswerTrueCount = 0; 
    AnswerFalseCount = 0;
    CurrentQuestionNumber = 0;

    QuestionStart();
    TestStartedOn = new Date().getTime();
    
    ProgressBarPercentage = 100;
}

var QuestionStart = function()
{
    RemainingTime = QuestionDefaultDuration;
    
    if (CurrentQuestionNumber == QuestionCountInTest)
    { 
        Finish();
        return;
    }
        
    CurrentQuestionNumber++;
    //$("#question_number_text").text(CurrentQuestionNumber + "/" + QuestionCountInTest);
    
    QuestionLoad();
    QuestionsAreSelectable = true;
 
    //AFTER QUESTION LOAD
    QuestionLoadedOn = new Date().getTime();
    
    $("#progress_bar_value").text(RemainingTime); 
    
    ProgressBarInterval = setInterval(function() {UpdateProgressBar()}, 100);
    UpdateDurationInterval = setInterval(function() {UpdateDuration()}, 1000);
}

var UpdateProgressBar = function()
{
    ProgressBarPercentage -= 0.5;
    $("#progress_bar").css("width", ProgressBarPercentage + "%");
}

var UpdateDuration = function()
{ 
    RemainingTime--;
    $("#progress_bar_value").text(RemainingTime);
    
    if (RemainingTime < 0)
    {
        // Skip the question
        ShowNewQuestion(null);
    }
}

var QuestionLoad = function()
{
    CurrentQuestion = Questions[CurrentQuestionNumber-1];
    
    $(".question_text_inner").text(CurrentQuestion.Question); 
    $("#kelimematik_option_a").text(CurrentQuestion.Option1);
    $("#kelimematik_option_b").text(CurrentQuestion.Option2);
    $("#kelimematik_option_c").text(CurrentQuestion.Option3);
    $("#kelimematik_option_d").text(CurrentQuestion.Option4);
}

var QuestionAnswer = function(userChoice)
{    
    if (!QuestionsAreSelectable) return;
    QuestionsAreSelectable = false;
    
    window.clearInterval(ProgressBarInterval);
    window.clearInterval(UpdateDurationInterval);
    
    QuestionResult = (userChoice == CurrentQuestion.CorrectOption);
    if (QuestionResult)
    {
        // Answer is true
        AnswerTrueCount++;
    }
    else
    {
        // Answer is false
        AnswerFalseCount++;
    }
    
    window.setTimeout(function(){ShowCorrectAnswer(userChoice)}, 200);
}

var QuestionSkip = function()
{
    QuestionResult = null;
    QuestionsAreSelectable = false;
    window.setTimeout(function(){ShowCorrectAnswer(0)}, 100);
}

var ShowCorrectAnswer = function(userChoice)
{
    $("#header_center_true_text").text(AnswerTrueCount);
    $("#header_center_false_text").text(AnswerFalseCount);
    
    var animationTime = 0;
    if (QuestionResult == null)
    {
        animationTime = 2500;
        TrueSelection($("#kelimematik_option_" + String.fromCharCode(CurrentQuestion.CorrectOption + 96)).parent());
    }
    else if (QuestionResult)
    {
        animationTime = 2000;
        TrueSelection($("#kelimematik_option_" + String.fromCharCode(CurrentQuestion.CorrectOption + 96)).parent());
    }    
    else
    {
        animationTime = 2500;
        WrongSelection($("#kelimematik_option_" + String.fromCharCode(userChoice + 96)).parent());
        TrueSelection($("#kelimematik_option_" + String.fromCharCode(CurrentQuestion.CorrectOption + 96)).parent());
    }
    
    window.setTimeout(function() {ShowNewQuestion(QuestionResult)}, animationTime);
}

var ShowNewQuestion = function(userAnswer)
{
    window.clearInterval(ProgressBarInterval);
    window.clearInterval(UpdateDurationInterval);
    
    RemainingTime = 20;
    
    RevertButtonsToDefault();
    
    ProgressBarPercentage = 100;
    
    $("#progress_bar").css("width", "99%");
    
    Results[CurrentQuestionNumber - 1] = new ResultModel
    {
        AnswerTime = (new Date().getTime() - QuestionLoadedOn) / 1000,
        QuestionID = CurrentQuestion.QuestionID,
        UserAnswer = userAnswer 
    }

    QuestionStart();
}

var Finish = function()
{   
    $("#score_true_text").text(AnswerTrueCount);
    $("#score_false_text").text(AnswerFalseCount);
    var testDuration = Math.round((new Date().getTime()-TestStartedOn)/1000);
    $("#score_time_text").text(testDuration + " sn");
    Score = Math.round((6000/testDuration)*AnswerTrueCount - (AnswerFalseCount*10));
    if (Score < 0) Score = 0;
    $("#score_text").text(Score);
    
    $(".main_container").hide();
    $(".score_container").show()
    SendResult(Results);
}

var StartGame = function()
{
    InitializeManager();
    
    $(".main_container").show();
    $(".score_container").hide()
}

$(document).ready(function() {
    StartGame();
});


var PublishOnTwitter = function()
{
    var feed_url = "http://twitter.com/home?status=Kelimematikte%20" + Score + "%20ile%20rekor%20k%C4%B1rd%C4%B1m!%20Beni%20ge%C3%A7ebilir%20misin%3F%20http%3A%2F%2Fbit.ly%2FYywUDD%20";
    
    cb = window.plugins.childBrowser;
    cb.onLocationChange = function(loc){ twitterLocChanged(loc); };
    if(cb != null) {  cb.showWebPage(feed_url); }  
}

var PublishOnFacebook = function()
{        
    var feed_url = "https://www.facebook.com/dialog/feed?app_id=230526797090723&" 
    feed_url += "link=http://itunes.com/apps/kelimematik&" 
    feed_url += "picture=http://img7.imageshack.us/img7/9079/kelimematikfacebook.jpg&"
    feed_url += "name=Hangimizin%20ingilizcesi%20daha%20iyi%3F&"
    feed_url += "caption=Kelimematik'te%20" + Score + "%20puan%20yapt%C4%B1m.%20Beni%20ge%C3%A7ebilir%20misin%3F&"
    feed_url += "description=Hadi%20o%20zaman%2C%20g%C3%B6ster%20kendini!&"
    feed_url += "redirect_uri=http://www.facebook.com/connect/login_success.html";

                   
    cb = window.plugins.childBrowser;
    cb.onLocationChange = function(loc){ facebookLocChanged(loc); };
    if(cb != null) {  cb.showWebPage(feed_url); }  
        
}
function ClearLocalStorage(){
    window.localStorage.clear();
    app.navigate("#tabstrip-home");
}

function facebookLocChanged(loc){
    if (loc.indexOf("login_success.html?post_id") > -1) { 
        window.plugins.childBrowser.close();
       app.navigate("#tabstrip-home");
   }
}

function twitterLocChanged(loc)
{
    if (loc.substring(loc.length - 12, loc.length) == "twitter.com/")
    {
        window.plugins.childBrowser.close();
        app.navigate("#tabstrip-home");
    }
}