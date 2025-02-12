// api documentation: https://whois.fdnd.nl/docs/

// 1 persoon: https://fdnd.directus.app/items/person/67
// iedereen: https://fdnd.directus.app/items/person/?fields=id,name,github_handle,avatar&filter={%22squads%22:{%22squad_id%22:{%22name%22:%22Minor%20Web%20Dev%22}}}&sort=name

const baseURL = 'https://fdnd.directus.app/';

const endpointMe = 'items/person/221';
// hier beschrijven we de url die we willen gebruiken om mijn data te vinden
const urlMe = baseURL + endpointMe;
// hier zetten we de twee url's die we hebben om data op te halen in een variabele

fetch(urlMe)
  .then(response => response.json()) // JSON-parsing van de API-response
  .then(data => {
    console.log(data); // Bekijk de volledige data in de console

  })
  .catch(error => console.error('Fout bij ophalen:', error));


getData(urlMe).then(data => {
    const myData = data.data;
    const myName = myData.nickname;
    
    // Parse the custom field
    const customData = JSON.parse(myData.custom);
    const projecten = customData.projecten;
    
    console.log(projecten);

    const myh1 = document.querySelector('section:nth-of-type(1) h1');
    myh1.textContent = myName + ' ' + projecten;
});


getData(urlMe).then(data => {
  const myData = data.data;
  const myFavColor = myData.fav_color;
  const myFavFood = myData.fav_kitchen;

  // Parse de custom field
  const customData = JSON.parse(myData.custom);
  const leeftijd = customData.leeftijd;
  const soort = customData.soort;

  // Selecteer de UL binnen de tweede section
  const theUl = document.querySelector('section:nth-of-type(2) ul');
  theUl.innerHTML = ''; // Verwijder bestaande lijstitems

  // Maak een array van de constante waardes
  const items = [
    `Favorite Food: ${myFavFood}`,
    `Leeftijd: ${leeftijd}`,
    `Soort: ${soort}`

  ];

  // Voeg elke waarde toe als <li>
  items.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    theUl.appendChild(li);
  });

  // Voeg de favoriete kleur toe als een blok van kleur
  const colorLi = document.createElement('li');
  const colorBlock = document.createElement('div');
  colorBlock.style.width = '20px';
  colorBlock.style.height = '20px';
  colorBlock.style.backgroundColor = myFavColor;
  colorBlock.style.display = 'inline-block';
  colorBlock.style.marginRight = '10px';
  colorLi.textContent = `Favorite Color: ${myFavColor} `;
  colorLi.appendChild(colorBlock);
  theUl.appendChild(colorLi);
});

getData(urlMe).then(data => {
  const myData = data.data;

  // Parse de custom field
  const customData = JSON.parse(myData.custom);
  const img = customData.images;

  console.log(img);

  const theArticle = document.querySelector('section:nth-of-type(3) article');
  theArticle.innerHTML = ''; // Verwijder bestaande inhoud

  // Voeg elke afbeelding toe aan het artikel
  img.forEach(src => {
    const imgElement = document.createElement('img');
    imgElement.src = src;


  
            // Wacht tot de afbeelding geladen is om te controleren of het landscape of portrait is
            imgElement.onload = function() {
              // Controleer de natuurlijke breedte en hoogte van de afbeelding
              if (imgElement.naturalWidth > imgElement.naturalHeight) {
                imgElement.classList.add('landscape'); // Voeg de 'landscape' klasse toe voor horizontale foto's
                  // Pas de grid column aan voor landscape
                  imgElement.style.gridColumn = 'span 2'; // Zorg ervoor dat de landscape afbeelding 2 kolommen inneemt
              } else {
                imgElement.classList.add('portrait');  // Voeg de 'portrait' klasse toe voor verticale foto's
                  // Zorg ervoor dat portrait afbeeldingen in 1 kolom passen
                  imgElement.style.gridColumn = 'span 1'; // Zorg ervoor dat de portrait afbeelding maar 1 kolom inneemt
      };
      theArticle.appendChild(imgElement);
    };
  });
});



async /*9*/ function getData(URL) {
	return ( //8
		fetch(URL) //1
		.then ( //2
			response /*3*/ => response.json() //4
		)
		.then ( //5
			jsonData /*6*/ => {return jsonData} //7
		)
	);
}