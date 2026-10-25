// Generate 8 random scores between 30 and 100
let scores = Array.from(
{ length: 8 },
() => Math.floor(Math.random() * 71) + 30
);

// Calculate highest and lowest scores
let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

// Calculate total and average using reduce()
let totalScore = scores.reduce((sum, score) => sum + score, 0);
let averageScore = totalScore / scores.length;

// Count students who passed
let passedStudents = scores.filter(score => score >= 50).length;

// Use map() to display scores with student numbers
let studentScores = scores.map(
(score, index) => `Student ${index + 1}: ${score}`
);

// Display formatted summary
let report = `
Array Performance Analyzer
--------------------------

${studentScores.join("\n")}

Highest Score: ${highestScore}
Lowest Score: ${lowestScore}
Average Score: ${averageScore.toFixed(2)}
Students Passed: ${passedStudents}
Total Students: ${scores.length}
`;

console.log(report);
