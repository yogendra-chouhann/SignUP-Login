function handleSignUp(e){
  e.preventDefault()

  let name = document.getElementById("name").value
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  let confirmpassword = document.getElementById("confirmpassword").value

  if (password !== confirmpassword) {
      alert("Passwords do not match")
      return
  }

  const user = { name, email, password }

  localStorage.setItem("user", JSON.stringify(user))

  window.location.href = "login.html"
}
function handleLogin(e){
    e.preventDefault()

    let email1 = document.getElementById("email").value
    let password1 = document.getElementById("password").value
    let user1 = JSON.parse(localStorage.getItem("user"))

    if (!user1) {
        alert("No user found. Please signup first.")
        return
    }

    if(email1 === user1.email && password1 === user1.password){
        alert("Login Successful")
    } else {
        alert("Invalid credentials")
    }
}
