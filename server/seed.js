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
     VALUES ('Kat', '2024-09-18', '2024-09-19', 'Norfolk', 'This is a test', 'When this works', 'pinapple pizza', '4-star'), ('Iona', '2022-12-12', '2022-12-16', 'Ipswich', 'Test data', 'Breakfast', 'coffee', '2-star'), ('Rob', '2022-12-12', '2022-12-16', 'Ipswich', 'Test data', 'Breakfast', 'coffee', '2-star'), ('Sinead', '2023-06-05', '2023-06-12', 'London', 'Test data', 'Testing', 'MORE coffee', '5-star'),('The Smiths', '2023-01-17', '2023-01-20', 'Earth', 'Test data', 'Testing', 'test test test test test test test', '5-star')`);
