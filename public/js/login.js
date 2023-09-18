const loginFormHandler = async (event) => {
  event.preventDefault();
console.log("click")
var username = document.getElementById("username").value.trim();
var password = document.getElementById("password").value.trim();

  if (username && password) {
      const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json'},
      });

      if (response.ok){
          document.location.replace('/userhomepage');
      }else{
          alert('unable to login');
      }
  }
}

document
.getElementById("button")
.addEventListener("click", loginFormHandler);