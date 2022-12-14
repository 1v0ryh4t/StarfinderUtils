
const world_type_list = ["Terrestrial", "Gas giant", "Irregular", "Satellite", "Asteroid", "Colony ship", "Space station"];
const gravity_list = ["Standard", "Zero gravity", "Low", "High", "Extreme"]
const atmosphere_list = ["Normal", "None", "Thin", "Thick", "Corrosive or Toxic"]
const biome_list = ["Airborne", "Aquatic", "Arctic", "Desert", "Forest", "Marsh", "Mountain", "Plains", "Space", "Subterranean", "Urban", "Weird"]
const triad_list = ["Low", "Medium", "High"]
const align_cohesion_list = ["Chaotic", "Neutral", "Lawful"]
const align_morality_list = ["Evil", "Neutral", "Good"]
const settlement_gov_list = ["Anarchy", "Autocracy", "Council", "Magocracy", "Military", "Oligarchy", "Secret Syndicate", "Plutocracy", "Utopia"]
const settlement_qual_list = ["Academic", "Bureaucratic", "Cultured", "Devout", "Financial Center", "Insular", "Notorious", "Polluted"]

function GeneratePlanet(){
  //console.log(allRaces[Math.floor(Math.random()*allRaces.length)].textContent);

  console.log("World Type:      " + GenWorldType());
  console.log("Gravity:         " + GenGravity());
  console.log("Atmosphere:      " + GenAtmopshere());
  var dThree = rollRange(3);
  for(let i = 1; i <= dThree; i++){
    console.log("   Biome: " + GenBiome());
  }
  console.log("Accord:          " + GenTriadAttributes());
  console.log("Alignment:       " + GenAlignCohesion() + " " + GenAlignMorality());
  console.log("Magic Level:     " + GenTriadAttributes());
  console.log("Religion Level:  " + GenTriadAttributes());
  console.log("Tech Level:      " + GenTriadAttributes());
  var dThree = rollRange(3);
  for(let i = 1; i <= dThree; i++){
    console.log("   Settlement Info: " + GenSettlementQual() + " " + GenSettlementGov());
  }
}

function GenWorldType(){
  var dCent   = rollRange(100);
  if(dCent >= 1 && dCent <= 50)
    return world_type_list[0];
  if(dCent >= 51 && dCent <= 70)
    return world_type_list[1];
  if(dCent >= 71 && dCent <= 85)
    return world_type_list[2];
  if(dCent >= 86 && dCent <= 90)
    return world_type_list[3];
  if(dCent >= 91 && dCent <= 95)
    return world_type_list[4];
  if(dCent >= 96 && dCent <= 97)
    return world_type_list[5];
  if(dCent >= 98 && dCent <= 100)
    return world_type_list[6];
}

function GenGravity(){
  var dCent = rollRange(100);
  if(dCent >= 1 && dCent <= 50)
    return gravity_list[0];
  if(dCent >= 51 && dCent <= 60)
    return gravity_list[1];
  if(dCent >= 61 && dCent <= 75)
    return gravity_list[2];
  if(dCent >= 76 && dCent <= 90)
    return gravity_list[3];
  if(dCent >= 91 && dCent <= 100)
    return gravity_list[4];
}

function GenAtmopshere(){
  var dCent = rollRange(100);
  if(dCent >= 1 && dCent <= 50)
    return atmosphere_list[0];
  if(dCent >= 51 && dCent <= 60)
    return atmosphere_list[1];
  if(dCent >= 61 && dCent <= 75)
    return atmosphere_list[2];
  if(dCent >= 76 && dCent <= 90)
    return atmosphere_list[3];
  if(dCent >= 91 && dCent <= 100)
    return atmosphere_list[4];
}

function GenBiome(){
  var dTwelve = rollRange(12);
  return biome_list[dTwelve-1];
}

function GenTriadAttributes(){
  var dThree = rollRange(3);
  return triad_list[dThree-1];
}

function GenAlignCohesion(){
  var dThree = rollRange(3);
  return align_cohesion_list[dThree-1];
}

function GenAlignMorality(){
  var dThree = rollRange(3);
  return align_morality_list[dThree-1];
}

function GenSettlementGov(){
  var dNine = rollRange(9);
  return settlement_gov_list[dNine-1];
}

function GenSettlementQual(){
  var dSeven = rollRange(8);
  return settlement_qual_list[dSeven-1];
}

function rollRange(r){
  return Math.floor(Math.random() * r) + 1;
}

function isThreat(){
  return Math.random() >= 0.5 ? "Roll Initiative!" : "all clear";
}

GeneratePlanet()
console.log("\n\n");
GeneratePlanet()
console.log("\n\n");
GeneratePlanet()
console.log("\n\n");
GeneratePlanet()
console.log("\n\n");
GeneratePlanet()
console.log("\n\n");
GeneratePlanet()
console.log("\n\n");
