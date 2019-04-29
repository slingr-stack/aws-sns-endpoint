var fs = require('fs');

var FILE_NAME = "sns-helpers.js";
var CODE = '';
var SRC_USR = '';

var API = [
    {name: 'AddPermission'},
    {name: 'CheckIfPhoneNumberIsOptedOut'},
    {name: 'ConfirmSubscription'},
    {name: 'CreatePlatformApplication'},
    {name: 'CreatePlatformEndpoint'},
    {name: 'CreateTopic'},
    {name: 'DeleteEndpoint'},
    {name: 'DeletePlatformApplication'},
    {name: 'DeleteTopic'},
    {name: 'GetEndpointAttributes'},
    {name: 'GetPlatformApplicationAttributes'},
    {name: 'GetSMSAttributes'},
    {name: 'GetSubscriptionAttributes'},
    {name: 'GetTopicAttributes'},
    {name: 'ListEndpointsByPlatformApplication'},
    {name: 'ListPhoneNumbersOptedOut'},
    {name: 'ListPlatformApplications'},
    {name: 'ListSubscriptions'},
    {name: 'ListSubscriptionsByTopic'},
    {name: 'ListTopics'},
    {name: 'OptInPhoneNumber'},
    {name: 'Publish'},
    {name: 'RemovePermission'},
    {name: 'SetEndpointAttributes'},
    {name: 'SetPlatformApplicationAttributes'},
    {name: 'SetSMSAttributes'},
    {name: 'SetSubscriptionAttributes'},
    {name: 'SetTopicAttributes'},
    {name: 'Subscribe'},
    {name: 'Unsubscribe'},
];

var makeEndpointsHelpers = function () {

    for (var i in API) {
        var apiInfo = API[i];
        var method = apiInfo.name;

        var functionName = `endpoint.${method} = function(requestParameters) {\n\n`;
        functionName += `\trequestParameters = requestParameters || {};\n`;
        functionName += `\trequestParameters.Action = '${method}';\n\n`;
        functionName += `\treturn endpoint._requestAwsSdk({\n`;
        functionName += `\t\tpath: '/',\n`;
        functionName += `\t\tparams: requestParameters\n`;
        functionName += `\t});\n`;
        functionName += `};\n\n`;

        CODE += functionName;

    }


    var MESSAGE = '//////////////////////////////////////////////////////////////////////////\n';
    MESSAGE += '//                                                                      //\n';
    MESSAGE += '//  This file is generated with aws-sns/gen/gen-aws-sns-helpers.js      //\n';
    MESSAGE += '//                                                                      //\n';
    MESSAGE += '//            ' + new Date() + '                   //\n';
    MESSAGE += '//                                                                      //\n';
    MESSAGE += '//////////////////////////////////////////////////////////////////////////\n';

    CODE = MESSAGE + '\n\n' + CODE + '\n' + SRC_USR;

};

makeEndpointsHelpers();

fs.writeFile("../scripts/" + FILE_NAME, CODE, function (err) {
    if (err) {
        return console.error(err);
    }

    console.info('Generator has run successfully!');
});
