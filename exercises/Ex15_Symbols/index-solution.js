var awesomeCreatures = {};

awesomeCreatures[Symbol('ewok')] = 'Chirpa';
awesomeCreatures[Symbol('ewok')] = 'Paploo';
awesomeCreatures[Symbol('ewok')] = 'Logray';

for(let item of Object.getOwnPropertySymbols(awesomeCreatures)){
  console.log(awesomeCreatures[item]);
}
