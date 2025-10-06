function ticketPrice(age, cm) {
    if (age > 10) {
        return 'Rp.80000'
    }
    else if (age > 7) {
        if (cm > 150) {
            return 'Rp.70000'
        }
        else {
            return 'Rp.50000'
        }
    }
    else if (age > 3) {
        if (cm > 120) {
            return 'Rp.55000'
        }
        else {
            return 'Rp.40000'
        }
    }
    else if (age > 1) {
        if (cm > 70) {
            return 'Rp.40000'
        }
        else return 'Rp.30000'
    }
    else {
        return 'anak dilarang masuk'
    }
}
console.log(ticketPrice(1, 50))