const wars = [
 {
  "StartYear": "334",
  "EndYear": "330",
  "Conflict": "Invasion of Persia",
  "Army": { "Macedon": ["Macedonian Army"], "Persia": ["Persian Army"] },
  "MajorEvents": ["Battle of Granicus", "Battle of Issus", "Siege of Tyre", "Battle of Gaugamela", "Pursuit of Darius III"]

},
{
  "StartYear": "1337",
  "EndYear": "1453",
  "Conflict": "Hundred Years War",
  "Army": { "England": ["English Army"], "France": ["French Army"]},
  "MajorEvents": ["Battle of Crécy", "Battle of Poitiers", "Battle of Agincourt", "Siege of Orléans", "Battle of Castillon"]
},
{
  "StartYear": "1803",
  "EndYear": "1815",
  "Conflict": "Napoleonic Wars",
  "Army": { "France": ["French Grande Armée"], "Coalition Forces": ["English Army"] },
  "MajorEvents": ["Battle of Marengo", "Battle of Austerlitz", "Battle of Jena", "Battle of Waterloo"]
},
{
  "StartYear": "1861",
  "EndYear": "1865",
  "Conflict": "American Civil War",
  "Army": { "US North": ["Union Army"], "US South": ["Confederate Army"] },
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
  "EndYear": "2011",
  "Conflict": "Iraq War",
  "Army": { "US Coalition": ["US Army"], "Iraq": ["Iraq insurgents"] },
  "MajorEvents": ["Invasion of Iraq", "Battle of Fallujah", "Capture of Saddam Hussein"]
}
]

//ROle pools
const MacedonRoles = ["Phalanx", "elite spearmen", "Scout calvary", "Archers", "Hetairoi Calvary", "Slinger", "peltast", "agema", "hypaspist", "companion cavalry", "foot companion", "thureophoroi", "light infantry"]
const PersianRoles = ["Immortals", "Sparabara", "Cavalry", "Archers", "Charioteers", "Slingers", "Peltasts", "Navy Sailors"]
const EnglandRoles = ["Knight", "Chevalier Bachelor", "Armiger", "Serjeant-at-arm", "Archier à Cheval (Mounted Archer)", "Archier à Pied (Foot Archer)",
     "Vintener", "Billman", "Glaiveman", "Lancearii", "Pavisier", "Hobelar", "Coureur"]
const FrenchRoles = ["Knight", "Foot soldier", "Crossbowman", "Pikeman", "Swordsman", "Archer"]
const GrandeArméeRoles = ["Infantry", "Cavalry", "Artillery", "Engineer", "Medic"]
const UnionRoles = ["Infantryman", "Cavalryman", "Artilleryman", "Engineer", "Medic"]
const ConfederateRoles = ["Infantryman", "Cavalryman", "Artilleryman", "Engineer", "Medic"]



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
const sides = Object.keys(war.Army)
const randomSide = sides[Math.floor(Math.random() * sides.length)]
const army = war.Army[randomSide][0]
const role = roles[Math.floor(Math.random() * roles.length)]
let namePool = []

if (army === "Macedonian Army") {
    namePool = macedonianNames
} else if (army === "Persian Army") {
    namePool = persianNames 
}  else if (army === "English Army") {
    namePool = Englandnames
} else if (army === "French Army") {
    namePool = Frenchnames
} else if (army === "French Grande Armée") {
    namePool = Frenchnames
}   else if (army === "Union Army") {
    namePool = USUnionnames
} else if (army === "Confederate Army") {
    namePool = USASouthernnames
} else if (army === "US Army") {
    namePool = USAnames
} else if (army === "German Army") {
    namePool = Germanames
} else if (army === "Iraq insurgents") {
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
    <p>${war.StartYear} — ${war.Conflict}</p>
    <p>Army: ${army}</p>
    <p>Role: ${soldier.role}</p>
    <hr>
    <p>Health: ${soldier.health}</p>
    <p>Morale: ${soldier.morale}</p>
    <p>Equipment: ${soldier.equipment}</p>
    <p>Reputation: ${soldier.reputation}</p>
    `