function validate() {
    let company = false;
    $('#submit').click(function (event) {
        let username = $('#username');
        let email = $('#email');
        let password = $('#password');
        let confirmPassword = $('#confirm-password');
        let companyNumber = $('#companyNumber');

        let isUsernameValid = username.val().length >= 3 && username.val().length <= 20 && /[A-Za-z0-9]+/.test(username)

        if (isUsernameValid) {
            //valid
            username.css('border-color', '')
        } else {
            //invalid
            username.css('border-color', 'red')
        }

        let isPasswordValid = password.val().length >= 5 && password.val().length <= 15 && /\w+/.test(password.val())
        let isConfirmPasswordValid = confirmPassword.val().length >= 5 && confirmPassword.val().length <= 15 && /\w+/.test(confirmPassword.val())
        let doesPasswordMatch = password.val() == confirmPassword.val()


        if (isPasswordValid) {
            //valid
            password.css('border-color', '')
        } else {
            //invalid
            password.css('border-color', 'red')
        }

        if (isConfirmPasswordValid) {
            //valid
            confirmPassword.css('border-color', '')
        } else {
            //invalid
            confirmPassword.css('border-color', 'red')
        }

        if (doesPasswordMatch && isPasswordValid && isConfirmPasswordValid) {
            //valid
            confirmPassword.css('border-color', '')
            password.css('border-color', '')
        } else {
            //invalid
            confirmPassword.css('border-color', 'red')
            password.css('border-color', 'red')
        }

        let isEmailValid = /.*@.*\./.test(email.val())
        if (isEmailValid) {
            //valid
            email.css('border-color', '')
        } else {
            //invalid
            email.css('border-color', 'red')
        }

        let isCompanyValid = Number(companyNumber.val()) >= 1000 && Number(companyNumber.val() <= 9999)
        if (company) {
            if (isCompanyValid) {
                companyNumber.css('border-color', '')
            } else {
                //invalid
                companyNumber.css('border-color', 'red')
            }
        }

        let isFormValid = isEmailValid && isCompanyValid && doesPasswordMatch && isConfirmPasswordValid && isPasswordValid && isUsernameValid;
        event.preventDefault();

        if (isFormValid) {
            $('#valid').show();
        } else {
            $('#valid').hide();
        }
    })

    $("#company").change(function () {
        if (this.checked) {
            company = true;
            $('#companyInfo').css('display', 'block')
        } else {
            company = false;
            $('#companyInfo').css('display', 'none')
        }
    });
}
