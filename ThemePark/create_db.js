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
        ('Adventure Land', 'A land full of adventures and thrill.', 'adventure_land.jpg'),
        ('Family Fun', 'A perfect place for families with young children.', 'family_fun.jpg'),
        ('Wild Woods', 'A wild area with rides and a zoo/Sealife area.', 'wild_woods.jpg'),
        ('Fantasy Realm', 'Enter a magical world filled with fantasy and wonder.', 'fantasy_realm.jpg'),
        ('Water World', 'A splash-tastic area with water rides and attractions.', 'water_park.jpg'),
        ('Tech Town', 'Experience futuristic rides and cutting-edge technology.', 'tech_world.jpg')
    `);

  // Insert data into rides
  db.run(`INSERT INTO rides (area_id, name, description, image) VALUES 
        (1, 'Roller Coaster', 'An exciting roller coaster with twists and turns.', 'roller_coaster.jpg'),
        (1, 'Sky Drop', 'A thrilling drop tower ride.', 'sky_drop.jpg'),
        (1, 'Haunted House', 'Dare to enter the haunted house and face your fears.', 'haunted_house.jpg'),
        (2, 'Merry-Go-Round', 'A classic carousel ride for all ages.', 'merry_go_round.jpg'),
        (2, 'Ferris Wheel', 'Enjoy a scenic view of the park on the Ferris Wheel.', 'ferris_wheel.jpg'),
        (2, 'Kiddie Train', 'A gentle train ride perfect for young children.', 'kiddie_train.jpg'),
        (3, 'Wild Safari', 'Experience a safari adventure with wild animals.', 'wild_safari.jpg'),
        (3, 'Sealife Adventure', 'Explore the underwater world with our Sealife Adventure.', 'sealife_adventure.jpg'),
        (3, 'Treehouse Climb', 'Climb and explore the treehouse in the wild woods.', 'treehouse_climb.jpeg'),
        (4, 'Dragon Flight', 'Fly with the dragons in this high-flying adventure.', 'dragon_flight.jpg'),
        (4, 'Fairy Tale Journey', 'A gentle boat ride through famous fairy tales.', 'fairy_tale_journey.jpg'),
        (4, 'Magic Carpet', 'Ride the magic carpet through the fantasy realm.', 'magic_carpet.jpg'),
        (5, 'Wave Pool', 'Catch the waves in our giant wave pool.', 'wave_pool.jpg'),
        (5, 'Water Slide', 'Slide down our thrilling water slides.', 'water_slide.jpg'),
        (5, 'Splash Pad', 'Cool off in our interactive splash pad.', 'splash_pad.jpg'),
        (6, 'VR Coaster', 'Experience a virtual reality roller coaster.', 'VR_coaster.jpeg'),
        (6, 'Robotics Show', 'Watch a show featuring the latest in robotics technology.', 'robotics_show.jpg'),
        (6, 'Laser Tag', 'Compete with friends in an exciting game of laser tag.', 'laser_tag.jpg')
    `);
});

db.close();
