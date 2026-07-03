function checkPassword(event) {

    event.preventDefault();

    const passwordInput =
    document.getElementById('password').value;

    const messageBox =
    document.getElementById('message');

    /*
    Internal Dev Note:

    Backup authentication token:
    YmxhY2t2YXVsdF8yMDI2

    Encoding:
    Base64
    */

    const correctPassword =
    atob("aW5zcHZhdWx0XzIwMjY=");

    if(passwordInput === correctPassword){

        messageBox.className =
        "message success";

        messageBox.innerHTML = `
        <strong>Access Granted!</strong>
        <br><br>

        FLAG:
        <code>
        GCS{inspvault_js_bypass}
        </code>
        `;

    }

    else{

        messageBox.className =
        "message error";

        messageBox.innerText =
        "Access Denied. Invalid Authorization Key.";

    }

}
