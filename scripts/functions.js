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
