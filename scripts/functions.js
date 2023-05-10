////////////////////////////////////////////////////////////////////////////
//                                                                        //
//             This file was generated with "slingr-helpgen"              //
//                                                                        //
//               For more info, check the following links:                //
//             https://www.npmjs.com/package/slingr-helpgen               //
//           https://github.com/slingr-stack/slingr-helpgen               //
//                                                                        //
////////////////////////////////////////////////////////////////////////////

endpoint.AddPermission = {};

endpoint.CheckIfPhoneNumberIsOptedOut = {};

endpoint.ConfirmSubscription = {};

endpoint.CreatePlatformApplication = {};

endpoint.CreatePlatformEndpoint = {};

endpoint.CreateTopic = {};

endpoint.DeleteEndpoint = {};

endpoint.DeletePlatformApplication = {};

endpoint.DeleteTopic = {};

endpoint.GetEndpointAttributes = {};

endpoint.GetPlatformApplicationAttributes = {};

endpoint.GetSMSAttributes = {};

endpoint.GetSubscriptionAttributes = {};

endpoint.GetTopicAttributes = {};

endpoint.ListEndpointsByPlatformApplication = {};

endpoint.ListPhoneNumbersOptedOut = {};

endpoint.ListPlatformApplications = {};

endpoint.ListSubscriptions = {};

endpoint.ListSubscriptionsByTopic = {};

endpoint.ListTopics = {};

endpoint.OptInPhoneNumber = {};

endpoint.Publish = {};

endpoint.RemovePermission = {};

endpoint.SetEndpointAttributes = {};

endpoint.SetPlatformApplicationAttributes = {};

endpoint.SetSMSAttributes = {};

endpoint.SetSubscriptionAttributes = {};

endpoint.SetTopicAttributes = {};

endpoint.Subscribe = {};

endpoint.Unsubscribe = {};

endpoint.AddPermission.get = function(httpOptions) {
    var url = parse('/?Action=AddPermission');
    sys.logs.debug('[awsSns] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.CheckIfPhoneNumberIsOptedOut.get = function(httpOptions) {
    var url = parse('/?Action=CheckIfPhoneNumberIsOptedOut');
    sys.logs.debug('[awsSns] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ConfirmSubscription.get = function(httpOptions) {
    var url = parse('/?Action=ConfirmSubscription');
    sys.logs.debug('[awsSns] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.CreatePlatformApplication.get = function(httpOptions) {
    var url = parse('/?Action=CreatePlatformApplication');
    sys.logs.debug('[awsSns] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.CreatePlatformEndpoint.get = function(httpOptions) {
    var url = parse('/?Action=CreatePlatformEndpoint');
    sys.logs.debug('[awsSns] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.CreateTopic.get = function(httpOptions) {
    var url = parse('/?Action=CreateTopic');
    sys.logs.debug('[awsSns] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.DeleteEndpoint.get = function(httpOptions) {
    var url = parse('/?Action=DeleteEndpoint');
    sys.logs.debug('[awsSns] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.DeletePlatformApplication.get = function(httpOptions) {
    var url = parse('/?Action=DeletePlatformApplication');
    sys.logs.debug('[awsSns] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.DeleteTopic.get = function(httpOptions) {
    var url = parse('/?Action=DeleteTopic');
    sys.logs.debug('[awsSns] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.GetEndpointAttributes.get = function(httpOptions) {
    var url = parse('/?Action=GetEndpointAttributes');
    sys.logs.debug('[awsSns] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.GetPlatformApplicationAttributes.get = function(httpOptions) {
    var url = parse('/?Action=GetPlatformApplicationAttributes');
    sys.logs.debug('[awsSns] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.GetSMSAttributes.get = function(httpOptions) {
    var url = parse('/?Action=GetSMSAttributes');
    sys.logs.debug('[awsSns] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.GetSubscriptionAttributes.get = function(httpOptions) {
    var url = parse('/?Action=GetSubscriptionAttributes');
    sys.logs.debug('[awsSns] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.GetTopicAttributes.get = function(httpOptions) {
    var url = parse('/?Action=GetTopicAttributes');
    sys.logs.debug('[awsSns] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ListEndpointsByPlatformApplication.get = function(httpOptions) {
    var url = parse('/?Action=ListEndpointsByPlatformApplication');
    sys.logs.debug('[awsSns] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ListPhoneNumbersOptedOut.get = function(httpOptions) {
    var url = parse('/?Action=ListPhoneNumbersOptedOut');
    sys.logs.debug('[awsSns] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ListPlatformApplications.get = function(httpOptions) {
    var url = parse('/?Action=ListPlatformApplications');
    sys.logs.debug('[awsSns] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ListSubscriptions.get = function(httpOptions) {
    var url = parse('/?Action=ListSubscriptions');
    sys.logs.debug('[awsSns] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ListSubscriptionsByTopic.get = function(httpOptions) {
    var url = parse('/?Action=ListSubscriptionsByTopic');
    sys.logs.debug('[awsSns] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ListTopics.get = function(httpOptions) {
    var url = parse('/?Action=ListTopics');
    sys.logs.debug('[awsSns] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.OptInPhoneNumber.get = function(httpOptions) {
    var url = parse('/?Action=OptInPhoneNumber');
    sys.logs.debug('[awsSns] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.Publish.get = function(httpOptions) {
    var url = parse('/?Action=Publish');
    sys.logs.debug('[awsSns] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.RemovePermission.get = function(httpOptions) {
    var url = parse('/?Action=RemovePermission');
    sys.logs.debug('[awsSns] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.SetEndpointAttributes.get = function(httpOptions) {
    var url = parse('/?Action=SetEndpointAttributes');
    sys.logs.debug('[awsSns] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.SetPlatformApplicationAttributes.get = function(httpOptions) {
    var url = parse('/?Action=SetPlatformApplicationAttributes');
    sys.logs.debug('[awsSns] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.SetSMSAttributes.get = function(httpOptions) {
    var url = parse('/?Action=SetSMSAttributes');
    sys.logs.debug('[awsSns] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.SetSubscriptionAttributes.get = function(httpOptions) {
    var url = parse('/?Action=SetSubscriptionAttributes');
    sys.logs.debug('[awsSns] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.SetTopicAttributes.get = function(httpOptions) {
    var url = parse('/?Action=SetTopicAttributes');
    sys.logs.debug('[awsSns] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.Subscribe.get = function(httpOptions) {
    var url = parse('/?Action=Subscribe');
    sys.logs.debug('[awsSns] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.Unsubscribe.get = function(httpOptions) {
    var url = parse('/?Action=Unsubscribe');
    sys.logs.debug('[awsSns] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

////////////////////////////////////
// Public API - Generic Functions //
////////////////////////////////////

endpoint.get = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options, callbackData, callbacks);
};

endpoint.post = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options, callbackData, callbacks);
};

endpoint.put = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options, callbackData, callbacks);
};

endpoint.patch = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options, callbackData, callbacks);
};

endpoint.delete = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options, callbackData, callbacks);
};

endpoint.head = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._head(options, callbackData, callbacks);
};

endpoint.options = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._options(options, callbackData, callbacks);
};

endpoint.utils = {};

endpoint.utils.parseTimestamp = function(dateString) {
    if (!dateString) {
        return null;
    }
    var dt = dateString.split(/[: T\-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
};

endpoint.utils.formatTimestamp = function(date) {
    if (!date) {
        return null;
    }
    var pad = function(number) {
        var r = String(number);
        if ( r.length === 1 ) {
            r = '0' + r;
        }
        return r;
    };
    return date.getUTCFullYear()
        + '-' + pad( date.getUTCMonth() + 1 )
        + '-' + pad( date.getUTCDate() )
        + 'T' + pad( date.getUTCHours() )
        + ':' + pad( date.getUTCMinutes() )
        + ':' + pad( date.getUTCSeconds() )
        + '.' + String( (date.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        + 'Z';
};

endpoint.utils.fromDateToTimestamp = function(params) {
    if (!!params) {
        return {timestamp: new Date(params).getTime()};
    }
    return null;
};

endpoint.utils.fromMillisToDate = function(params) {
    if (!!params) {
        var sdf = new Intl.DateTimeFormat('en-US', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            timeZone: 'UTC'
        });
        return {date: sdf.format(new Date(parseInt(params)))};
    }
    return null;
};

endpoint.encode = function(obj) {
    if(typeof obj === 'object'){
        return encodeURIComponent(JSON.stringify(obj));
    }
    return encodeURI(obj);
};

endpoint.sendSMS = function(phone, message) {

    var requestParameters = {
        phone: phone,
        message: message
    };

    return endpoint._sendSMS(requestParameters);
};


///////////////////////
//  Private helpers  //
///////////////////////

var mergeJSON = function (json1, json2) {
    const result = {};
    var key;
    for (key in json1) {
        if(json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if(json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}

var concatQuery = function (url, key, value) {
    return url + ((!url || url.indexOf('?') < 0) ? '?' : '&') + key + "=" + value;
}

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contains the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
}

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
}

var stringType = Function.prototype.call.bind(Object.prototype.toString)

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, () => {
                if (typeof (args[i]) != 'string') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
        }
    } catch (err) {
        sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
        throw err;
    }
}