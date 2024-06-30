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
        ('Adventure Land', 'Adventure Land is an exhilarating area filled with high-energy activities and thrilling rides designed to give visitors a heart-pounding experience. With a variety of attractions that challenge the senses and push the limits of fun, Adventure Land promises an unforgettable journey for thrill-seekers of all ages.', '/images/nav-nicku.png'),
        ('Family Fun', 'Family Fun area offers a delightful array of attractions perfect for families with young children. This vibrant section of the park is designed to entertain and engage younger visitors with playful rides and activities that ensure a memorable day for the entire family.', '/images/nav_dwwp.png'),
        ('Wild Woods', 'Wild Woods is an enchanting area that combines the excitement of thrilling rides with the wonders of a zoo and Sealife exhibits. Visitors can immerse themselves in the beauty of nature while enjoying adrenaline-pumping attractions and exploring the diverse wildlife habitats.', '/images/nav-bs.png')
    `);

  // Insert data into rides
  db.run(`INSERT INTO rides (area_id, name, description, image, url_text, image1, image2, image3) VALUES 
        (1, 'Angry Birds Mini Golf', 'Angry Birds Mini Golf offers an exciting and interactive experience where players can enjoy a fun-filled mini golf adventure with their favorite Angry Birds characters. Navigate through creatively designed holes, each presenting unique challenges and surprises that make for a fantastic family-friendly activity.', '/images/nav_ab.png', '/angry-birds-mini-golf', '/images/ab1.png', '/images/ab2.png', '/images/ab3.png'),
        (1, 'Mirror Maze', 'The Mirror Maze is a captivating attraction that challenges visitors to find their way through a labyrinth of reflective glass and mirrors. With twists and turns at every corner, this maze provides a mind-bending and visually stunning experience that is both fun and disorienting.', '/images/Mirror_Maze-Nav_Bar.png', '/mirror-maze', '/images/mm1.png', '/images/mm2.png', '/images/mm3.png'),
        (1, 'Activate', 'Activate is a dynamic area that encourages guests to get moving with a variety of physical activities and challenges. Whether climbing, jumping, or engaging in other energetic pursuits, Activate offers a space where visitors can enjoy active fun and push their limits in a safe and exciting environment.', '/images/nav-activate.png', '/activate', '/images/activate1.png', '/images/activate2.png', '/images/activate3.png'),
        (2, 'Surf', 'The Surf area lets visitors ride the waves and experience the thrill of surfing without needing to hit the beach. This attraction features simulated waves and expert instructors, providing a realistic surfing experience that is perfect for both beginners and seasoned surfers.', '/images/nav-surf.png', '/AdventureLand/surf', '/images/surf1.png', '/images/surf2.png', '/images/surf3.png'),
        (2, 'Legends', 'Legends is an attraction where guests can delve into the mythical and historical stories that have fascinated people for generations. Through engaging displays and interactive exhibits, visitors can explore these legendary tales and uncover the secrets behind them.', '/images/nav-legends.png', '/AdventureLand/legends', '/images/legends1.png', '/images/legends2.png', '/images/legends3.png'),
        (2, 'Escape', 'Escape offers a series of themed rooms where visitors must use their wits and teamwork to solve puzzles and find their way out. Each room presents a unique set of challenges and scenarios, making Escape a thrilling and intellectually stimulating adventure for groups.', '/images/nav-escape.png', '/AdventureLand/escape', '/images/escape1.png', '/images/escape2.png', '/images/escape3.png'),
        (3, 'DreamWorks Water Park', 'DreamWorks Water Park is a splash-tastic destination where visitors can enjoy a variety of water slides, wave pools, and lazy rivers. Featuring beloved characters from DreamWorks animations, this water park combines fun and fantasy, making it a perfect spot for cooling off and having fun.', '/images/nav_dwwp.png', '/WildWoods/dreamworks-water-park', '/images/dwwp1.jpg', '/images/dwwp2.jpg', '/images/dwwp3.jpg'),    
        (3, 'Sea Life', 'Sea Life is an enchanting attraction that allows visitors to explore the underwater world and its many wonders. With a wide range of marine exhibits, interactive touch pools, and educational displays, Sea Life offers an immersive and educational experience that highlights the beauty and diversity of ocean life.', '/images/nav-sea-life.png', '/WildWoods/sea-life', '/images/sea_life1.png', '/images/sea_life2.png', '/images/sea_life3.png')
    `);
});

db.close();
