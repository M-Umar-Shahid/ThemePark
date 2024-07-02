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
        requirement TEXT NOT NULL,
        entertainment TEXT NOT NULL,
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
  db.run(`INSERT INTO rides (area_id, name, description, image, requirement, entertainment) VALUES 
        (1, 'Roller Coaster', 'An exciting roller coaster with twists and turns that will leave you breathless. Perfect for thrill-seekers looking for an adrenaline rush.', 'roller_coaster.jpg', 'Guests must be at least 48 inches tall to ride. Please ensure all loose items are secured before boarding.', 'Adrenaline Rush'),
        (1, 'Sky Drop', 'A thrilling drop tower ride that will take you to new heights before plummeting back to the ground in a heart-stopping free fall.', 'sky_drop.jpg', 'Guests must be at least 52 inches tall and in good health to ride. Not recommended for guests with heart conditions.', 'Thrill'),
        (1, 'Haunted House', 'Dare to enter the haunted house and face your fears. Explore spooky corridors and encounter eerie surprises around every corner.', 'haunted_house.jpg', 'No height requirements. This ride may be too intense for young children. Parental discretion is advised.', 'Fright'),
        (2, 'Merry-Go-Round', 'A classic carousel ride for all ages. Enjoy a nostalgic ride on beautifully crafted horses and other whimsical creatures.', 'merry_go_round.jpg', 'Suitable for all ages. Children under 42 inches must be accompanied by a responsible adult.', 'Nostalgia'),
        (2, 'Ferris Wheel', 'Enjoy a scenic view of the park from the top of the Ferris Wheel. A perfect ride for families and those looking to relax and take in the sights.', 'ferris_wheel.jpg', 'Suitable for all ages. Children under 42 inches must be accompanied by an adult. Not recommended for guests with a fear of heights.', 'Relaxation'),
        (2, 'Kiddie Train', 'A gentle train ride perfect for young children. Ride through charming landscapes and enjoy the leisurely pace.', 'kiddie_train.jpg', 'Suitable for all ages. Children under 36 inches must be accompanied by a responsible adult.', 'Leisure'),
        (3, 'Wild Safari', 'Experience a safari adventure with wild animals. Get up close and personal with exotic creatures in their natural habitats.', 'wild_safari.jpg', 'No height requirements. Guests are advised to stay seated and keep hands inside the vehicle at all times.', 'Adventure'),
        (3, 'Sealife Adventure', 'Explore the underwater world with our Sealife Adventure. Discover fascinating marine life and learn about the ocean.', 'sealife_adventure.jpg', 'No height requirements. This is an educational attraction suitable for all ages.', 'Education'),
        (3, 'Treehouse Climb', 'Climb and explore the treehouse in the wild woods. Enjoy the view from above and navigate through the treetop paths.', 'treehouse_climb.jpeg', 'Guests must be able to climb stairs and navigate through narrow passages. Not recommended for guests with mobility issues.', 'Exploration'),
        (4, 'Dragon Flight', 'Fly with the dragons in this high-flying adventure. Soar through the skies and experience the thrill of dragon flight.', 'dragon_flight.jpg', 'Guests must be at least 48 inches tall. Secure all loose items before boarding.', 'Fantasy'),
        (4, 'Fairy Tale Journey', 'A gentle boat ride through famous fairy tales. Immerse yourself in beloved stories and meet your favorite characters.', 'fairy_tale_journey.jpg', 'Suitable for all ages. Children under 36 inches must be accompanied by a responsible adult.', 'Storytelling'),
        (4, 'Magic Carpet', 'Ride the magic carpet through the fantasy realm. Experience the wonder and excitement of a magical journey.', 'magic_carpet.jpg', 'No height requirements. This ride is suitable for all ages.', 'Magic'),
        (5, 'Wave Pool', 'Catch the waves in our giant wave pool. Enjoy the fun of the surf without ever leaving the park.', 'wave_pool.jpg', 'Guests must wear proper swimwear. Children under 42 inches must be accompanied by a responsible adult.', 'Water Fun'),
        (5, 'Water Slide', 'Slide down our thrilling water slides. Perfect for cooling off and having fun on a hot day.', 'water_slide.jpg', 'Guests must be at least 42 inches tall to ride. Please follow lifeguard instructions at all times.', 'Water Thrill'),
        (5, 'Splash Pad', 'Cool off in our interactive splash pad. Enjoy the water features and interactive play areas.', 'splash_pad.jpg', 'Guests must wear proper swimwear. Suitable for all ages. Children must be supervised at all times.', 'Interactive Play'),
        (6, 'VR Coaster', 'Experience a virtual reality roller coaster. Immerse yourself in a thrilling ride with cutting-edge VR technology.', 'VR_coaster.jpeg', 'Guests must be at least 48 inches tall. VR headset provided; please follow all instructions for use.', 'Virtual Reality'),
        (6, 'Robotics Show', 'Watch a show featuring the latest in robotics technology. See robots perform amazing feats and entertain the whole family.', 'robotics_show.jpg', 'No height requirements. Suitable for all ages.', 'Technology'),
        (6, 'Laser Tag', 'Compete with friends in an exciting game of laser tag. Navigate through the arena and aim for victory.', 'laser_tag.jpg', 'No height requirements. Participants should be in good health and able to move quickly.', 'Competition')
    `);
});

db.close();
