// @ts-nocheck
document.getElementById('loginBtn').addEventListener('click', function () {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    // let email = document.getElementById('email').value;
    const username_errorMsg = document.getElementById('username_errorMsg');
    // const email_errorMsg = document.getElementById('email_errorMsg');
    const password_errorMsg = document.getElementById('password_errorMsg');
    
    username_errorMsg.innerText = '';
    username_errorMsg.classList.remove('error');
    // email_errorMsg.innerText = '';
    // email_errorMsg.classList.remove('error')
    password_errorMsg.innerText = '';
    password_errorMsg.classList.remove('error');

    var request_emailregex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (username == '') {
        username_errorMsg.innerText = 'Username is required';
        username_errorMsg.classList.add('error');
    } else if (password == "") {
        password_errorMsg.innerText = 'Password is required';
        password_errorMsg.classList.add('error');
    // } else if (email == '') {
    //     email_errorMsg.innerText = 'Email is required';
    //     email_errorMsg.classList.add('error');
    // } else if (!email.match(request_emailregex)) {
    //     email_errorMsg.innerText = 'Email Format Is Wrong';
    //     email_errorMsg.classList.add('error');
    } else {
        alert('Submitted');
    }
});