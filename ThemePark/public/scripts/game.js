document.addEventListener('DOMContentLoaded', function () {
    const gameContainer = document.getElementById('game-container');
    const animalImage = document.getElementById('animal-image');
    const tiles = [];

    function createTiles() {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                const tile = document.createElement('div');
                tile.classList.add('tile');
                tile.style.top = `${i * 100}px`;
                tile.style.left = `${j * 100}px`;
                tile.addEventListener('click', () => revealTile(tile));
                tiles.push(tile);
                gameContainer.appendChild(tile);
            }
        }
    }

    function revealTile(tile) {
        tile.style.backgroundColor = 'transparent';
        tile.style.border = 'none';
    }

    function revealImage() {
        animalImage.style.display = 'block';
    }

    createTiles();
    setTimeout(revealImage, 100); // Reveal the image after 30 seconds if not all tiles are clicked
});
