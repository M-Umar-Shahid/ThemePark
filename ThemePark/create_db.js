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
      image1 TEXT,
      image1_desc TEXT,
      image2 TEXT,
      image2_desc TEXT,
      image3 TEXT,
      image3_desc TEXT,
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
        ('Adventure Land', 'Adventure Land is an exhilarating area filled with high-energy activities and thrilling rides designed to give visitors a heart-pounding experience. With a variety of attractions that challenge the senses and push the limits of fun, Adventure Land promises an unforgettable journey for thrill-seekers of all ages.', '/images/nav-nicku.png'),
        ('Family Fun', 'Family Fun area offers a delightful array of attractions perfect for families with young children. This vibrant section of the park is designed to entertain and engage younger visitors with playful rides and activities that ensure a memorable day for the entire family.', '/images/nav_dwwp.png'),
        ('Wild Woods', 'Wild Woods is an enchanting area that combines the excitement of thrilling rides with the wonders of a zoo and Sealife exhibits. Visitors can immerse themselves in the beauty of nature while enjoying adrenaline-pumping attractions and exploring the diverse wildlife habitats.', '/images/nav-bs.png')
    `);

  // Insert data into rides
  db.run(`INSERT INTO rides (area_id, name, description, image, url_text, image1, image1_desc, image2, image2_desc, image3, image3_desc) VALUES 
        (1, 'Angry Birds Mini Golf', 'Angry Birds Mini Golf offers an exciting and interactive experience where players can enjoy a fun-filled mini golf adventure with their favorite Angry Birds characters. Navigate through creatively designed holes, each presenting unique challenges and surprises that make for a fantastic family-friendly activity.', '/images/nav_ab.png', '/angry-birds-mini-golf', 
        '/images/ab1.png', 'An overhead view of the mini golf course featuring vibrant and colorful obstacles designed with Angry Birds characters.', 
        '/images/ab2.png', 'Close-up of players putting through a windmill obstacle themed after Angry Birds structures.', 
        '/images/ab3.png', 'A family enjoying the mini golf course, with kids celebrating a successful putt.'),
        
        (1, 'Mirror Maze', 'The Mirror Maze is a captivating attraction that challenges visitors to find their way through a labyrinth of reflective glass and mirrors. With twists and turns at every corner, this maze provides a mind-bending and visually stunning experience that is both fun and disorienting.', '/images/Mirror_Maze-Nav_Bar.png', '/mirror-maze', 
        '/images/mm1.png', 'A mesmerizing hallway filled with reflective mirrors creating an illusion of endless pathways.', 
        '/images/mm2.png', 'Visitors carefully navigating through the maze, their reflections multiplying in the mirrors.', 
        '/images/mm3.png', 'A child reaching out to touch the glass, fascinated by the multiple reflections surrounding them.'),
        
        (1, 'Activate', 'Activate is a dynamic area that encourages guests to get moving with a variety of physical activities and challenges. Whether climbing, jumping, or engaging in other energetic pursuits, Activate offers a space where visitors can enjoy active fun and push their limits in a safe and exciting environment.', '/images/nav-activate.png', '/activate', 
        '/images/activate1.png', 'A large climbing wall with various difficulty levels, children and adults actively climbing.', 
        '/images/activate2.png', 'A trampoline area where visitors are jumping and performing flips, showcasing their agility.', 
        '/images/activate3.png', 'A ropes course suspended above the ground, with participants safely navigating the challenges.'),
        
        (2, 'Surf', 'The Surf area lets visitors ride the waves and experience the thrill of surfing without needing to hit the beach. This attraction features simulated waves and expert instructors, providing a realistic surfing experience that is perfect for both beginners and seasoned surfers.', '/images/nav-surf.png', '/AdventureLand/surf', 
        '/images/surf1.png', 'Visitors riding simulated waves, capturing the thrill of surfing indoors.', 
        '/images/surf2.png', 'An instructor guiding a young surfer on how to balance and ride the waves.', 
        '/images/surf3.png', 'A group of friends laughing and enjoying their time on the surf simulator.'),
        
        (2, 'Legends', 'Legends is an attraction where guests can delve into the mythical and historical stories that have fascinated people for generations. Through engaging displays and interactive exhibits, visitors can explore these legendary tales and uncover the secrets behind them.', '/images/nav-legends.png', '/AdventureLand/legends', 
        '/images/legends1.png', 'A display featuring mythical creatures and historical artifacts, with interactive touchscreens for more information.', 
        '/images/legends2.png', 'Visitors engaging with an exhibit about ancient legends, with immersive storytelling elements.', 
        '/images/legends3.png', 'A reenactment area where guests can dress up and participate in legendary tales.'),
        
        (2, 'Escape', 'Escape offers a series of themed rooms where visitors must use their wits and teamwork to solve puzzles and find their way out. Each room presents a unique set of challenges and scenarios, making Escape a thrilling and intellectually stimulating adventure for groups.', '/images/nav-escape.png', '/AdventureLand/escape', 
        '/images/escape1.png', 'A group of friends working together to solve a puzzle in a themed escape room.', 
        '/images/escape2.png', 'Close-up of hands manipulating a lock mechanism, trying to unlock the next clue.', 
        '/images/escape3.png', 'Participants celebrating as they successfully escape the room, high-fiving each other.'),
        
        (3, 'DreamWorks Water Park', 'DreamWorks Water Park is a splash-tastic destination where visitors can enjoy a variety of water slides, wave pools, and lazy rivers. Featuring beloved characters from DreamWorks animations, this water park combines fun and fantasy, making it a perfect spot for cooling off and having fun.', '/images/nav_dwwp.png', '/WildWoods/dreamworks-water-park', 
        '/images/dwwp1.jpg', 'An aerial view of the water park, showcasing various water slides and pools.', 
        '/images/dwwp2.jpg', 'Kids playing in a shallow pool with DreamWorks characters'' sculptures around.', 
        '/images/dwwp3.jpg', 'A family floating down a lazy river, surrounded by lush greenery and playful water features.'),    
        
        (3, 'Sea Life', 'Sea Life is an enchanting attraction that allows visitors to explore the underwater world and its many wonders. With a wide range of marine exhibits, interactive touch pools, and educational displays, Sea Life offers an immersive and educational experience that highlights the beauty and diversity of ocean life.', '/images/nav-sea-life.png', '/WildWoods/sea-life', 
        '/images/sea_life1.png', 'A large aquarium tank with diverse marine life, including colorful fish and corals.', 
        '/images/sea_life2.png', 'Visitors at an interactive touch pool, gently touching starfish and other sea creatures.', 
        '/images/sea_life3.png', 'An educational display about marine conservation, with engaging visuals and information.')
    `);
});

db.close();
