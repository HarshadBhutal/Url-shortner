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
  document.addEventListener("DOMContentLoaded", function () {
  const copyBtn = document.getElementById("copyBtn");
  const shortInput = document.getElementById("shortLinkInput");
  const copyMsg = document.getElementById("copyMsg");

  if (copyBtn && shortInput) {
    copyBtn.addEventListener("click", function () {
      shortInput.select();
      shortInput.setSelectionRange(0, 99999); // for mobile
      navigator.clipboard.writeText(shortInput.value)
        .then(() => {
          copyMsg.textContent = "✅ Copied!";
          copyMsg.style.color = "green";
        })
        .catch(() => {
          copyMsg.textContent = "❌ Failed to copy";
          copyMsg.style.color = "red";
        });

      setTimeout(() => {
        copyMsg.textContent = "";
      }, 2000);
    });
  }
});
