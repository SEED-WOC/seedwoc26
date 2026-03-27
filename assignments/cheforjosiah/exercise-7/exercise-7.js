// Exercise 7: Premium Membership qualifier

const totalSpent = 300;
const monthsAsUser = 2;
const referrals = 3;
const isVerified = false;
const hasPremiumCode = false;

if (totalSpent >= 500 && monthsAsUser >= 6){
  console.log("You are eligible. Your total spent if $500+ and been member for 6months+");
}
else if (referrals >= 3 && isVerified === true){
  console.log("You are eligible to premium. Your referrals is greater than 3 and you have a verified account");
}
else if(hasPremiumCode === true){
  console.log("You are eligible to premium. You have premium code");
}