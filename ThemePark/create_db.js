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

  db.run(`CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT NOT NULL,
      message TEXT NOT NULL
  )`);

  // Insert data into areas
  db.run(`INSERT INTO areas (name, description) VALUES 
        ('Adventure Land', 'A land full of adventures and thrill.'),
        ('Family Fun', 'A perfect place for families with young children.'),
        ('Wild Woods', 'A wild area with rides and a zoo/Sealife area.'),
        ('Fantasy Realm', 'Enter a magical world filled with fantasy and wonder.'),
        ('Water World', 'A splash-tastic area with water rides and attractions.'),
        ('Tech Town', 'Experience futuristic rides and cutting-edge technology.')
    `);

  // Insert data into rides
  db.run(`INSERT INTO rides (area_id, name, description) VALUES 
        (1, 'Roller Coaster', 'An exciting roller coaster with twists and turns.'),
        (1, 'Sky Drop', 'A thrilling drop tower ride.'),
        (1, 'Bungee Jump', 'Experience the ultimate free fall with our bungee jump.'),
        (1, 'Haunted House', 'Dare to enter the haunted house and face your fears.'),
        (2, 'Merry-Go-Round', 'A classic carousel ride for all ages.'),
        (2, 'Ferris Wheel', 'Enjoy a scenic view of the park on the Ferris Wheel.'),
        (2, 'Kiddie Train', 'A gentle train ride perfect for young children.'),
        (2, 'Ball Pit', 'Dive into the fun in our large ball pit.'),
        (3, 'Wild Safari', 'Experience a safari adventure with wild animals.'),
        (3, 'Sealife Adventure', 'Explore the underwater world with our Sealife Adventure.'),
        (3, 'Treehouse Climb', 'Climb and explore the treehouse in the wild woods.'),
        (3, 'Bird Show', 'Watch a spectacular show featuring exotic birds.'),
        (4, 'Dragon Flight', 'Fly with the dragons in this high-flying adventure.'),
        (4, 'Fairy Tale Journey', 'A gentle boat ride through famous fairy tales.'),
        (4, 'Magic Carpet', 'Ride the magic carpet through the fantasy realm.'),
        (4, 'Enchanted Forest', 'Explore the enchanted forest full of mystical creatures.'),
        (5, 'Wave Pool', 'Catch the waves in our giant wave pool.'),
        (5, 'Water Slide', 'Slide down our thrilling water slides.'),
        (5, 'Lazy River', 'Relax as you float down the lazy river.'),
        (5, 'Splash Pad', 'Cool off in our interactive splash pad.'),
        (6, 'VR Coaster', 'Experience a virtual reality roller coaster.'),
        (6, 'Robotics Show', 'Watch a show featuring the latest in robotics technology.'),
        (6, 'Laser Tag', 'Compete with friends in an exciting game of laser tag.'),
        (6, '3D Cinema', 'Enjoy the latest movies in our 3D cinema.')
    `);
});

db.close();
