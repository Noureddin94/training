document.getElementsByClassName("email-signup")[0].style.display = "none";
document.getElementById("signup-box-link").style.display = "none";
document.getElementById("signup-box-link").addEventListener("click", function(){
  document.getElementsByClassName("email-login")[0].style.display = "none";
  document.getElementsByClassName("email-signup")[0].style.display = "block";
  document.getElementById("login-box-link").classList.remove("active");
  document.getElementById("signup-box-link").classList.add("active");
});
document.getElementById("login-box-link").addEventListener("click", function(){
  document.getElementsByClassName("email-login")[0].style.display = "block";
  document.getElementsByClassName("email-signup")[0].style.display = "none";

  document.getElementById("login-box-link").classList.add("active");
  document.getElementById("signup-box-link").classList.remove("active");
});