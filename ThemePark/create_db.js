const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./theme_park.db");

db.serialize(() => {
  // Create tables
  db.run(`CREATE TABLE IF NOT EXISTS areas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        image TEXT NOT NULL
    )`);

  db.run(`CREATE TABLE IF NOT EXISTS rides (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        area_id INTEGER,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        image TEXT NOT NULL,
        FOREIGN KEY(area_id) REFERENCES areas(id)
    )`);

  db.run(`CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT NOT NULL,
      message TEXT NOT NULL
  )`);

  // Insert data into areas
  db.run(`INSERT INTO areas (name, description, image) VALUES 
        ('Adventure Land', 'A land full of adventures and thrill.', '/assets/nav-nicku.png'),
        ('Family Fun', 'A perfect place for families with young children.', '/assets/nav_dwwp.png'),
        ('Wild Woods', 'A wild area with rides and a zoo/Sealife area.', '/assets/nav-bs.png')
    `);

  // Insert data into rides
  db.run(`INSERT INTO rides (area_id, name, description, image) VALUES 
        (1, 'Angry Birds Mini Golf', 'An exciting mini golf adventure with Angry Birds.', '/assets/nav_ab.png'),
        (1, 'iMUSEUM', 'Explore the interactive museum.', '/assets/iMUSEUM.png'),
        (1, 'In the Game', 'Join the immersive gaming experience.', 'assets/In_the_Game_-_Nav_asset.png'),
        (1, 'Mirror Maze', 'Find your way through the challenging mirror maze.', '/assets/Mirror_Maze-Nav_Bar.png'),
        (1, 'DreamWorks Water Park', 'Enjoy the splash-tastic fun at the DreamWorks Water Park.', '/assets/nav_dwwp.png'),
        (2, 'Activate', 'Get active with fun activities and challenges.', '/assets/nav-activate.png'),
        (2, 'Blast', 'Experience the blast of excitement.', '/assets/nav-blast.png'),
        (2, 'BLMG', 'Enjoy the thrilling BLMG ride.', '/assets/nav-blmg.png'),
        (2, 'Escape', 'Try to escape from the challenging rooms.', '/assets/nav-escape.png'),
        (3, 'Legends', 'Discover the legendary stories.', '/assets/nav-legends.png'),
        (3, 'Paradox', 'Solve the paradox puzzles.', '/assets/nav-Paradox.png'),
        (3, 'Rink', 'Skate on the amazing rink.', '/assets/nav-rink.png'),
        (3, 'Sea Life', 'Explore the wonders of sea life.', '/assets/nav-sea-life.png'),
        (3, 'Surf', 'Ride the waves at the surf area.', '/assets/nav-surf.png')
    `);
});

db.close();
