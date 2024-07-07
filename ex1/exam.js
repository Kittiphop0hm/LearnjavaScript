const calGrade = function(score) {
    if (0 <= score && score < 50) return 'E'
    if (50 <= score && score < 60) return 'D'
    if (60 <= score && score < 70) return 'C'
    if (70 <= score && score < 80) return 'B'
    if (80 <= score && score <= 100) return 'A'
    return 'X'
}
console.log(calGrade(60));