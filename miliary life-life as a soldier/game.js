const eras = [
    { year: "216 BC", army: "Macedonian Army", conflict: "Invasion of Persia" },
    { year: "1415", army: "English Army", conflict: "Hundred Years War" },
    { year: "1805", army: "French Grande Armée", conflict: "Napoleonic Wars" },
    { year: "1863", army: "Union Army", conflict: "American Civil War" },
    { year: "1944", army: "US Army", conflict: "World War 2" },
     { year: "1944", army: "German Army", conflict: "World War 2" },
    { year: "2003", army: "US Army", conflict: "Iraq War" },
    { year: "2003", army: "Iraq insurgents", conflict: "Iraq war"}
]

const roles = ["Infantry", "Cavalry", "Artillery", "Scout", "Engineer"]

const names = ["Thomas", "Darius", "Emile", "Jakob", "Remy", "Aurelio", "John", "Marcus",]

const macedonianNames = ["Demetrios", "Nikandros", "Diodoros", "Andronikos", "Philotas", "Nikandria", "Diogeneas", "Zenon", "Menon", "Aristion", "Dionysios", "Demetrios", "Apollonios", "Alexander", "Theodore", "Philon", "Ariston", "Amyntas", "Kleon", "Herakleides"]

const era = eras[Math.floor(Math.random() * eras.length)]
const role = roles[Math.floor(Math.random() * roles.length)]
const name = era.year === "216 BC" ? macedonianNames[Math.floor(Math.random() * macedonianNames.length)] : names[Math.floor(Math.random() * names.length)]

const soldier = {
    name: name, 
    role: role,
    health: 100,
    morale: 75,
    equipment: 100,
    reputation: 50
}


document.getElementById("game").innerHTML = `
    <h2>${soldier.name}</h2>
    <p>${era.year} — ${era.conflict}</p>
    <p>Army: ${era.army}</p>
    <p>Role: ${soldier.role}</p>
    <hr>
    <p>Health: ${soldier.health}</p>
    <p>Morale: ${soldier.morale}</p>
    <p>Equipment: ${soldier.equipment}</p>
    <p>Reputation: ${soldier.reputation}</p>
    `
    
    delete this 