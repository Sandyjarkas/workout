function validate() {
  var name = document.myform.name.value;
  var email = document.myform.email.value;
  var message = document.myform.message.value;
  if (name == "") {
    alert("Please enter your name");
    return false;
  } else if (email == "") {
    alert("Please enter your Email");
    return false;
  } else if (message.length < 5) {
    alert("Your message is too short");
    return false;
  } else {
    alert("Message Sent");
    return true;
  }
}
