function validateForm() {
  var nameRegex = /^[a-zA-Z\-]+$/;
  var validfirstUsername = document.frm.username.value.match(nameRegex);
  if (validUsername == null) {
    alert(
      "Your username is not valid. Only characters A-Z, a-z and '-' are  acceptable."
    );
    document.frm.userName.focus();
    return false;
  }
}
