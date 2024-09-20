import { db } from "./server.js";

db.query(`
    CREATE TYPE rating AS ENUM ('1-star', '2-star', '3-star', '4-star', '5-star');
    CREATE TABLE IF NOT EXISTS reviews (
    id SERIAL PRIMARY KEY,
    guest_name TEXT,
    check_in_date DATE,
    check_out_date DATE,
    travelled_from VARCHAR(255),
    message_to_host TEXT,
    favourite_moments TEXT,
    recommendations TEXT,
    rating rating
);`);

db.query(`INSERT INTO reviews(guest_name, check_in_date, check_out_date, travelled_from, message_to_host, favourite_moments, recommendations, rating)
     VALUES ('Kat', '2024-09-18', '2024-09-19', 'Norfolk', 'This is a test', 'When this works', 'pinapple pizza', '4-star')`);
