DELETE FROM properties
WHERE id = $1;
SELECT *
FROM properties
WHERE userid = $2;