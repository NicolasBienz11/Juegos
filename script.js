document.addEventListener('DOMContentLoaded', function() {
  let secretCharacter; // Declara la variable aquí para que tenga un alcance global
  const gameBoard = document.getElementById('gameBoard');
  const characters = [
      { name: 'Sheyaa', img: 'Imagenes/Sheyaa.jpeg' },
      { name: 'DeBig', img: 'Imagenes/DeBig.jpg' },
      { name: 'Brandon', img: 'Imagenes/Brandon.jpeg' },
      { name: 'Wav', img: 'Imagenes/Wav.jpg' },
      { name: 'Steven', img: 'Imagenes/Steven.png' },
      { name: 'Jack', img: 'Imagenes/Jack.jpeg' },
      { name: 'Mateo', img: 'Imagenes/Mateo.png' },
      { name: 'Milena', img: 'Imagenes/Milena.jpeg' },
      { name: 'Gabacan', img: 'Imagenes/Gabacan.png' },
      { name: 'Danielabpa', img: 'Imagenes/Danielabpa.jpeg' },
      { name: 'Jeffrey', img: 'Imagenes/Jeffrey.jpg' },
      { name: 'Luda', img: 'Imagenes/Luda.jpg' },
      { name: 'Fusilero', img: 'Imagenes/Aurelio.png' },
      { name: 'Caepics', img: 'Imagenes/Caepics.png' },
      { name: 'Pete Zahot', img: 'Imagenes/PeteZahot.jpeg' },
      { name: 'Pili', img: 'Imagenes/Pili.jpeg' },
      { name: 'Anakin', img: 'Imagenes/Anakin.jpeg' },
      { name: 'Kilian', img: 'Imagenes/Kilian.jpeg' },
      { name: 'Victor Vargas', img: 'Imagenes/VictorVargas.jpg' },
    ];

    const startGameButton = document.getElementById('startGameButton');

  if (startGameButton) {
    startGameButton.addEventListener('click', function() {
      secretCharacter = characters[Math.floor(Math.random() * characters.length)];
      // Actualiza la fuente de la imagen para el personaje seleccionado y asegúrate de que se muestre
      selectedCharacterImage.src = secretCharacter.img;
      selectedCharacterImage.alt = "Tu personaje es " + secretCharacter.name;
      selectedCharacterImage.style.display = 'block'; // Asegúrate de que la imagen sea visible
    });
  } else {
    console.error('El botón de empezar juego no fue encontrado.');
  }

  characters.forEach((character, index) => {
    const charElement = document.createElement('div');
    charElement.classList.add('character');
    charElement.innerHTML = `
      <img src="${character.img}" alt="${character.name}" title="${character.name}">
      <p>${character.name}</p>
    `;
    charElement.addEventListener('click', function() {
      // Alternar el estado de eliminado
      character.eliminated = !character.eliminated;
      updateCharacterAppearance(charElement, character.eliminated);
    });
    gameBoard.appendChild(charElement);
  });
  
  function updateCharacterAppearance(element, eliminated) {
    if (eliminated) {
      element.style.opacity = '0.4'; // Marca el personaje como "eliminado"
    } else {
      element.style.opacity = '1'; // Restaura la opacidad para un personaje "no eliminado"
    }
  }
});
  