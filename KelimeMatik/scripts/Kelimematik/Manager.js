var InitializeManager = function()
{
    Questions = [];
    Results = [];
    
    QuestionCountInTest = 20;
    QuestionDefaultDuration = 20;
    
    QuestionsAreSelectable = true;
    
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
    $("#question_number_text").text(CurrentQuestionNumber);
    
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
    if (!QuestionsAreSelectable) return;
    QuestionsAreSelectable = false;
    
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
    
    window.setTimeout(ShowCorrectAnswer(userChoice), 200);
}

var ShowCorrectAnswer = function(userChoice)
{
    $("#header_center_true_text").text(AnswerTrueCount);
    $("#header_center_false_text").text(AnswerFalseCount);
    
    if (QuestionResult)
    {
        TrueSelection($("#kelimematik_option_" + String.fromCharCode(userChoice + 96)).parent());
    }
    else
    {
        WrongSelection($("#kelimematik_option_" + String.fromCharCode(userChoice + 96)).parent());
        TrueSelection($("#kelimematik_option_" + String.fromCharCode(CurrentQuestion.CorrectOption + 96)).parent());
    }
    
    window.setTimeout(function() {ShowNewQuestion(QuestionResult)}, (QuestionResult) ? 1000 : 2000);
}

var ShowNewQuestion = function(userAnswer)
{
    window.clearInterval(ProgressBarInterval);
    window.clearInterval(UpdateDurationInterval);
    
    RevertButtonsToDefault();
    QuestionsAreSelectable = true;
    
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
    SendResult(Results);
}

$(document).ready(function() {
    InitializeManager();
});