/**
 * Total Question Count
 */
var QuestionCount = 20;

var InitializeManager = function()
{
    Questions = new QuestionModel[QuestionCount];
    Results = new ResultModel[QuestionCount];
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
    
    
    GuiManager.LblQuestion.text = _currentQuestion.Question;
    GuiManager.LblChoice1.text = _currentQuestion.Option1;
    GuiManager.LblChoice2.text = _currentQuestion.Option2;
    GuiManager.LblChoice3.text = _currentQuestion.Option3;
    GuiManager.LblChoice4.text = _currentQuestion.Option4;
    GuiManager.LblChoice5.text = _currentQuestion.Option5;
}