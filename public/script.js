document.getElementById('openLogin').onclick = function() {
      document.getElementById('loginModal').style.display = 'block';
    };
    document.getElementById('openSignup').onclick = function() {
      document.getElementById('signupModal').style.display = 'block';
    };
    document.querySelectorAll('.close').forEach(btn => {
      btn.onclick = function() {
        const modalId = btn.dataset.close;
        document.getElementById(modalId).style.display = 'none';
      };
    });
    window.onclick = function(event) {
      document.querySelectorAll('.modal').forEach(modal => {
        if (event.target == modal) modal.style.display = 'none';
      });
    };