function testScore(score, interview) {
    if (score >= 80) {
        interview = 'lolos'
    } else {
        interview = 'gagal'
    }

    if (interview === 'gagal') {
        return 'Maaf, anda gagal'
    } else {
        return 'Selamat, anda diterima jadi programmer'
    }
}

console.log(testScore(81, 'C'))