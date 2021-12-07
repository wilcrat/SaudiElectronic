function formValid() {
  let fval = document.forms["formOne"]["fullname"].value;
  if (fval == "") {
    alert("Your Full Name must be entered!");
    return false;
  }
}
