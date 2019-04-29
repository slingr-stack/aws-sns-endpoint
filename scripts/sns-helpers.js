//////////////////////////////////////////////////////////////////////////
//                                                                      //
//  This file is generated with aws-sns/gen/gen-aws-sns-helpers.js      //
//                                                                      //
//            Mon Mar 11 2019 16:54:16 GMT-0300 (-03)                   //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


endpoint.AddPermission = function(requestParameters) {

	requestParameters = requestParameters || {};
	requestParameters.Action = 'AddPermission';

	return endpoint._requestAwsSdk({
		path: '/',
		params: requestParameters
	});
};

endpoint.CheckIfPhoneNumberIsOptedOut = function(requestParameters) {

	requestParameters = requestParameters || {};
	requestParameters.Action = 'CheckIfPhoneNumberIsOptedOut';

	return endpoint._requestAwsSdk({
		path: '/',
		params: requestParameters
	});
};

endpoint.ConfirmSubscription = function(requestParameters) {

	requestParameters = requestParameters || {};
	requestParameters.Action = 'ConfirmSubscription';

	return endpoint._requestAwsSdk({
		path: '/',
		params: requestParameters
	});
};

endpoint.CreatePlatformApplication = function(requestParameters) {

	requestParameters = requestParameters || {};
	requestParameters.Action = 'CreatePlatformApplication';

	return endpoint._requestAwsSdk({
		path: '/',
		params: requestParameters
	});
};

endpoint.CreatePlatformEndpoint = function(requestParameters) {

	requestParameters = requestParameters || {};
	requestParameters.Action = 'CreatePlatformEndpoint';

	return endpoint._requestAwsSdk({
		path: '/',
		params: requestParameters
	});
};

endpoint.CreateTopic = function(requestParameters) {

	requestParameters = requestParameters || {};
	requestParameters.Action = 'CreateTopic';

	return endpoint._requestAwsSdk({
		path: '/',
		params: requestParameters
	});
};

endpoint.DeleteEndpoint = function(requestParameters) {

	requestParameters = requestParameters || {};
	requestParameters.Action = 'DeleteEndpoint';

	return endpoint._requestAwsSdk({
		path: '/',
		params: requestParameters
	});
};

endpoint.DeletePlatformApplication = function(requestParameters) {

	requestParameters = requestParameters || {};
	requestParameters.Action = 'DeletePlatformApplication';

	return endpoint._requestAwsSdk({
		path: '/',
		params: requestParameters
	});
};

endpoint.DeleteTopic = function(requestParameters) {

	requestParameters = requestParameters || {};
	requestParameters.Action = 'DeleteTopic';

	return endpoint._requestAwsSdk({
		path: '/',
		params: requestParameters
	});
};

endpoint.GetEndpointAttributes = function(requestParameters) {

	requestParameters = requestParameters || {};
	requestParameters.Action = 'GetEndpointAttributes';

	return endpoint._requestAwsSdk({
		path: '/',
		params: requestParameters
	});
};

endpoint.GetPlatformApplicationAttributes = function(requestParameters) {

	requestParameters = requestParameters || {};
	requestParameters.Action = 'GetPlatformApplicationAttributes';

	return endpoint._requestAwsSdk({
		path: '/',
		params: requestParameters
	});
};

endpoint.GetSMSAttributes = function(requestParameters) {

	requestParameters = requestParameters || {};
	requestParameters.Action = 'GetSMSAttributes';

	return endpoint._requestAwsSdk({
		path: '/',
		params: requestParameters
	});
};

endpoint.GetSubscriptionAttributes = function(requestParameters) {

	requestParameters = requestParameters || {};
	requestParameters.Action = 'GetSubscriptionAttributes';

	return endpoint._requestAwsSdk({
		path: '/',
		params: requestParameters
	});
};

endpoint.GetTopicAttributes = function(requestParameters) {

	requestParameters = requestParameters || {};
	requestParameters.Action = 'GetTopicAttributes';

	return endpoint._requestAwsSdk({
		path: '/',
		params: requestParameters
	});
};

endpoint.ListEndpointsByPlatformApplication = function(requestParameters) {

	requestParameters = requestParameters || {};
	requestParameters.Action = 'ListEndpointsByPlatformApplication';

	return endpoint._requestAwsSdk({
		path: '/',
		params: requestParameters
	});
};

endpoint.ListPhoneNumbersOptedOut = function(requestParameters) {

	requestParameters = requestParameters || {};
	requestParameters.Action = 'ListPhoneNumbersOptedOut';

	return endpoint._requestAwsSdk({
		path: '/',
		params: requestParameters
	});
};

endpoint.ListPlatformApplications = function(requestParameters) {

	requestParameters = requestParameters || {};
	requestParameters.Action = 'ListPlatformApplications';

	return endpoint._requestAwsSdk({
		path: '/',
		params: requestParameters
	});
};

endpoint.ListSubscriptions = function(requestParameters) {

	requestParameters = requestParameters || {};
	requestParameters.Action = 'ListSubscriptions';

	return endpoint._requestAwsSdk({
		path: '/',
		params: requestParameters
	});
};

endpoint.ListSubscriptionsByTopic = function(requestParameters) {

	requestParameters = requestParameters || {};
	requestParameters.Action = 'ListSubscriptionsByTopic';

	return endpoint._requestAwsSdk({
		path: '/',
		params: requestParameters
	});
};

endpoint.ListTopics = function(requestParameters) {

	requestParameters = requestParameters || {};
	requestParameters.Action = 'ListTopics';

	return endpoint._requestAwsSdk({
		path: '/',
		params: requestParameters
	});
};

endpoint.OptInPhoneNumber = function(requestParameters) {

	requestParameters = requestParameters || {};
	requestParameters.Action = 'OptInPhoneNumber';

	return endpoint._requestAwsSdk({
		path: '/',
		params: requestParameters
	});
};

endpoint.Publish = function(requestParameters) {

	requestParameters = requestParameters || {};
	requestParameters.Action = 'Publish';

	return endpoint._requestAwsSdk({
		path: '/',
		params: requestParameters
	});
};

endpoint.RemovePermission = function(requestParameters) {

	requestParameters = requestParameters || {};
	requestParameters.Action = 'RemovePermission';

	return endpoint._requestAwsSdk({
		path: '/',
		params: requestParameters
	});
};

endpoint.SetEndpointAttributes = function(requestParameters) {

	requestParameters = requestParameters || {};
	requestParameters.Action = 'SetEndpointAttributes';

	return endpoint._requestAwsSdk({
		path: '/',
		params: requestParameters
	});
};

endpoint.SetPlatformApplicationAttributes = function(requestParameters) {

	requestParameters = requestParameters || {};
	requestParameters.Action = 'SetPlatformApplicationAttributes';

	return endpoint._requestAwsSdk({
		path: '/',
		params: requestParameters
	});
};

endpoint.SetSMSAttributes = function(requestParameters) {

	requestParameters = requestParameters || {};
	requestParameters.Action = 'SetSMSAttributes';

	return endpoint._requestAwsSdk({
		path: '/',
		params: requestParameters
	});
};

endpoint.SetSubscriptionAttributes = function(requestParameters) {

	requestParameters = requestParameters || {};
	requestParameters.Action = 'SetSubscriptionAttributes';

	return endpoint._requestAwsSdk({
		path: '/',
		params: requestParameters
	});
};

endpoint.SetTopicAttributes = function(requestParameters) {

	requestParameters = requestParameters || {};
	requestParameters.Action = 'SetTopicAttributes';

	return endpoint._requestAwsSdk({
		path: '/',
		params: requestParameters
	});
};

endpoint.Subscribe = function(requestParameters) {

	requestParameters = requestParameters || {};
	requestParameters.Action = 'Subscribe';

	return endpoint._requestAwsSdk({
		path: '/',
		params: requestParameters
	});
};

endpoint.Unsubscribe = function(requestParameters) {

	requestParameters = requestParameters || {};
	requestParameters.Action = 'Unsubscribe';

	return endpoint._requestAwsSdk({
		path: '/',
		params: requestParameters
	});
};


