function expose(name, age, address, cash) {
    if (age > 40) {
        if (address == 'Nevada' || address == 'New York' || address == 'Havana') {
            if (cash > 10) {
                return `${name} kemungkinan seorang anggota mafia dengan pangkat Don`
            } else {
                return `${name} tidak mencurigakan`
            }
        } else {
            return `${name} tidak mencurigakan`
        }
    }    
    else if (age >= 25) {
        if (address == 'New Jersey' || address == 'Manhattan' || address == 'Nevada') {
            if (cash >= 1 && cash <= 2) {
                return `${name} kemungkinan seorang anggota mafia dengan pangkat Underboss`
            } else {
                return `${name} tidak mencurigakan`
            }
        } else {
            return `${name} tidak mencurigakan`
        }
    }
    else if (age >= 18) {
        if (address == 'California' || address == 'Detroit' || address == 'Boston') {
            if (cash < 1) {
                return `${name} kemungkinan seorang anggota mafia dengan pangkat Capo`
            } else {
                return `${name} tidak mencurigakan`
            }
        } else {
            return `${name} tidak mencurigakan`
        }
    }
}
console.log(expose('daniel', 42, 'Nevada', 20))