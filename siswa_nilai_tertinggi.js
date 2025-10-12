const studentsScore = [
    { name: 'Andi', score: 90 },
    { name: 'Rudi', score: 80 },
    { name: 'Dira', score: 100 }
];

const highest = studentsScore.reduce((a, b) => (a.score > b.score) ? a : b);

console.log(`Nama: ${highest.name}`);
console.log(`Nilai: ${highest.score}`);