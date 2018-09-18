-- USERS TABLE

-- CREATE TABLE houseusers (
--    id SERIAL PRIMARY KEY,
--    username VARCHAR(20),
--    password VARCHAR(20)
-- )


-- PROPERTIES TABLE

-- CREATE TABLE Properties (
--     id SERIAL PRIMARY KEY,
--     userid INTEGER NOT NULL REFERENCES houseusers(ID),
--     name VARCHAR(250),
--     description TEXT,
--     address VARCHAR(250),
--     city VARCHAR(250),
--     state VARCHAR(250),
--     zip VARCHAR(250),
--     image TEXT,
--     loanAmount VARCHAR(250),
--     monthlyMortgage VARCHAR(250),
--     desiredRent VARCHAR(250)
--     recommendedRent VARCHAR(250)
-- );


-- Creating user

-- INSERT INTO houseusers (username, password)
-- VALUES ($1, $2)
-- RETUNING *;

