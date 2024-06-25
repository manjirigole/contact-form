document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    let isValid = true;
  
    // Get form elements
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const query1 = document.getElementById('query1');
    const query2 = document.getElementById('query2');
    const msgTextArea = document.getElementById('msg-textarea');
    const consent = document.getElementById('consent');
  
    // Get error message elements
    const fnameError = document.getElementById('fname-error');
    const lnameError = document.getElementById('lname-error');
    const emailError = document.getElementById('email-error');
    const queryError = document.getElementById('query-error');
    const msgError = document.getElementById('msg-error');
    const consentError = document.getElementById('consent-error');
  
    // Validate first name
    if (fname.value.trim() === '') {
      fnameError.style.display = 'block';
      isValid = false;
    } else {
      fnameError.style.display = 'none';
    }
  
    // Validate last name
    if (lname.value.trim() === '') {
      lnameError.style.display = 'block';
      isValid = false;
    } else {
      lnameError.style.display = 'none';
    }
  
    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      emailError.style.display = 'block';
      isValid = false;
    } else {
      emailError.style.display = 'none';
    }
  
    // Validate query
    if (!query1.checked && !query2.checked) {
      queryError.style.display = 'block';
      isValid = false;
    } else {
      queryError.style.display = 'none';
    }
  
    // Validate message
    if (msgTextArea.value.trim() === '') {
      msgError.style.display = 'block';
      isValid = false;
    } else {
      msgError.style.display = 'none';
    }
  
    // Validate consent
    if (!consent.checked) {
      consentError.style.display = 'block';
      isValid = false;
    } else {
      consentError.style.display = 'none';
    }
  
    // If the form is valid, submit it
    if (isValid) {
      this.submit();
    }
  });

  function myFunction() {
    var modal = document.getElementById('customAlert');
    var message = document.getElementById('alertMessage');
    var passage = document.getElementById('alertPassage');
    message.innerText = 'Message Sent!';
    passage.innerHTML = "Thanks for completing the form. We'll be in touch soon!"
    modal.style.display = 'block';

    var closeButton = document.getElementsByClassName('check')[0];
    closeButton.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}
