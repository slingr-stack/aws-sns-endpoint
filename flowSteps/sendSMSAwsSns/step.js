step.sendSMSAwsSns = function (inputs) {

    var inputsLogic = {

        phoneNumber: inputs.phoneNumber || "",
        message: inputs.message || ""
    }

    return endpoint.sendSMS(inputsLogic.phone, inputsLogic.message);
}