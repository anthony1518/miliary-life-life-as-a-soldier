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
const EnglandRoles = ["Knight", "Man-at-Arms", "Billman", "Glaiveman", "Archer", "Lancearii", "Pavisier", "Mounted Archer", "Hobelar", "Coureur", "Master Gunner", "Master of Trebuchet", "Bombardier", "Siege Engineer", "Sapper", "Physician", "Surgeon", "Apothecary", "Military Barber"]
const FrenchRoles = ["Chevalier", "Homme d'Armes", "Piquiers", "Arbalétrier", "Halbardier", "Archer français", "Homme d'Armes à Cheval", "Archer à Cheval", "Écuyer", "Coureur", "Maître Canonnier", "Maître de Trébuchet", "Bombardier", "Poudrier", "Ingénieur de Siège", "Sapeur", "Maçon Militaire", "Médecin", "Chirurgien", "Apothicaire", "Barbier Militaire"]
const GrandeArmeeRoles = ["Grenadier-à-pied", "Carabinier-à-pied", "Voltigeur", "Tirailleur", "Chasseur-à-pied", "Fusilier", "Flanqueur", "Sapeur", "Sapeur-mineur", "Cuirassier", "Carabinier à cheval", "Grenadier à cheval", "Hussard", "Chasseur-à-cheval", "Dragoon", "Lancier", "Gendarme", "Canonnier", "Bombardier", "Pointeur", "Servant de pièce", "Matrosses", "Sapeur-pontonnier", "Officier du génie", "Chirurgien-major", "Chirurgien", "Infirmier", "Maréchal des logis", "Vivandière", "Tambour-major", "Trompette", "Tambour", "Estafette", "Éclaireur"]
const UnionRoles = ["Private", "Drummer Boy", "Bugler", "Corporal", "Sergeant", "First Sergeant", "Sergeant Major", "Color Bearer", "Skirmisher", "Cavalry Trooper", "Cavalry Scout", "Dragoon", "Vedette", "Cannoneer", "Gun Captain", "Powder Monkey", "Battery Commander", "Military Engineer", "Combat Engineer", "Topographical Engineer", "Surgeon", "Assistant Surgeon", "Ambulance Attendant", "Hospital Steward", "Quartermaster Sergeant", "Courier", "Cook", "Blacksmith"]
const ConfederateRoles = ["Private", "Drummer", "Bugler", "Corporal", "Sergeant", "First Sergeant", "Sergeant Major", "Color Sergeant", "Skirmish Ranger", "Sharpshooter", "Cavalry Trooper", "Mounted Rifleman", "Picket", "Cavalry Scout", "Cannoneer", "Sponger", "Limber Gunner", "Chief of Piece", "Pioneer", "Military Engineer", "Bridge Builder", "Surgeon", "Medical Assistant", "Litter Bearer", "Hospital Steward", "Quartermaster Sergeant", "Courier", "Cook", "Blacksmith"]
const IraqRoles = ["Infantry", "Sniper", "IED Specialist"]
const USRoles = ["Private", "Corporal", "Sergeant", "Lieutenant", "Captain", "Major", "Colonel", "General", "Special Forces Operator", "Rifleman", "Machine Gunner", "Grenadier", "Combat Engineer", "Medic", "Intelligence Analyst", "Logistics Specialist"]
const GermanRoles = ["Gefreiter", "Obergefreiter", "Unteroffizier", "Feldwebel", "Oberfeldwebel", "Hauptfeldwebel", "Gewalthaber", "Schütze", "Maschinengewehrschtze", "Panzergrenadier", "Panzerjäger", "Grenadier", "Pionier", "Funksprech", "Sanitäter", "Unterarzt"]


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
let namePool = []
let rolePool = []

if (army === "Macedonian Army") {
    namePool = macedonianNames
    rolePool = MacedonRoles
} else if (army === "Persian Army") {
    namePool = persianNames
    rolePool = PersianRoles
}  else if (army === "English Army") {
    namePool = Englandnames
    rolePool = EnglandRoles
} else if (army === "French Army") {
    namePool = Frenchnames
    rolePool = FrenchRoles
} else if (army === "French Grande Armée") {
    namePool = Frenchnames
    rolePool = GrandeArmeeRoles
}   else if (army === "Union Army") {
    namePool = USUnionnames
    rolePool = UnionRoles
} else if (army === "Confederate Army") {
    namePool = USASouthernnames
    rolePool = ConfederateRoles
} else if (army === "US Army") {
    namePool = USAnames
    rolePool = USRoles 
} else if (army === "German Army") {
    namePool = Germanames
    rolePool = GermanRoles
} else if (army === "Iraq insurgents") {
    namePool = Iraqnames
    rolePool = IraqRoles
}

const role = rolePool[Math.floor(Math.random() * rolePool.length)]
// soldier
const soldier = {
    name: namePool[Math.floor(Math.random() * namePool.length)],
    role: role,
    health: 100,
    morale: 75,
    equipment: 100,
    reputation: 50,
    // Current calendar date
    Year: parseInt(war.StartYear),
    month: Math.floor(Math.random() * 12) + 1,  // 1-12
    day: Math.floor(Math.random() * 28) + 1,    // 1-28

       // Time in service (how long you’ve been in the army)
    serviceYears: 0,
    serviceMonths: Math.floor(Math.random() * 6),  // 0-5 months
    serviceDays: Math.floor(Math.random() * 30)    // 0-29 days
}

// actual ui

document.getElementById("game").innerHTML = `
    <h2>${soldier.name}</h2>
    <p>${soldier.Year} BC — ${war.Conflict}</p>
    <p>Current Date: ${soldier.Year}/${soldier.month}/${soldier.day}</p>
    <p>Time in Service: ${soldier.serviceYears}y ${soldier.serviceMonths}m ${soldier.serviceDays}d</p>
    <p>Army: ${army}</p>
    <p>Role: ${soldier.role}</p>
    <hr>
    <p>Health: ${soldier.health}</p>
    <p>Morale: ${soldier.morale}</p>
    <p>Equipment: ${soldier.equipment}</p>
    <p>Reputation: ${soldier.reputation}</p>
`
    