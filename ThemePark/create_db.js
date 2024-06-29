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
        url_text TEXT NOT NULL,
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
  db.run(`INSERT INTO rides (area_id, name, description, image, url_text) VALUES 
        (1, 'Angry Birds Mini Golf', 'An exciting mini golf adventure with Angry Birds.', '/assets/nav_ab.png', 'angry-birds-mini-golf'),
        (1, 'Mirror Maze', 'Find your way through the challenging mirror maze.', '/assets/Mirror_Maze-Nav_Bar.png', 'mirror-maze'),
        (1, 'Activate', 'Get active with fun activities and challenges.', '/assets/nav-activate.png', 'activate'),
        (2, 'Surf', 'Ride the waves at the surf area.', '/assets/nav-surf.png', 'surf'),
        (2, 'Legends', 'Discover the legendary stories.', '/assets/nav-legends.png', 'legends'),
        (2, 'Escape', 'Try to escape from the challenging rooms.', '/assets/nav-escape.png', 'escape'),
        (3, 'DreamWorks Water Park', 'Enjoy the splash-tastic fun at the DreamWorks Water Park.', '/assets/nav_dwwp.png', 'dreamworks-water-park'),    
        (3, 'Sea Life', 'Explore the wonders of sea life.', '/assets/nav-sea-life.png', 'sea-life')
    `);
});

db.close();
