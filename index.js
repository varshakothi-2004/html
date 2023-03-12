function check_the_dob(dob) {
  var age = new Date().getFullYear() - new Date(dob.value).getFullYear();
  if (age < 18 || age > 55) {
    dob.setCustomValidity("The age should be between 18 and 55");
    dob.reportValidity();
  } else {
    dob.setCustomValidity("");
  }
}
function check_the_email(email) {
  if(email.value.includes("@") && email.value.includes(".")){
    email.setCustomValidity("");
  }else{
    email.setCustomValidity("Invalid Email!");
    email.reportValidity();
  }
}

function check_the_name(name_of_the_user) {
  if (name_of_the_user.value.length < 3) {
    name_of_the_user.setCustomValidity(
      "Name should be atleast three characters!"
     );
    name_of_the_user.reportValidity();
  } else {
    name_of_the_user.setCustomValidity("");
  }
}
  
  function check_the_tick(tick) {
    if(!tick.checked) {
      tick.setCustomValidity("Accept terms and conditions!");
      tick.reportValidity();
    } else {
      tick.setCustomValidity("");
    }
  }
  
  dob = document.getElementById("dob");
  var password = document.getElementById("password");
  var tick = document.getElementById("check-box");
