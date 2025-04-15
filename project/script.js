



   document.addEventListener("DOMContentLoaded", function () {
            const form = document.getElementById("loginForm");
            const errorMsg = document.getElementById("errorMsg");
        
            form.addEventListener("submit", function (event) {
                event.preventDefault();
        
                const username = document.getElementById("username").value.trim();
                const password = document.getElementById("password").value.trim();
        
               
                if (username === "admin" && password === "1234") {
                    errorMsg.style.display = "none";
                    
                    window.location.href = "index.html";
                } else {
                    errorMsg.style.display = "block";
                }
            });
        });
      