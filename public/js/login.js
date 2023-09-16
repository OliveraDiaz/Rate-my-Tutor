const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.getElementById('username-login').value.trim();
  console.log(username)
  const password = document.getElementById('password-login').value.trim();
  console.log(password)

  if (username && password) {
      const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ username, password}),
          headers: { 'Content-Type': 'application/json'},
      });

      if (response.ok){
          document.location.replace('/');
      }else{
          alert('unable to login');
      }
  }
}

document
.querySelector('.login-form')
.addEventListener('submit', loginFormHandler);