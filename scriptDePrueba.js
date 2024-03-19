document.addEventListener('DOMContentLoaded', function() {

    const gameBoard = document.getElementById('gameBoard');
    const characters = [
      { name: 'Sheyaa', img: 'Imagenes/Sheyaa.jpeg' },
      { name: 'DeBig', img: 'Imagenes/DeBig.jpg' },
      { name: 'Brandon', img: 'Imagenes/Brandon.jpg' },
      { name: 'Wav', img: 'Imagenes/Wav.jpg' },
      { name: 'Steven', img: 'Imagenes/Steven.png' },
      { name: 'Jack', img: 'Imagenes/Jack.jpg' },
      { name: 'Mateo', img: 'Imagenes/Mateo.jpg' },
      { name: 'Milena', img: 'Imagenes/Milena.jpg' },
      { name: 'Gabacan', img: 'Imagenes/Gabacan.png' },
      { name: 'Danielabpa', img: 'Imagenes/Danielabpa.jpeg' },
      { name: 'Jeffrey', img: 'Imagenes/Jeffrey.jpg' },
      { name: 'Luda', img: 'Imagenes/Luda.jpg' },
      { name: 'Fusilero', img: 'Imagenes/Fusilero.jpg' },
      { name: 'Caepics', img: 'Imagenes/Caepics.png' },
      { name: 'Pete Zahot', img: 'Imagenes/PeteZahot.jpeg' },
      { name: 'Pili', img: 'Imagenes/Pili.jpeg' },
      { name: 'Anakin', img: 'Imagenes/Anakin.jpeg' },
      { name: 'Kilian', img: 'Imagenes/Kilian.jpeg' },
      { name: 'Victor Vargas', img: 'Imagenes/VictorVargas.jpg' },
    ];


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
  