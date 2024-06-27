const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./theme_park.db");

db.serialize(() => {
  // Create tables
  db.run(`CREATE TABLE IF NOT EXISTS areas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT NOT NULL
    )`);

  db.run(`CREATE TABLE IF NOT EXISTS rides (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        area_id INTEGER,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        FOREIGN KEY(area_id) REFERENCES areas(id)
    )`);

  // Insert data into areas
  db.run(`INSERT INTO areas (name, description) VALUES 
        ('Adventure Land', 'A land full of adventures and thrill.'),
        ('Family Fun', 'A perfect place for families with young children.'),
        ('Wild Woods', 'A wild area with rides and a zoo/Sealife area.')
    `);

  // Insert data into rides
  db.run(`INSERT INTO rides (area_id, name, description) VALUES 
        (1, 'Roller Coaster', 'An exciting roller coaster with twists and turns.'),
        (1, 'Sky Drop', 'A thrilling drop tower ride.'),
        (2, 'Merry-Go-Round', 'A classic carousel ride for all ages.'),
        (2, 'Ferris Wheel', 'Enjoy a scenic view of the park on the Ferris Wheel.'),
        (3, 'Wild Safari', 'Experience a safari adventure with wild animals.'),
        (3, 'Sealife Adventure', 'Explore the underwater world with our Sealife Adventure.')
    `);
});

db.close();
