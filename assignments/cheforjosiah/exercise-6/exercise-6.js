// Exercise 6: Login Authentication System

let isLoggedIn = true;
let isAdmin = true;
let accountVerified = true;
let experience = 4;
let specialPrivileges = false;

if (isLoggedIn === true && isAdmin === true && accountVerified === true){
  if (experience >= 5 || specialPrivileges === true){
    console.log("Welcome to Admin Panel.");
  }
  else{
    console.log("Access denied: You need 5+ years experience or special privileges.");
  }
}
