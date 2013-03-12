/**
 * Total Question Count
 */

var InitializeManager = function()
{
    Questions = [];
    Results = [];
    
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
        TestFinish();
        return;
    }
        
    CurrentQuestionNumber++;
    
    QuestionLoad();
 
    //AFTER QUESTION LOAD
    QuestionLoadedOn = new Date().getTime();
    
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
    var result = (userChoice == CurrentQuestion.CorrectOption);
    if (result)
    {
        // Answer is true
        AnswerTrueCount++;
    }
    else
    {
        // Answer is false
        AnswerFalseCount++;
    }

    ShowNewQuestion(result);
}

var ShowNewQuestion = function(userAnswer)
{
    window.clearInterval(ProgressBarInterval);
    window.clearInterval(UpdateDurationInterval);
    
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

var TestFinish = function()
{
    SendResult(Results);
}

$(document).ready(function() {
    InitializeManager();
});