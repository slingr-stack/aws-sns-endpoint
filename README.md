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

# Javascript API

The Javascript API of the awsSns endpoint has three pieces:

- **HTTP requests**: These allow to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `GET` requests to the [awsSns API](API_URL_HERE) like this:
```javascript
var response = app.endpoints.awsSns.get('/?Action=ListSubscriptions')
```

Please take a look at the documentation of the [HTTP endpoint](https://github.com/slingr-stack/http-endpoint#javascript-api)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the endpoint:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/?Action=AddPermission'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSns.AddPermission.get()
```
---
* API URL: '/?Action=CheckIfPhoneNumberIsOptedOut'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSns.CheckIfPhoneNumberIsOptedOut.get()
```
---
* API URL: '/?Action=ConfirmSubscription'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSns.ConfirmSubscription.get()
```
---
* API URL: '/?Action=CreatePlatformApplication'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSns.CreatePlatformApplication.get()
```
---
* API URL: '/?Action=CreatePlatformEndpoint'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSns.CreatePlatformEndpoint.get()
```
---
* API URL: '/?Action=CreateTopic'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSns.CreateTopic.get()
```
---
* API URL: '/?Action=DeleteEndpoint'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSns.DeleteEndpoint.get()
```
---
* API URL: '/?Action=DeletePlatformApplication'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSns.DeletePlatformApplication.get()
```
---
* API URL: '/?Action=DeleteTopic'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSns.DeleteTopic.get()
```
---
* API URL: '/?Action=GetEndpointAttributes'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSns.GetEndpointAttributes.get()
```
---
* API URL: '/?Action=GetPlatformApplicationAttributes'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSns.GetPlatformApplicationAttributes.get()
```
---
* API URL: '/?Action=GetSMSAttributes'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSns.GetSMSAttributes.get()
```
---
* API URL: '/?Action=GetSubscriptionAttributes'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSns.GetSubscriptionAttributes.get()
```
---
* API URL: '/?Action=GetTopicAttributes'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSns.GetTopicAttributes.get()
```
---
* API URL: '/?Action=ListEndpointsByPlatformApplication'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSns.ListEndpointsByPlatformApplication.get()
```
---
* API URL: '/?Action=ListPhoneNumbersOptedOut'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSns.ListPhoneNumbersOptedOut.get()
```
---
* API URL: '/?Action=ListPlatformApplications'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSns.ListPlatformApplications.get()
```
---
* API URL: '/?Action=ListSubscriptions'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSns.ListSubscriptions.get()
```
---
* API URL: '/?Action=ListSubscriptionsByTopic'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSns.ListSubscriptionsByTopic.get()
```
---
* API URL: '/?Action=ListTopics'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSns.ListTopics.get()
```
---
* API URL: '/?Action=OptInPhoneNumber'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSns.OptInPhoneNumber.get()
```
---
* API URL: '/?Action=Publish'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSns.Publish.get()
```
---
* API URL: '/?Action=RemovePermission'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSns.RemovePermission.get()
```
---
* API URL: '/?Action=SetEndpointAttributes'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSns.SetEndpointAttributes.get()
```
---
* API URL: '/?Action=SetPlatformApplicationAttributes'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSns.SetPlatformApplicationAttributes.get()
```
---
* API URL: '/?Action=SetSMSAttributes'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSns.SetSMSAttributes.get()
```
---
* API URL: '/?Action=SetSubscriptionAttributes'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSns.SetSubscriptionAttributes.get()
```
---
* API URL: '/?Action=SetTopicAttributes'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSns.SetTopicAttributes.get()
```
---
* API URL: '/?Action=Subscribe'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSns.Subscribe.get()
```
---
* API URL: '/?Action=Unsubscribe'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSns.Unsubscribe.get()
```
---

</details>

## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the endpoint:
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>



### Generic Flow Step

Generic flow step for full use of the entire endpoint and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL (Method)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the endpoint. <br>
            Possible values are: <br>
            <i><strong>GET</strong></i>
        </td>
    </tr>
    <tr>
        <td>URL (Path)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this endpoint will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/?Action=AddPermission<br>/?Action=CheckIfPhoneNumberIsOptedOut<br>/?Action=ConfirmSubscription<br>/?Action=CreatePlatformApplication<br>/?Action=CreatePlatformEndpoint<br>/?Action=CreateTopic<br>/?Action=DeleteEndpoint<br>/?Action=DeletePlatformApplication<br>/?Action=DeleteTopic<br>/?Action=GetEndpointAttributes<br>/?Action=GetPlatformApplicationAttributes<br>/?Action=GetSMSAttributes<br>/?Action=GetSubscriptionAttributes<br>/?Action=GetTopicAttributes<br>/?Action=ListEndpointsByPlatformApplication<br>/?Action=ListPhoneNumbersOptedOut<br>/?Action=ListPlatformApplications<br>/?Action=ListSubscriptions<br>/?Action=ListSubscriptionsByTopic<br>/?Action=ListTopics<br>/?Action=OptInPhoneNumber<br>/?Action=Publish<br>/?Action=RemovePermission<br>/?Action=SetEndpointAttributes<br>/?Action=SetPlatformApplicationAttributes<br>/?Action=SetSMSAttributes<br>/?Action=SetSubscriptionAttributes<br>/?Action=SetTopicAttributes<br>/?Action=Subscribe<br>/?Action=Unsubscribe<br></strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Override Settings</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td></td>
    </tr>
    <tr>
        <td>Follow Redirect</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Download</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>If true the method won't return until the file has been downloaded, and it will return all the information of the file.</td>
    </tr>
    <tr>
        <td>File name</td>
        <td>text</td>
        <td>no</td>
        <td></td>
        <td> overrideSettings </td>
        <td>If provided, the file will be stored with this name. If empty the file name will be calculated from the URL.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

For more information about how shortcuts or flow steps works, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Flow Step


<details>
    <summary>Click here to see the Customs Flow Steps</summary>

<br>



### Custom Flow Steps Name

Description of Custom Flow Steps

### Send SMS

Sends an sms message.


<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Phone Number</td>
        <td>text</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
           The phone number to which you want to deliver an SMS message. Use E.164 format.
        </td>
    </tr>
    <tr>
        <td>Message</td>
        <td>text</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The body of the message.
        </td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>


</details>

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*

## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
