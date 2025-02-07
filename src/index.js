// api documentation: https://whois.fdnd.nl/docs/

// 1 persoon: https://fdnd.directus.app/items/person/67
// iedereen: https://fdnd.directus.app/items/person/?fields=id,name,github_handle,avatar&filter={%22squads%22:{%22squad_id%22:{%22name%22:%22Minor%20Web%20Dev%22}}}&sort=name

const baseURL = 'https://fdnd.directus.app/';


const endpointSquad = 'items/person/?filter={"squads":{"squad_id":15}}';
const endpointMe = 'items/person/221';
// hier beschrijven we de url die we willen gebruiken om mijn data te vinden
const urlMe = baseURL + endpointMe;
// hier zetten we de twee url's die we hebben om data op te halen in een variabele

console.log(urlMe);


