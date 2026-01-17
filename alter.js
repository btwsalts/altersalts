//Password

const correctPassword = "yousaf";

const userPassword = prompt("Enter Password:");

if (userPassword !== correctPassword) {
  document.body.innerHTML = "<h1>Access Denied</h1>";
}
