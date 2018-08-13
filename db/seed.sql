-- USERS TABLE

-- CREATE TABLE houseusers (
--    ID SERIAL PRIMARY KEY,
--    Username VARCHAR(20),
--    Password VARCHAR(20)
-- )


-- PROPERTIES TABLE

-- CREATE TABLE Properties (
--     ID SERIAL PRIMARY KEY,
--     UserID INTEGER NOT NULL REFERENCES houseusers(ID),
--     Name VARCHAR(250),
--     Description TEXT,
--     Address VARCHAR(250),
--     City VARCHAR(250),
--     State VARCHAR(250),
--     Zip VARCHAR(250),
--     Image TEXT,
--     LoanAmount DECIMAL,
--     MonthlyMortgage DECIMAL,
--     Rent DECIMAL
-- );


-- Creating user

-- INSERT INTO houseusers (username, password)
-- VALUES ($1, $2)
-- RETUNING *;

