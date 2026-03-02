# 🌱 WOC26 - Programming Intro Assignment

## Welcome to Your Programming Journey!

This assignment guides you through **Variables and Data Types** in JavaScript - one of the fundamental building blocks of programming. You'll complete exercises locally and contribute your work back to the community using professional Git practices.

**Estimated Time:** 2-3 hours  
**Difficulty:** Beginner-Friendly ✅  
**Prerequisites:** None (but read the setup guide below)

---

## Table of Contents

1. [Local Setup](#local-setup)
2. [Chapter 2 Exercises](#chapter-2-exercises)
3. [Assignment Requirements](#assignment-requirements)
4. [Contributing Your Work](#contributing-your-work)
5. [Avoiding Conflicts](#avoiding-conflicts)
6. [Best Practices](#best-practices)
7. [Getting Help](#getting-help)

---

## Local Setup

### Step 1: Clone the Repository

First, get a copy of the project on your computer:

```bash
# Clone the entire repository
git clone https://github.com/seedwoc/seedwoc.git
cd seedwoc

# OR if you've forked it, use your fork URL
git clone https://github.com/YOUR-USERNAME/seedwoc.git
cd seedwoc
```

**What this does:**
- Downloads all files from GitHub to your computer
- Creates a `seedwoc` folder with the complete project
- Sets up git to track changes

### Step 2: Verify Installation

Make sure Git is installed and working:

```bash
# Check Git version
git --version

# Should show: git version 2.x.x or higher
```

### Step 3: Configure Your Git Identity

Tell Git who you are (one-time setup):

```bash
# Set your name
git config user.name "Your Full Name"

# Set your email
git config user.email "your.email@example.com"

# Verify configuration
git config --list
```

**Example:**
```bash
git config user.name "John Developer"
git config user.email "john.dev@example.com"
```

### Step 4: Create Your Assignment Folder

Navigate to the assignments directory and create your personal folder:

```bash
# Navigate to assignments folder
cd assignments

# Create your folder structure
mkdir -p your-github-username/chapter-2/javascript-fundamentals

# Or if you prefer copy-paste:
mkdir -p YOUR-USERNAME/chapter-2/javascript-fundamentals
```

**Example:**
```bash
# If your GitHub username is "alice-developer"
mkdir -p alice-developer/chapter-2/javascript-fundamentals
```

### Step 5: Verify Setup

Check that everything is in place:

```bash
# Navigate to your folder
cd your-github-username/chapter-2/javascript-fundamentals

# You should now be in your assignment folder
pwd
# Output: /c/Users/THE EYE INFORMATIQUE/OneDrive/Desktop/seed/seedwoc/assignments/your-github-username/chapter-2/javascript-fundamentals
```

✅ **Setup Complete!** You're ready to start the exercises.

---

## Chapter 2 Exercises

### Exercise Overview

You'll complete exercises on:
- **Variables** - How to store data
- **Data Types** - Different kinds of data
- **Type Conversion** - Changing between types
- **Operations** - Working with data

### Access the Exercises

The exercises are located in:

```
chapters/chapter-2-javascript-fundamentals/
└── modules/
    └── module-1-fundamentals/
        ├── part-1-variables-and-types/
        │   └── exercises.md
        ├── part-2-operators/
        │   └── exercises.md
        └── part-3-type-coercion/
            └── exercises.md
```

**Or view them online:**
- [Variable Exercises](./chapters/chapter-2-javascript-fundamentals/modules/module-1-fundamentals/part-1-variables-and-types/exercises.md)
- [Operator Exercises](./chapters/chapter-2-javascript-fundamentals/modules/module-1-fundamentals/part-2-operators/exercises.md)
- [Type Coercion Exercises](./chapters/chapter-2-javascript-fundamentals/modules/module-1-fundamentals/part-3-type-coercion/exercises.md)

### How to Complete Exercises

**Option A: Complete All in One File (Recommended for Beginners)**

```bash
# Create a single solution file
touch my-solutions.js

# Edit with your favorite editor
# Copy exercise code and add your solutions
```

**Option B: One File Per Exercise**

```bash
# Create individual solution files
touch exercise-1-variables.js
touch exercise-2-data-types.js
touch exercise-3-type-conversion.js
touch exercise-4-operations.js
```

**Option C: HTML File (To Run in Browser)**

```bash
# Create an HTML file
touch solutions.html
```

```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Variables & Data Types</title>
</head>
<body>
    <h1>My Solutions</h1>
    <p>Open browser console to see results (F12)</p>
    
    <script>
        // Exercise 1: Variables
        const name = "Your Name";
        const age = 25;
        console.log(`Hello, ${name}! You are ${age} years old.`);
        
        // Exercise 2: Data Types
        const number = 42;
        const text = "hello";
        const isActive = true;
        console.log(typeof number);   // "number"
        console.log(typeof text);     // "string"
        console.log(typeof isActive); // "boolean"
        
        // Add more exercises below...
    </script>
</body>
</html>
```

### Example Solution

**Exercise:** Create variables for a person's information

```javascript
// ✅ GOOD SOLUTION
const firstName = "Alice";
const lastName = "Developer";
const age = 25;
const isStudent = true;
const gpa = 3.8;

console.log(`Name: ${firstName} ${lastName}`);
console.log(`Age: ${age}`);
console.log(`Student: ${isStudent}`);
console.log(`GPA: ${gpa}`);
```

### Testing Your Solutions

**Method 1: Node.js (Terminal)**

```bash
# If your solution file is solutions.js
node solutions.js

# Output should show your results
```

**Method 2: Browser Console**

```bash
# Open your HTML file in browser
open solutions.html    # macOS
start solutions.html   # Windows
explorer solutions.html # Linux

# Then open Developer Tools (F12 or Right-click → Inspect)
# Go to Console tab to see results
```

**Method 3: Online JavaScript Editor**

Use any of these free online editors:
- [JSBin](https://jsbin.com/)
- [CodePen](https://codepen.io/)
- [Replit](https://replit.com/)

Just paste your code and hit Run!

---

## Assignment Requirements

To successfully complete this assignment, you must:

### ✅ Completion Checklist

- [ ] Clone the repository locally
- [ ] Create your personal assignment folder with correct structure
- [ ] Complete ALL exercises:
  - [ ] Variables exercise (Exercise 1-3)
  - [ ] Data Types exercise (Exercise 4-6)
  - [ ] Type Conversion exercise (Exercise 7-9)
  - [ ] Operations exercise (Exercise 10-12)
- [ ] Test your solutions (run code and verify output)
- [ ] Add meaningful comments to your code
- [ ] Create one `.js` or `.html` file with all solutions
- [ ] Commit your work with clear messages
- [ ] Push to your fork/branch
- [ ] Create a Pull Request with description

### 📋 Code Quality Standards

Your code should:

✅ **DO:**
- Use meaningful variable names: `userAge`, `firstName` (not `x`, `a`)
- Add comments explaining what you're doing
- Test your code before committing
- Use consistent indentation (2 or 4 spaces)
- End statements with semicolons
- Use `const` by default, `let` if reassigning

❌ **DON'T:**
- Use single letters for variables: `x = 5`
- Leave code untested
- Add console.log statements unless needed
- Use `var` (use `const` or `let` instead)
- Have typos in variable names

### Example File Structure

```
assignments/
└── your-github-username/
    └── chapter-2/
        └── javascript-fundamentals/
            ├── variables-and-types.js      ✓ Your solutions
            ├── my-notes.txt                ✓ Optional notes
            └── README.md                   ✓ Brief description
```

---

## Contributing Your Work

### Step 1: Fetch Latest Changes (IMPORTANT!)

**Before starting any work**, always update your local code:

```bash
# Go to project root
cd seedwoc

# Fetch latest changes from GitHub
git fetch upstream

# Update your local main/master branch
git branch -u upstream/main

# Pull the latest changes
git pull --rebase origin master
```

**Why this matters:**
- Others may have made changes since you cloned
- Prevents conflicts later
- Ensures you're working with the latest version

### Step 2: Create a Feature Branch

Create a branch for your assignment:

```bash
# Create a new branch with descriptive name
git checkout -b assignment/chapter-2-variables

# Or create and switch in one command
git switch -c assignment/chapter-2-variables
```

**Branch naming convention:**
```
assignment/chapter-{n}-{topic}

Examples:
✓ assignment/chapter-2-variables
✓ assignment/chapter-2-data-types
✓ fix/typo-in-readme
✓ docs/update-setup-guide
```

### Step 3: Add Your Files

Stage your solution files for commit:

```bash
# Option A: Add your specific file
git add assignments/your-username/chapter-2/javascript-fundamentals/solutions.js

# Option B: Add entire folder
git add assignments/your-username/chapter-2/

# Verify what you're adding
git status
```

**Output should show:**
```
On branch assignment/chapter-2-variables
Changes to be committed:
  new file:   assignments/alice-developer/chapter-2/javascript-fundamentals/solutions.js
  new file:   assignments/alice-developer/chapter-2/javascript-fundamentals/README.md
```

### Step 4: Commit Your Work

Save your changes with a descriptive message:

```bash
# Make a commit
git commit -m "feat: Add chapter 2 variables and data types exercises"

# Or more detailed
git commit -m "feat: Complete JavaScript variables and data types assignment

- Completed all 12 exercises
- Added comments explaining solutions
- Tested all code in browser console
- Verified output matches requirements"
```

**Good commit message guidelines:**
- Start with type: `feat`, `fix`, `docs`, `test`
- Keep summary under 50 characters
- Add details in body if needed
- Explain WHY, not WHAT (code shows what)

```bash
# Good ✓
git commit -m "feat: Add chapter 2 exercises solution"

# NOT good ✗
git commit -m "added files"
git commit -m "stuff"
git commit -m "fix"
```

### Step 5: Push to GitHub

Upload your branch to GitHub:

```bash
# Push your branch
git push origin assignment/chapter-2-variables

# First time pushing? Use this:
git push -u origin assignment/chapter-2-variables
```

### Step 6: Create a Pull Request (PR)

Go to GitHub and create a Pull Request:

1. **Visit GitHub:** https://github.com/seedwoc/seedwoc
2. **Click "Pull Requests"** tab
3. **Click "New Pull Request"** button
4. **Select your branch:** `assignment/chapter-2-variables`
5. **Fill in the description:**

```markdown
## Chapter 2 - Variables & Data Types Assignment

### What I completed:
- [x] All 4 exercise categories (12 problems total)
- [x] Tested all solutions
- [x] Added meaningful comments
- [x] Followed code standards

### How to test:
1. Run: `node solutions.js`
2. Or open `solutions.html` in browser and check console

### Time spent:
Approximately 2.5 hours

### Notes:
I found exercise 7 (type coercion) most interesting because...
```

6. **Click "Create Pull Request"**

✅ **Done!** Your work is now submitted for review.

---

## Avoiding Conflicts

### The Problem: What Are Conflicts?

A **conflict** happens when:
1. You and someone else edit the same file
2. You both commit different changes
3. Git can't merge automatically

**Example of a conflict:**
```
Your change:  const name = "Alice";
Their change: const name = "Bob";

❌ Git doesn't know which to keep!
```

### Solution 1: Keep Your Own Folder

✅ **BEST SOLUTION:**

Each student works in their own folder:

```
assignments/
├── alice-developer/           ← Only Alice edits here
│   └── chapter-2/
│       └── solutions.js
├── bob-programmer/            ← Only Bob edits here
│   └── chapter-2/
│       └── solutions.js
└── charlie-coder/             ← Only Charlie edits here
    └── chapter-2/
        └── solutions.js
```

**No conflicts! Everyone has their own space.**

### Solution 2: Fetch Before Working

✅ **ALWAYS DO THIS:**

Update your code before starting:

```bash
# Step 1: Go to project root
cd seedwoc

# Step 2: Fetch latest changes
git fetch upstream

# Step 3: Update your branch
git pull --rebase origin master

# Now your code is up-to-date!
```

**Why this helps:**
- You have everyone else's changes
- Conflicts are easier to resolve if they happen
- You're working with latest code

### Solution 3: Make Small Commits

✅ **COMMIT OFTEN:**

Small commits are easier to merge:

```bash
# Good: Multiple small commits
git commit -m "feat: Add exercise 1 solution"
git commit -m "feat: Add exercise 2 solution"
git commit -m "test: Verify all solutions work"

# Bad: One huge commit
git commit -m "added everything"
```

### Solution 4: Pull Before Pushing

✅ **SAFETY CHECK:**

```bash
# Before pushing, update your local code
git pull --rebase origin master

# Handle any conflicts locally
# ... resolve if needed ...

# Then push
git push origin assignment/chapter-2-variables
```

### If You Get a Conflict

**Don't panic!** Here's what to do:

```bash
# Step 1: See what's conflicted
git status

# Output might show:
# both modified:   assignments/some-file.js

# Step 2: Open the file and look for conflict markers
cat assignments/some-file.js

# You'll see:
# <<<<<<< HEAD
# your change
# =======
# their change
# >>>>>>> branch-name

# Step 3: Edit the file, keep what's right:
# - Delete the <<<<<<, =======, >>>>>>> markers
# - Keep the code you want
# - Save the file

# Step 4: Mark as resolved
git add assignments/some-file.js

# Step 5: Continue
git commit -m "resolve: Merge conflict in assignment file"
git push origin assignment/chapter-2-variables
```

**Most likely:** You won't get conflicts because you're in your own folder! 🎉

---

## Best Practices

### 📝 Before Starting

```bash
# 1. Make sure you're in the right place
pwd
# Should show: .../seedwoc

# 2. Fetch latest changes
git fetch upstream && git pull --rebase origin master

# 3. Check current branch
git branch
# Should show your working branch
```

### 💻 While Coding

**Code Standard:**

```javascript
// ✅ GOOD
const userName = "Alice";
const userAge = 25;
const isActive = true;

console.log(`User: ${userName}, Age: ${userAge}`);

// ❌ AVOID
var x = "Alice";
var a = 25;
console.log(x); console.log(a);
```

**Comments:**

```javascript
// ✅ GOOD - Explains WHY
// Calculate discount for bulk purchases
const discountRate = quantity > 100 ? 0.15 : 0.05;

// ❌ AVOID - Explains WHAT code does
// Set discount rate variable
const discountRate = 0.15;
```

### 📤 Before Committing

**Checklist:**

```bash
# 1. Check what you changed
git status

# 2. Review your changes
git diff

# 3. Test your code
node solutions.js
# OR open in browser

# 4. Add files
git add .

# 5. Verify what's being added
git status

# 6. Commit
git commit -m "Clear message describing changes"
```

### 🚀 Before Pushing

```bash
# 1. Make sure your branch is up-to-date
git pull --rebase origin master

# 2. Resolve any conflicts if needed

# 3. Check commit log
git log --oneline -5

# 4. Push
git push origin assignment/chapter-2-variables

# 5. Create Pull Request on GitHub
```

### 👀 After Pushing

1. Go to https://github.com/seedwoc/seedwoc
2. Click "Pull Requests"
3. Find your PR
4. Read any feedback
5. Make updates if needed:

```bash
# If reviewers ask for changes:

# 1. Make the changes
# 2. Commit again
git commit -am "refactor: Address review feedback"

# 3. Push (same branch)
git push origin assignment/chapter-2-variables

# Pull Request automatically updates!
```

### 📊 Good Commit Messages

**Format:**
```
<type>: <subject>

<optional body>
```

**Types:**
- `feat` - New feature (new code)
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style (formatting)
- `refactor` - Rewriting code without changing behavior
- `test` - Adding tests

**Examples:**

```bash
# ✓ Good
git commit -m "feat: Add chapter 2 variables solutions"
git commit -m "docs: Update assignment README with better examples"
git commit -m "refactor: Simplify type checking logic"

# ✗ Avoid
git commit -m "stuff"
git commit -m "fixed"
git commit -m "updates"
git commit -m "asdfghjkl"
```

---

## Getting Help

### Where to Find Solutions

**Within this repository:**
1. [Variables Guide](./chapters/chapter-2-javascript-fundamentals/modules/module-1-fundamentals/part-1-variables-and-types/solutions.md)
2. [Data Types Guide](./chapters/chapter-2-javascript-fundamentals/modules/module-1-fundamentals/part-1-variables-and-types/)
3. [Best Practices](./resources/javascript-guides/BEST_PRACTICES.md)
4. [Quick Reference](./resources/javascript-guides/QUICK_REFERENCE.md)

**Understanding JavaScript:**
1. [MDN Web Docs](https://developer.mozilla.org/) - Official JavaScript documentation
2. [JavaScript.info](https://javascript.info/) - Interactive tutorials
3. [W3Schools](https://www.w3schools.com/js/) - Quick reference

### When You're Stuck

**Step 1: Check the error message**
```javascript
// Error: ReferenceError: name is not defined
// This means: variable 'name' hasn't been declared
const name = "Alice";  // Fix: declare it
```

**Step 2: Read related documentation**
- Variables guide: Shows how to declare, scope, etc.
- Data types: Shows different types and their properties

**Step 3: Try simpler code**
```javascript
// Complex code causing confusion:
const result = x > 5 ? x * 2 : x / 2;

// Break it down:
const isGreaterThan5 = x > 5;
const result = isGreaterThan5 ? x * 2 : x / 2;
```

**Step 4: Ask your team**
- Comment on GitHub Issue
- Ask in Discord (if available)
- Create a Discussion post

### Common Questions

**Q: What if I break something?**
A: Git has your back!
```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo all changes to a file
git checkout -- filename.js

# Go back to last commit
git reset --hard HEAD
```

**Q: How do I update my local code?**
A:
```bash
# Fetch latest
git fetch upstream

# Update local
git pull --rebase origin master
```

**Q: What if my commit message is wrong?**
A:
```bash
# Fix the message
git commit --amend -m "New correct message"
```

**Q: Can I work on multiple assignments?**
A: Yes! Create separate branches:
```bash
git checkout -b assignment/chapter-2-variables
git checkout -b assignment/chapter-3-functions
```

---

## Quick Reference

### Essential Commands

```bash
# Setup
git clone <url>                          # Get repository
git config user.name "Name"              # Set your name
git config user.email "email@example"    # Set your email

# Before working
git fetch upstream                       # Get latest changes
git pull --rebase origin master          # Update your code

# Work on assignment
touch solutions.js                       # Create file
nano solutions.js                        # Edit file (save with Ctrl+X)

# Commit
git status                               # See changes
git add path/to/file.js                  # Stage file
git commit -m "Your message"             # Commit changes
git log --oneline                        # View commits

# Push & contribute
git push origin branch-name              # Upload to GitHub
# Then create Pull Request on GitHub

# If you mess up
git reset --soft HEAD~1                  # Undo commit (keep changes)
git checkout -- file.js                  # Undo changes to file
```

### Folder Structure

```
seedwoc/
├── assignments/
│   └── YOUR-USERNAME/
│       └── chapter-2/
│           └── javascript-fundamentals/
│               ├── solutions.js          ← Your code here
│               └── README.md             ← Optional notes
├── chapters/
│   └── chapter-2-javascript-fundamentals/
│       └── modules/
│           └── module-1-fundamentals/
│               └── part-1-variables-and-types/
│                   └── exercises.md      ← Read exercises
└── resources/
    └── javascript-guides/               ← References
```

---

## Summary

### What You'll Do

1. ✅ Clone and setup locally
2. ✅ Read the exercises in Chapter 2
3. ✅ Write JavaScript code solving the exercises
4. ✅ Test your code
5. ✅ Commit with clear messages
6. ✅ Push to GitHub
7. ✅ Create a Pull Request
8. ✅ Get feedback and improve

### Time Estimate

- Setup: 10-15 minutes
- Exercises: 1.5-2 hours
- Testing & Documentation: 20-30 minutes
- Submitting (Push + PR): 10-15 minutes
- **Total: 2-3 hours**

### Success Criteria

✅ Pull Request has:
- All 12 exercises completed
- Code tested and working
- Clear commit messages
- Comments explaining solutions
- Passes any automated checks

✅ Your work shows:
- Understanding of variables
- Understanding of data types
- Ability to write clean code
- Good git and collaboration practices

---

## Next Steps

### Ready to Start?

1. Open your terminal
2. Navigate to your computer
3. First command:
   ```bash
   git clone https://github.com/seedwoc/seedwoc.git
   cd seedwoc
   ```
4. Follow the [Local Setup](#local-setup) section above

### Questions?

- 📖 Read [Best Practices](#best-practices)
- 🆘 Check [Getting Help](#getting-help)
- 💬 [Create an Issue](https://github.com/seedwoc/seedwoc/issues) on GitHub

### After This Assignment

Once you complete this assignment:
- You'll understand variables and data types
- You'll know how to contribute properly
- You'll be ready for Chapter 2 part 2 (Operators)
- You'll have practice with professional Git workflow

---

## Resources Summary

### Inside This Repository
- 📚 [Main README](./README.md) - Project overview
- 🚀 [Quick Start Guide](./resources/QUICK_START_GUIDE.md) - 30-min intro
- 📖 [JavaScript Best Practices](./resources/javascript-guides/BEST_PRACTICES.md)
- 📚 [JavaScript Quick Reference](./resources/javascript-guides/QUICK_REFERENCE.md)
- 🔍 [Common Problems & Solutions](./resources/COMMON_GIT_PROBLEMS.md)

### External Resources
- [MDN JavaScript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/) - Official reference
- [JavaScript.info](https://javascript.info/) - Interactive course
- [W3Schools JS](https://www.w3schools.com/js/) - Quick reference

### Getting Help
- GitHub Issues: Ask questions on the repo
- Pull Request Comments: Ask reviewers for help
- Discussion Forum: (If available on GitHub)

---

## Good Luck! 🚀

You've got this! Remember:

- **Small steps:** Complete one exercise at a time
- **Test often:** Run your code as you go
- **Ask questions:** If something is unclear
- **Commit regularly:** Save your progress
- **Have fun:** Programming is awesome!

**Start with [Local Setup](#local-setup) and follow each step.**

---

**Happy Coding!** 💻✨

Questions? Create an GitHub Issue or ask in PR comments.

