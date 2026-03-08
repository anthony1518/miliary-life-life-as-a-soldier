const eras = [
    { year: "334 BC", army: "Macedonian Army", conflict: "Invasion of Persia" },
    { year: "334 BC", army: "Persian Army", conflict: "Invasion of Persia" },
    { year: "1415", army: "English Army", conflict: "Hundred Years War" },
    { year: "1415", army: "French Army", conflict: "Hundred Years War" },
    { year: "1805", army: "French Grande Armée", conflict: "Napoleonic Wars" },
    { year: "1863", army: "Union Army", conflict: "American Civil War" },
    { year: "1944", army: "US Army", conflict: "World War 2" },
    { year: "1863", army: "Confederate Army", conflict: "American Civil War" },
     { year: "1944", army: "German Army", conflict: "World War 2" },
    { year: "2003", army: "US Army", conflict: "Iraq War" },
    { year: "2003", army: "Iraq insurgents", conflict: "Iraq war"}
]

const roles = ["Infantry", "Cavalry", "Artillery", "Scout", "Engineer"]

const names = ["Thomas", "Darius", "Emile", "Jakob", "Remy", "Aurelio", "John", "Marcus",]

//name pool for each war era

//Invasion of Persia names
const macedonianNames = ["Demetrios", "Nikandros", "Diodoros", "Andronikos", "Philotas", "Nikandria", "Diogeneas", "Zenon", "Menon", "Aristion", "Dionysios", "Demetrios", "Apollonios", "Alexander", "Theodore", "Philon", "Ariston", "Amyntas", "Kleon", "Herakleides"]
const persianNames = ["Darius", "Xerxes", "Artaxerxes", "Cyrus", "Cambyses", "Bessus", "Mithridates", "Oxyathres", "Smerdis", "Bardiya", "Atossa", "Parysatis", "Amestris", "Roxana", "Statira", "Sisygambis"]  

// Hundred Years War names
const Englandnames = ["William", "Henry", "Richard", "Edward", "John", "Thomas", "Geoffrey", "Robert", "Simon", "Walter", "Hugh", "Roger", "Stephen", "Geoffrey", "Adam", "Gilbert"]
const Frenchnames = ["Jean", "Pierre", "Louis", "Jacques", "Michel", "Claude", "François", "Henri", "Philippe", "Gérard", "Alain", "Bernard", "René", "Pascal", "Sophie", "Isabelle"]

// WW2 names
const USAnames = ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Charles", "Thomas", "Christopher", "Daniel", "Matthew", "Anthony"]
const Germanames = ["Hans", "Friedrich", "Karl", "Heinrich", "Wilhelm", "Otto", "Ernst", "Franz", "Maximilian", "Ludwig", "Georg", "Johann"]

// Civil war name pool. black names on both armies
const USAUnionwhitenames = ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Charles", "Thomas", "Christopher", "Daniel", "Matthew", "Anthony"]
const USASouthernwhitenames = ["William", "James", "John", "Robert", "Charles", "Thomas", "George", "Henry", "Joseph", "Samuel", "Benjamin", "David", "Richard", "Edward"]  
const Civilwarblacknames = ["Frederick", "Langston", "James", "George", "William", "Henry", "Samuel", "Joseph", "Benjamin", "Joshua", "Isaac", "Daniel", "Aaron", "Abraham", "Charles", "Edward", "Marcus", "Lewis", "David", "Jacob", "Peter", "Solomon", "Thomas", "Robert", "Richard"]
const USUnionnames = [... USAUnionwhitenames, ... Civilwarblacknames]
const USASouthernnames = [... USASouthernwhitenames, ... Civilwarblacknames]    


const Iraqnames = ["Ahmed","Ali","Hassan","Omar","Yusuf","Abdullah","Khalid","Faisal","Zaid",]

const era = eras[Math.floor(Math.random() * eras.length)]
const role = roles[Math.floor(Math.random() * roles.length)]
let namePool = names

if (era.army === "Macedonian Army") {
    namePool = macedonianNames
} else if (era.army === "Persian Army") {
    namePool = persianNames 
}  else if (era.army === "English Army") {
    namePool = Englandnames
} else if (era.army === "French Grande Armée") {
    namePool = Frenchnames
}   else if (era.army === "Union Army") {
    namePool = USUnionnames
} else if (era.army === "Confederate Army") {
    namePool = USASouthernnames
} else if (era.army === "US Army") {
    namePool = USAnames
} else if (era.army === "German Army") {
    namePool = Germanames
} else if (era.army === "Iraq insurgents") {
    namePool = Iraqnames
}
// soldier
const soldier = {
    name: namePool[Math.floor(Math.random() * namePool.length)],
    role: role,
    health: 100,
    morale: 75,
    equipment: 100,
    reputation: 50
}

// actual ui

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