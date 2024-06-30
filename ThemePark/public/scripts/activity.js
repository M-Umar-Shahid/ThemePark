document.addEventListener('DOMContentLoaded', function () {
    const gameContainer = document.getElementById('game-container');
    const animalImage = document.getElementById('animal-image');
    const tiles = [];

    function createTiles() {
        const screenWidth = window.innerWidth;
        const tileSize = screenWidth < 576 ? 70 : 100;

        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                const tile = document.createElement('div');
                tile.classList.add('tile');
                tile.style.top = `${i * tileSize}px`;
                tile.style.left = `${j * tileSize}px`;
                tile.style.width = `${tileSize}px`;
                tile.style.height = `${tileSize}px`;
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
    setTimeout(revealImage, 10); // Reveal the image after 10 seconds if not all tiles are clicked
});
