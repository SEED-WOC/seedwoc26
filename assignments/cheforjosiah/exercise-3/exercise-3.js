// Exercise 3: Age Eligibility Checker

const age = 20;

const voteAge = 18;


if(voteAge > age){
  const waitYears = voteAge - age; // Setting the years remaining to be able to vote
  console.log(`You are not eligible to vote yet. Wait ${waitYears} more years`);
}
else if(voteAge <= age){
  console.log("You are eligible to vote");
}