function freezeFunction() {
    var script = document.createElement("script");

    script.innerHTML = "confirmSubscriptionOn = false;"
    script.innerHTML += "ureadCheckCookie = undefined;"
    script.innerHTML += "ureadUpdateMeterBar = undefined;"
    script.innerHTML += "ureadSetDefault = undefined;"
    script.innerHTML += "ureadCheckCookie = undefined;"
    script.innerHTML += "ureadArticle = undefined;"
    script.innerHTML += "ureadMeterReached = undefined;"
    script.innerHTML += "ureadMeterRemain = undefined;"
    script.innerHTML += "uReadDisplayMsgBox = undefined;"
    script.innerHTML += "ureadUpdateMeterBar = undefined;"
    script.innerHTML += "ureadOMOLogin = undefined;"
    script.innerHTML += "ureadPrepareParams = undefined;";
    $('head').prepend(script);
}

$(document).ready(function () {
    freezeFunction();
});