/**
 * Total Question Count
 */
var QuestionCountInTest = 20;
var QuestionDefaultDuration = 20;

var InitializeManager = function()
{
    Questions = [];
    Results = [];
    
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
    UpdateDurationInterval = setInterval(UpdateDuration(), 1000);
}

var UpdateDuration = function()
{
    
}

var QuestionLoad = function()
{
    CurrentQuestion = Questions[CurrentQuestionNumber-1];
    
    $("#kelimematik_question").text(CurrentQuestion.Question);
    $("#kelimematik_option_a").text(CurrentQuestion.Option1);
    $("#kelimematik_option_b").text(CurrentQuestion.Option2);
    $("#kelimematik_option_c").text(CurrentQuestion.Option3);
    $("#kelimematik_option_d").text(CurrentQuestion.Option4);
}

var QuestionAnswer = function(userChoice)
{
    window.clearInterval(UpdateDurationInterval);
    
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

    Results[CurrentQuestionNumber - 1] = new ResultModel
    {
        AnswerTime = (new Date().getTime() - QuestionLoadedOn) / 1000,
        QuestionID = CurrentQuestion.QuestionID,
        UserAnswer = result 
    }

    QuestionStart();
}

var TestFinish = function()
{
    SendResult(Results);

    /*
    GuiManager.LblGOTotalDuration.text = string.Format("Toplam Sure: {0}",
                                                       Mathf.RoundToInt(Time.time - _testStartedOn));

    GuiManager.LblTrueAnswerCount.text = string.Format("Dogru Cevap: {0}", AnswerTrueCount);
    GuiManager.LblFalseAnswerCount.text = string.Format("Yanlis Cevap: {0}", AnswerFalseCount);

    GuiManager.GOScene.gameObject.SetActive(true);
    GuiManager.TestScene.gameObject.SetActive(false);
    */
}

$(document).ready(function() {
    //InitializeManager();
});