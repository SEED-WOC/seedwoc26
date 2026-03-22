const isLoggedIn = true;
const hasPermission = false;
const isAdmin = true;
const age = 25;

const isLoggedInAndAdmin = isLoggedIn && isAdmin;

console.log("Logged in and is admin:", isLoggedIn && isAdmin);

if(isLoggedInAndAdmin) {
    console.log("Welcome, Admin!");
    console.log("Edit user files");
}
// Check if the user is logged in and has permission
// Check if user age is greater thand 18 or user is admin
// Check if user is not logged in

const isLoggedInAndHasPermission = isLoggedIn && hasPermission;
console.log("Logged in and has permission?", isLoggedInAndHasPermission);

const isAdultOrAdmin = age > 18 || isAdmin;
console.log("Is adult or admin?", isAdultOrAdmin);

const isNotLoggedIn = !isLoggedIn;
console.log("Is not logged In?", isNotLoggedIn);