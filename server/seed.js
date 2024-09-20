import { db } from "./server.js";

db.query(`CREATE TABLE IF NOT EXISTS reviews (
    id SERIAL PRIMARY KEY,
    guest_name TEXT,
    check_in_date DATE,
    check_out_date DATE,
    travelled_from VARCHAR(255),
    message_to_host TEXT,
    favourite_moments TEXT,
    recommendations TEXT,
    rating ENUM('1-star', '2-star', '3-star', '4-star', '5-star')
);`);
