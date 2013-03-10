var ApiAddress = "http://kelimematik.cloudapp.net/api/Words/";

var GetQuestions = function(questionCount, callback)
{
    var parameters = "{'questionCount':'" + questionCount + "','deviceID':'" + 1 + "'}";

    $.ajax({
        type: "POST",
        url: ApiAddress + "GetQuestions",
        parameters: parameters,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: callback,
        error: callback
    });
};

var SendResult = function(results, callback)
{
    var parameters = "{'GetJsonResults':'" + $.toJSON(results) + "','DeviceID':'" + 1 + "'}";
    
    $.ajax({ 
        type: "POST",
        url: ApiAddress + "SendResults",
        parameters: parameters,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: callback,
        error: callback
    });
}

