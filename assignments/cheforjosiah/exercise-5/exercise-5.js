// Exercise 5: Student Grade Calculator

const score = 46;


if (score <= 100 && score >= 90){
  console.log(`Grade A - Excellent work!`);
}
else if(score <= 89 && score >= 80){
  console.log("Grade B - Very good, You can do better.");
}
else if(score <= 79 && score >= 70){
  console.log("Grade C - Good effort, keep practicing");
}
else if(score <= 69 && score >= 60){
  console.log("Grade D - Let's work harder next time");
}
else if(score < 60){
  console.log("Grade F - Poor! Try more harder");
}