const marks = [76, 64, 56, 87, 48];

Promise.resolve(marks)
    .then(marks => marks.reduce((acc, crr) => acc + crr, 0))
    .then(obtained => obtained / (marks.length * 100))
    .then(result => result * 100)
    .then(percentage => console.log(percentage));