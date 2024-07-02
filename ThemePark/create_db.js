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
        ('Adventure Land', 'Adventure Land offers a thrilling experience with various exciting rides and attractions that cater to adventure seekers of all ages. Enjoy heart-pounding roller coasters, sky-high drops, and more.', 'adventure_land.jpg'),
        ('Family Fun', 'Family Fun is the perfect place for families with young children to enjoy a variety of rides and activities designed specifically for younger guests. Experience classic carousels, gentle train rides, and more.', 'family_fun.jpg'),
        ('Wild Woods', 'Wild Woods is an expansive area where you can explore both thrilling rides and a fascinating zoo/Sealife area. Discover exotic animals, embark on safaris, and enjoy the natural beauty.', 'wild_woods.jpg'),
        ('Fantasy Realm', 'Enter the magical Fantasy Realm where you can immerse yourself in a world of wonder and enchantment. Enjoy gentle boat rides through fairy tales, fly with dragons, and meet mystical creatures.', 'fantasy_realm.jpg'),
        ('Water World', 'Water World is a splash-tastic area filled with water rides and attractions that will keep you cool and entertained. Enjoy thrilling water slides, wave pools, and interactive splash pads.', 'water_park.jpg'),
        ('Tech Town', 'Experience the future in Tech Town with its futuristic rides and cutting-edge technology. Enjoy virtual reality coasters, robotics shows, and other high-tech attractions.', 'tech_world.jpg')
    `);

  // Insert data into rides
  db.run(`INSERT INTO rides (area_id, name, description, image) VALUES 
        (1, 'Roller Coaster', 'An exciting roller coaster with twists and turns that will leave you breathless. Perfect for thrill-seekers looking for an adrenaline rush.', 'roller_coaster.jpg'),
        (1, 'Sky Drop', 'A thrilling drop tower ride that will take you to new heights before plummeting back to the ground in a heart-stopping free fall.', 'sky_drop.jpg'),
        (1, 'Haunted House', 'Dare to enter the haunted house and face your fears. Explore spooky corridors and encounter eerie surprises around every corner.', 'haunted_house.jpg'),
        (2, 'Merry-Go-Round', 'A classic carousel ride for all ages. Enjoy a nostalgic ride on beautifully crafted horses and other whimsical creatures.', 'merry_go_round.jpg'),
        (2, 'Ferris Wheel', 'Enjoy a scenic view of the park from the top of the Ferris Wheel. A perfect ride for families and those looking to relax and take in the sights.', 'ferris_wheel.jpg'),
        (2, 'Kiddie Train', 'A gentle train ride perfect for young children. Ride through charming landscapes and enjoy the leisurely pace.', 'kiddie_train.jpg'),
        (3, 'Wild Safari', 'Experience a safari adventure with wild animals. Get up close and personal with exotic creatures in their natural habitats.', 'wild_safari.jpg'),
        (3, 'Sealife Adventure', 'Explore the underwater world with our Sealife Adventure. Discover fascinating marine life and learn about the ocean.', 'sealife_adventure.jpg'),
        (3, 'Treehouse Climb', 'Climb and explore the treehouse in the wild woods. Enjoy the view from above and navigate through the treetop paths.', 'treehouse_climb.jpeg'),
        (4, 'Dragon Flight', 'Fly with the dragons in this high-flying adventure. Soar through the skies and experience the thrill of dragon flight.', 'dragon_flight.jpg'),
        (4, 'Fairy Tale Journey', 'A gentle boat ride through famous fairy tales. Immerse yourself in beloved stories and meet your favorite characters.', 'fairy_tale_journey.jpg'),
        (4, 'Magic Carpet', 'Ride the magic carpet through the fantasy realm. Experience the wonder and excitement of a magical journey.', 'magic_carpet.jpg'),
        (5, 'Wave Pool', 'Catch the waves in our giant wave pool. Enjoy the fun of the surf without ever leaving the park.', 'wave_pool.jpg'),
        (5, 'Water Slide', 'Slide down our thrilling water slides. Perfect for cooling off and having fun on a hot day.', 'water_slide.jpg'),
        (5, 'Splash Pad', 'Cool off in our interactive splash pad. Enjoy the water features and interactive play areas.', 'splash_pad.jpg'),
        (6, 'VR Coaster', 'Experience a virtual reality roller coaster. Immerse yourself in a thrilling ride with cutting-edge VR technology.', 'VR_coaster.jpeg'),
        (6, 'Robotics Show', 'Watch a show featuring the latest in robotics technology. See robots perform amazing feats and entertain the whole family.', 'robotics_show.jpg'),
        (6, 'Laser Tag', 'Compete with friends in an exciting game of laser tag. Navigate through the arena and aim for victory.', 'laser_tag.jpg')
    `);
});

db.close();
