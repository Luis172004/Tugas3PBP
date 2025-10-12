const motoGP = [
    { circuit: 'Losail', location: 'Qatar', winner: { firstName: 'Andrea', lastName: 'Dovizioso', country: 'Italy' } },
    { circuit: 'Autodromo', location: 'Argentine', winner: { firstName: 'Cal', lastName: 'Crutchlow', country: 'UK' } },
    { circuit: 'De Jerez', location: 'Spain', winner: { firstName: 'Valentino', lastName: 'Rossi', country: 'Italy' } },
    { circuit: 'Mugello', location: 'Italy', winner: { firstName: 'Andrea', lastName: 'Dovizioso', country: 'Italy' } }
];

const grouped = motoGP.reduce((acc, event) => {
    const country = event.winner.country;
    
    acc[country] = acc[country] || { circuits: [], totalWin: 0 }; 

    // Isi data pemenang dan lokasi.
    acc[country].circuits.push({
        name: `${event.winner.firstName} ${event.winner.lastName}`,
        winLocation: `${event.circuit}, ${event.location}`
    });
    
    // Tambah hitungan.
    acc[country].totalWin++;

    return acc;
}, {});

for (const country in grouped) {
    const data = grouped[country];
    
    console.log(`${country}: (`); 
    console.log(`  winningCircuits: [`);
    
    // Cetak setiap sirkuit
    data.circuits.forEach(c => {
        console.log(`    name: ${c.name}, winLocation: ${c.winLocation}`);
    });
    
    console.log(`  ]`);
    console.log(`  totalWin: ${data.totalWin}`);
    console.log(`)`); 
    console.log(); 
}