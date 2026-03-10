const wars = [
 {
  "StartYear": "334",
  "EndYear": "330",
  "Conflict": "Invasion of Persia",
  "Army": { "Side1": ["Macedonian Army"], "Side2": ["Persian Army"] },
  "MajorEvents": ["Battle of Granicus", "Battle of Issus", "Siege of Tyre", "Battle of Gaugamela", "Pursuit of Darius III"]
},
{
  "StartYear": "1337",
  "EndYear": "1453",
  "Conflict": "Hundred Years War",
  "Army": { "Side1": ["English Army"], "Side2": ["French Army"]},
  "MajorEvents": ["Battle of Crécy", "Battle of Poitiers", "Battle of Agincourt", "Siege of Orléans", "Battle of Castillon"]
},
{
  "StartYear": "1803",
  "EndYear": "1815",
  "Conflict": "Napoleonic Wars",
  "Army": { "Side1": ["French Grande Armée"], "Coalition Forces": ["English Army"] },
  "MajorEvents": ["Battle of Marengo", "Battle of Austerlitz", "Battle of Jena", "Battle of Waterloo"]
},
{
  "StartYear": "1861",
  "EndYear": "1865",
  "Conflict": "American Civil War",
  "Army": { "Side1": ["Union Army"], "Side2": ["Confederate Army"] },
  "MajorEvents": ["Battle of Gettysburg", "Battle of Vicksburg", "Siege of Petersburg"]
},
{
  "StartYear": "1939",
  "EndYear": "1945",
  "Conflict": "World War 2",
  "Army": { "Allies": ["US Army"], "Axis": ["German Army"] },
  "MajorEvents": ["Invasion of Poland", "Battle of Britain", "D-Day Landing", "Battle of Stalingrad"]
},
{
  "StartYear": "2003",
  "": "2011",
  "Conflict": "Iraq War",
  "Army": { "Side1": ["US Army"], "Side2": ["Iraq insurgents"] },
  "MajorEvents": ["Invasion of Iraq", "Battle of Fallujah", "Capture of Saddam Hussein"]
}
]


const roles = ["Infantry", "Cavalry", "Artillery", "Scout", "Engineer"]

const names = ["Thomas", "Darius", "Emile", "Jakob", "Remy", "Aurelio", "John", "Marcus",]

//name pool for each war era[]

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

const war = wars[Math.floor(Math.random() * wars.length)]
const role = roles[Math.floor(Math.random() * roles.length)]
let namePool = names

if (war.Army === "Macedonian Army") {
    namePool = macedonianNames
} else if (war.Army === "Persian Army") {
    namePool = persianNames 
}  else if (war.Army === "English Army") {
    namePool = Englandnames
} else if (war.Army === "French Army") {
    namePool = Frenchnames
} else if (war.Army === "French Grande Armée") {
    namePool = Frenchnames
}   else if (war.Army === "Union Army") {
    namePool = USUnionnames
} else if (war.Army === "Confederate Army") {
    namePool = USASouthernnames
} else if (war.Army === "US Army") {
    namePool = USAnames
} else if (war.Army === "German Army") {
    namePool = Germanames
} else if (war.Army === "Iraq insurgents") {
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
    <h2>${soldier.name}</h2>b
    <p>${war.year} — ${war.conflict}</p>
    <p>Army: ${war.Army}</p>
    <p>Role: ${soldier.role}</p>
    <hr>
    <p>Health: ${soldier.health}</p>
    <p>Morale: ${soldier.morale}</p>
    <p>Equipment: ${soldier.equipment}</p>
    <p>Reputation: ${soldier.reputation}</p>
    `