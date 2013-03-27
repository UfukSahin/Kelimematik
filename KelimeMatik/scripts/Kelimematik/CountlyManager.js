
function SendFinishEvent(trueCount, falseCount, questionCount, score, testDuration)
{
    var demoEvent = new CountlyEvent();
    demoEvent.Key = "TestComplated";
    demoEvent.Count = 1;
    demoEvent.UsingSegmentation = true;

    var demoSegmentation = new SegmentationObject();
    demoSegmentation.Key = "TrueAnswer";
    demoSegmentation.Value = trueCount;

    demoEvent.Segmentation.push(demoSegmentation);
    
    demoSegmentation = new SegmentationObject();
    demoSegmentation.Key = "FalseAnswer";
    demoSegmentation.Value = falseCount;

    demoEvent.Segmentation.push(demoSegmentation);
    
    demoSegmentation = new SegmentationObject();
    demoSegmentation.Key = "QuestionCount";
    demoSegmentation.Value = questionCount;

    demoEvent.Segmentation.push(demoSegmentation);
    
    demoSegmentation = new SegmentationObject();
    demoSegmentation.Key = "TestDuration";
    demoSegmentation.Value = testDuration;

    demoEvent.Segmentation.push(demoSegmentation);
    
    demoSegmentation = new SegmentationObject();
    demoSegmentation.Key = "Score";
    demoSegmentation.Value = score;

    demoEvent.Segmentation.push(demoSegmentation);
    
    Countly.PostEvent(demoEvent);
}


function SendStartEvent()
{
    var demoEvent = new CountlyEvent();
    demoEvent.Key = "TestStarted";
    demoEvent.Count = 1;
    demoEvent.UsingSegmentation = false;
    
    Countly.PostEvent(demoEvent);
}

// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
function onDeviceReady() 
{
    Countly.Init("https://cloud.count.ly","9bf6d6a73fbf582c34f260c72ba5c7586487a1dd","1.1",device.uuid);
    
    document.addEventListener("pause", onPause, false);
    document.addEventListener("resume", onResume, false);
    
    Countly.OnStart();
    
    function onPause() 
    {
        Countly.OnStop();
    }
    
    function onResume() 
    {
        Countly.OnStart();
    }
    
}