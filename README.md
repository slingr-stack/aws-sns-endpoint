---
title: AWS Simple Notification Service endpoint
keywords: 
last_updated: March 8, 2019
tags: []
summary: "Detailed description of the API of the AWS Simple Notification Service  endpoint."
---

## Overview

The AWS Simple Notification Service endpoint has the following features:
 
- Authentication
- Automatic signing of request
- Helpers to use the REST API

Please make sure you take a look at the documentation from AWS Simple Notification Service as features are based on its API:

- [API Reference](https://docs.aws.amazon.com/sns/latest/api/Welcome.html)

## Quick start

First of all you will need to create an instance for AWS Connect. Once you have created it and the
endpoint is configured, you can start making calls to the API. For example you can list users (up
to 10) like this:

After you configure the key and secret you can use the helpers to send an SMS. 

```js
// sending SMS to phone number using E.164 format 
var res = app.endpoints.proxy.sendSMS('+502616968877',"Hello World!");
log(res);
```

```js
var res = app.endpoints.proxy.Publish({
 'PhoneNumber':'+542616960088',
 'Message':'Hello world!'
});
log(JSON.stringify(res));
```

Or you can retrieve the topics list:

```js
var topicsRes = app.endpoints.proxy.ListTopics();
```

## Configuration

In order to configure the endpoint, you previously need to have an AWS account and an instance
created for AWS Connect.

### AWS Access Key

The access key for the user making the calls. Make sure the user has access to your AWS Connect instance.

### AWS Secret Access Key

The secret access key for the user making the calls. Make sure the user has access to your AWS Connect instance.

### Region

The region where your AWS Connect instance was created. For example `us-east-1`.


## Javascript API

### REST API shortcuts

The endpoint provides methods to access all methods in the [REST API](https://docs.aws.amazon.com/sns/latest/api/Welcome.html).
Here is a list of the available methods in the API, but you should check AWS Simple Notification Service documentation for more
information:

```js
endpoint.awssns.AddPermission(requestParameters);
endpoint.awssns.CheckIfPhoneNumberIsOptedOut(requestParameters);
endpoint.awssns.ConfirmSubscription(requestParameters);
endpoint.awssns.CreatePlatformApplication(requestParameters);
endpoint.awssns.CreatePlatformEndpoint(requestParameters);
endpoint.awssns.CreateTopic(requestParameters);
endpoint.awssns.DeleteEndpoint(requestParameters);
endpoint.awssns.DeletePlatformApplication(requestParameters);
endpoint.awssns.DeleteTopic(requestParameters);
endpoint.awssns.GetEndpointAttributes(requestParameters);
endpoint.awssns.GetPlatformApplicationAttributes(requestParameters);
endpoint.awssns.GetSMSAttributes(requestParameters);
endpoint.awssns.GetSubscriptionAttributes(requestParameters);
endpoint.awssns.GetTopicAttributes(requestParameters);
endpoint.awssns.ListEndpointsByPlatformApplication(requestParameters);
endpoint.awssns.ListPhoneNumbersOptedOut(requestParameters);
endpoint.awssns.ListPlatformApplications(requestParameters);
endpoint.awssns.ListSubscriptions(requestParameters);
endpoint.awssns.ListSubscriptionsByTopic(requestParameters);
endpoint.awssns.ListTopics(requestParameters);
endpoint.awssns.OptInPhoneNumber(requestParameters);
endpoint.awssns.Publish(requestParameters);
endpoint.awssns.RemovePermission(requestParameters);
endpoint.awssns.SetEndpointAttributes(requestParameters);
endpoint.awssns.SetPlatformApplicationAttributes(requestParameters);
endpoint.awssns.SetSMSAttributes(requestParameters);
endpoint.awssns.SetSubscriptionAttributes(requestParameters);
endpoint.awssns.SetTopicAttributes(requestParameters);
endpoint.awssns.Subscribe(requestParameters);
endpoint.awssns.Unsubscribe(requestParameters);
```

## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
