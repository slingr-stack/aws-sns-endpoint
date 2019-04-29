package io.slingr.endpoints.awssns;

import com.amazonaws.*;
import com.amazonaws.auth.AWS4Signer;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.http.*;
import com.amazonaws.services.sns.AmazonSNS;
import com.amazonaws.services.sns.AmazonSNSClientBuilder;
import com.amazonaws.services.sns.model.AmazonSNSException;
import com.amazonaws.services.sns.model.PublishRequest;
import com.amazonaws.services.sns.model.PublishResult;
import com.amazonaws.util.IOUtils;
import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.framework.annotations.EndpointFunction;
import io.slingr.endpoints.framework.annotations.EndpointProperty;
import io.slingr.endpoints.framework.annotations.SlingrEndpoint;
import io.slingr.endpoints.utils.Json;
import io.slingr.endpoints.ws.exchange.FunctionRequest;
import org.apache.commons.lang.StringUtils;
import org.eclipse.jetty.http.HttpHeader;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.net.URI;

/**
 * <p>SNS endpoint
 * <p>
 * API Reference: https://docs.aws.amazon.com/sns/latest/api/Welcome.html
 *
 * <p>Created by hpacini on 03/06/19.
 */
@SlingrEndpoint(name = "aws-sns")
public class AwsSnsEndpoint extends HttpEndpoint {

    private static final Logger logger = LoggerFactory.getLogger(AwsSnsEndpoint.class);
    private static final String SERVICE_NAME = "sns";

    @EndpointProperty
    private String accessKey;

    @EndpointProperty
    private String secretAccessKey;

    @EndpointProperty
    private String region;

    public AwsSnsEndpoint() {
    }

    @Override
    public String getApiUri() {
        return "https://sns." + region + ".amazonaws.com";
    }

    @Override
    public void endpointStarted() {
    }

    @EndpointFunction(name = "_sendSMS")
    public Json sendSMS(FunctionRequest functionRequest) {

        BasicAWSCredentials awsCreds = new BasicAWSCredentials(accessKey, secretAccessKey);
        AmazonSNS amazonSNS = AmazonSNSClientBuilder.standard().withCredentials(new AWSStaticCredentialsProvider(awsCreds)).withRegion(region).build();

        Json functionParams = functionRequest.getJsonParams();
        Json requestParams = functionParams.json("params");

        String phone = functionParams.string("phone");
        String message = functionParams.string("message");

        Json resp = Json.map();

        PublishRequest publishRequest = new PublishRequest();
        publishRequest.setPhoneNumber(phone);
        publishRequest.setMessage(message);

        if (StringUtils.isEmpty(phone) || StringUtils.isEmpty(message)) {
            resp.set("code", 400);
            resp.set("error", "phone and message are required!");
            return resp;
        }

        try {
            PublishResult result = amazonSNS.publish(publishRequest);

            resp.set("code", 200);
            resp.set("MessageId", result.getMessageId());
        } catch (AmazonSNSException ex) {
            resp.set("code", ex.getErrorCode());
            resp.set("error", ex.getErrorMessage());
        }

        return resp;
    }

    @EndpointFunction(name = "_requestAwsSdk")
    public Json requestAwsSdk(FunctionRequest functionRequest) {

        final String SERVICE_URI = "https://" + SERVICE_NAME + "." + region + ".amazonaws.com";

        BasicAWSCredentials awsCredentials = new BasicAWSCredentials(accessKey, secretAccessKey);

        //Instantiate the request
        Request<Void> request = new DefaultRequest<>(SERVICE_NAME);
        request.setHttpMethod(HttpMethodName.GET);
        request.setEndpoint(URI.create(SERVICE_URI));

        Json functionParams = functionRequest.getJsonParams();
        Json requestParams = functionParams.json("params");

        for (String key : requestParams.keys()) {
            Object val = requestParams.object(key);
            if (val != null) {
                request.withParameter(key, (String) val);
            }
        }

        //Sign it...
        AWS4Signer signer = new AWS4Signer();
        signer.setRegionName(region);
        signer.setServiceName(request.getServiceName());
        signer.sign(request, awsCredentials);

        ClientConfiguration configuration = new ClientConfiguration();
        configuration.addHeader(HttpHeader.CONTENT_TYPE.asString(), "application/json;charset=UTF-8");
        configuration.addHeader(HttpHeader.ACCEPT.asString(), "application/json");

        try {
            //Execute it and get the response...
            Response<AmazonWebServiceResponse<String>> response = new AmazonHttpClient(configuration)
                    .requestExecutionBuilder()
                    .executionContext(new ExecutionContext(true))
                    .request(request)
                    .errorResponseHandler(new ErrorResponseHandler())
                    .execute(new StringResponseHandler());
            return Json.parse(response.getAwsResponse().getResult());
        }catch(AmazonSNSException ex){
            return Json.parse(ex.getErrorMessage());
        }

    }


    public class StringResponseHandler implements HttpResponseHandler<AmazonWebServiceResponse<String>> {

        @Override
        public AmazonWebServiceResponse<String> handle(com.amazonaws.http.HttpResponse response) throws IOException {

            AmazonWebServiceResponse<String> awsResponse = new AmazonWebServiceResponse<>();

            //putting response string in the result, available outside the handler
            awsResponse.setResult(IOUtils.toString(response.getContent()));

            return awsResponse;
        }

        @Override
        public boolean needsConnectionLeftOpen() {
            return false;
        }

    }


    public class ErrorResponseHandler implements HttpResponseHandler<SdkBaseException> {


        @Override
        public SdkBaseException handle(HttpResponse response) throws Exception {

            SdkBaseException sdkBaseException = new AmazonSNSException(IOUtils.toString(response.getContent()));
            ((AmazonSNSException) sdkBaseException).setStatusCode(response.getStatusCode());

            return sdkBaseException;
        }

        @Override
        public boolean needsConnectionLeftOpen() {
            return false;
        }
    }

}
