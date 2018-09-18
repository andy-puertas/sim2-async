SELECT * FROM houseusers
WHERE username = $1
AND password = $2;