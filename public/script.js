document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("openLogin");
    const signupBtn = document.getElementById("openSignup");

    if (loginBtn) {
      loginBtn.addEventListener("click", function () {
        window.location.href = "/login";
      });
    }

    if (signupBtn) {
      signupBtn.addEventListener("click", function () {
        window.location.href = "/signup"; 
      });
    }
  });