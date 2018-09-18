INSERT INTO houseusers (username, password)
VALUES ($1, $2)
RETURNING *;