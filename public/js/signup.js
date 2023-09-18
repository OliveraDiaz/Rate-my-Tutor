const signUpFormHandler = async (event) => {
  event.preventDefault();
  console.log('click')

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  console.log(username, password)
  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
 const userData = await response.json();
 
    if (response.ok) {
      console.log(userData)
      alert(`${userData.message}`)
      document.location.replace('/userhomepage');
    } else {
      alert(`${userData.message}`)
    }
  }
};

document
.getElementById("button")
.addEventListener("click", signUpFormHandler);

