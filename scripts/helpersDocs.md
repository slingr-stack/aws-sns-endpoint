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

*MANUALLY ADD THE DOCUMENTATION OF THESE FLOW STEPS HERE...*


</details>

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*